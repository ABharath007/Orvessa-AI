from uuid import UUID
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.user import User


class UserRepository:

    def __init__(self, db: Session):
        self.db = db

    def get_by_email(self, email: str) -> User | None:
        statement = select(User).where(User.email == email)

        return self.db.scalar(statement)
    
    def create(self, user: User) -> User:
        self.db.add(user)
        self.db.flush()

        return user
        
    def get_by_id(self, user_id: UUID) -> User | None:
            statement = select(User).where(User.id == user_id)
            return self.db.scalar(statement)
    
    def update(self, user: User) -> User:
        try:
            self.db.commit()
            self.db.refresh(user)

            return user
        except Exception:
            self.db.rollback()
            raise
    def delete(self, user: User) -> None:
        try:
            self.db.delete(user)
            self.db.commit()
        except Exception:
            self.db.rollback()
            raise
        
    