from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.user import AuthResponse, UserCreate
from app.services.auth import AuthService


router = APIRouter()


@router.post("/register", response_model=AuthResponse)
def register(
    data: UserCreate,
    db: Session = Depends(get_db),
):
    service = AuthService(db)

    result = service.register(data)

    return AuthResponse(
        user=result.user,
    )