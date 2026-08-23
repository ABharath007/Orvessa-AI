from sqlalchemy.orm import Session
from uuid import UUID
from datetime import datetime, timezone
from app.core.security import (
    create_access_token,
    create_refresh_token,
    decode_access_token,
    get_refresh_token_expiry,
    hash_password,
    hash_token,
    verify_password,
)
from app.core.exceptions import (
    UserAlreadyExistsError,
    InvalidCredentialsError,
    InactiveUserError,
    InvalidRefreshTokenError,
    RefreshTokenRevokedError,
)
from app.models.user import User
from app.repositories.user import UserRepository
from app.schemas.user import UserCreate, UserResponse, LoginRequest
from dataclasses import dataclass
from app.models.refresh_token import RefreshToken
from app.repositories.refresh_token import RefreshTokenRepository

@dataclass
class AuthResult:
    user: UserResponse
    access_token: str
    refresh_token: str



class AuthService:

    def __init__(self, db: Session):
        self.db = db
        self.user_repository = UserRepository(db)
        self.refresh_token_repository = RefreshTokenRepository(db)

    def register(self, data: UserCreate) -> AuthResult:
        try:
            existing_user = self.user_repository.get_by_email(data.email)

            if existing_user:
                raise UserAlreadyExistsError()

            hashed_password = hash_password(data.password)

            user = User(
            name=data.name,
            email=data.email,
            hashed_password=hashed_password,
            )

            user = self.user_repository.create(user)

            expires_at = get_refresh_token_expiry()

            access_token = create_access_token(str(user.id))

            refresh_token = create_refresh_token(
            str(user.id),
            expires_at,
            )

            refresh_token_record = RefreshToken(
            user_id=user.id,
            token_hash=hash_token(refresh_token),
            expires_at=expires_at,
            )

            self.refresh_token_repository.create(refresh_token_record)

            self.db.commit()

            return AuthResult(
            user=UserResponse.model_validate(user),
            access_token=access_token,
            refresh_token=refresh_token,)

        except Exception:
            self.db.rollback()
            raise
        
    def login(self, data: LoginRequest) -> AuthResult:
        try:
            user = self.user_repository.get_by_email(data.email)

            if not user:
                raise InvalidCredentialsError()

            if not verify_password(data.password, user.hashed_password):
                raise InvalidCredentialsError()

            if not user.is_active:
                raise InactiveUserError()

            expires_at = get_refresh_token_expiry()

            access_token = create_access_token(str(user.id))

            refresh_token = create_refresh_token(
                                str(user.id),
                                expires_at,
                            )

            refresh_token_record = RefreshToken(
                user_id=user.id,
                token_hash=hash_token(refresh_token),
                expires_at=expires_at,
            )

            self.refresh_token_repository.create(refresh_token_record)

            self.db.commit()

            return AuthResult(
                user=UserResponse.model_validate(user),
                access_token=access_token,
                refresh_token=refresh_token,
            )

        except Exception:
            self.db.rollback()
            raise
        
    def refresh(self, refresh_token: str) -> AuthResult:
        try:
            payload = decode_access_token(refresh_token)

            if payload.get("type") != "refresh":
                raise InvalidRefreshTokenError()

            user_id = payload.get("sub")

            if not user_id:
                raise InvalidRefreshTokenError()
            try:
                user_id = UUID(user_id)
            except (ValueError, TypeError):
                raise InvalidRefreshTokenError()
            
            token_hash = hash_token(refresh_token)

            stored_token = self.refresh_token_repository.get_by_token_hash(
                token_hash
            )

            if not stored_token:
                raise InvalidRefreshTokenError()

            if stored_token.revoked:
                raise RefreshTokenRevokedError()

            if stored_token.expires_at <= datetime.now(timezone.utc):
                raise InvalidRefreshTokenError()

            user = self.user_repository.get_by_id(user_id)

            if not user:
                raise InvalidRefreshTokenError()

            if not user.is_active:
                raise InactiveUserError()

            expires_at = get_refresh_token_expiry()

            access_token = create_access_token(str(user.id))

            new_refresh_token = create_refresh_token(
                str(user.id),
                expires_at,
            )

            stored_token.revoked = True

            new_refresh_token_record = RefreshToken(
                user_id=user.id,
                token_hash=hash_token(new_refresh_token),
                expires_at=expires_at,
            )

            self.refresh_token_repository.create(
                new_refresh_token_record
            )

            self.db.commit()

            return AuthResult(
                user=UserResponse.model_validate(user),
                access_token=access_token,
                refresh_token=new_refresh_token,
            )

        except Exception:
            self.db.rollback()
            raise
