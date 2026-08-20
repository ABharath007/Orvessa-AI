from sqlalchemy.orm import Session

from app.core.security import (
    create_access_token,
    create_refresh_token,
    get_refresh_token_expiry,
    hash_password,
    hash_token,
    verify_password,
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
                raise ValueError("Email already registered")

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
                raise ValueError("Invalid email or password")

            if not verify_password(data.password, user.hashed_password):
                raise ValueError("Invalid email or password")

            if not user.is_active:
                raise ValueError("User account is inactive")

            expires_at = get_refresh_token_expiry()

            access_token = create_access_token(str(user.id))

            refresh_token = create_refresh_token(
            str(user.id),
            expires_at,)

            refresh_token_record = RefreshToken(
            user_id=user.id,
            token_hash=hash_token(refresh_token),
            expires_at=expires_at,)

            self.refresh_token_repository.create(refresh_token_record)

            self.db.commit()

            return AuthResult(
            user=UserResponse.model_validate(user),
            access_token=access_token,
            refresh_token=refresh_token,)

        except Exception:
            self.db.rollback()
            raise
        
