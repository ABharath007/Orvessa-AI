from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase

from app.core.config import settings


# Create SQLAlchemy Engine
engine = create_engine(
    settings.DATABASE_URL,
    echo=settings.DEBUG
)


# Create Session Factory
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)


# Base Class for all Models
class Base(DeclarativeBase):
    pass


# Dependency to get DB Session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()