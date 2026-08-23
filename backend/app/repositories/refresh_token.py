from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.refresh_token import RefreshToken


class RefreshTokenRepository:

    def __init__(self, db: Session):
        self.db = db

    def get_by_token_hash(self, token_hash: str) -> RefreshToken | None:
        statement = select(RefreshToken).where(
            RefreshToken.token_hash == token_hash
        )

        return self.db.scalar(statement)
    
    def create(self, refresh_token: RefreshToken) -> RefreshToken:
        self.db.add(refresh_token)
        self.db.flush()

        return refresh_token
    
    def revoke(self, refresh_token: RefreshToken) -> RefreshToken:
        try:
            refresh_token.revoked = True
            self.db.commit()
            self.db.refresh(refresh_token)

            return refresh_token
        except Exception:
            self.db.rollback()
            raise
    