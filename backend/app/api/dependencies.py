import jwt

from uuid import UUID

from fastapi import Cookie, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.security import decode_access_token
from app.repositories.user import UserRepository

from app.core.exceptions import (
    AuthenticationRequiredError,
    InvalidAccessTokenError,
    UserNotFoundError,
    InactiveUserError,
)



def get_current_user(
    access_token: str | None = Cookie(default=None),
    db: Session = Depends(get_db),
):
    if not access_token:
        raise AuthenticationRequiredError()

    try:
        payload = decode_access_token(access_token)

        if payload.get("type") != "access":
            raise InvalidAccessTokenError()

        user_id = payload.get("sub")

        if not user_id:
            raise InvalidAccessTokenError()

        user_uuid = UUID(user_id)

    except (jwt.InvalidTokenError, ValueError, TypeError):
        raise InvalidAccessTokenError()

    user_repository = UserRepository(db)

    user = user_repository.get_by_id(user_uuid)

    if not user:
        raise UserNotFoundError()

    if not user.is_active:
        raise InactiveUserError()

    return user