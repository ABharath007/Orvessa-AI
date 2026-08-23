from fastapi import APIRouter, Cookie, Depends, Response
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.user import AuthData, AuthResponse, UserCreate, LoginRequest, UserData, ProfileResponse, UserResponse
from app.services.auth import AuthService
from app.api.dependencies import get_current_user
from app.core.exceptions import AuthenticationRequiredError


router = APIRouter()


@router.post("/register", response_model=AuthResponse)
def register(
    data: UserCreate,
    response: Response,
    db: Session = Depends(get_db),
):
    service = AuthService(db)

    result = service.register(data)

    response.set_cookie(
        key="access_token",
        value=result.access_token,
        httponly=True,
        secure=False,
        samesite="lax",
    )

    response.set_cookie(
        key="refresh_token",
        value=result.refresh_token,
        httponly=True,
        secure=False,
        samesite="lax",
    )

    return AuthResponse(
        message="Registration successful",
        data=AuthData(user=result.user),
    )
    
@router.post("/login", response_model=AuthResponse)
def login(data: LoginRequest, response: Response, db:Session = Depends(get_db),):
    service = AuthService(db)
    result = service.login(data)
    response.set_cookie(
        key = "access_token",
        value = result.access_token,
        httponly = True,
        secure = False,
        samesite = "lax",
    )
    response.set_cookie(
        key = "refresh_token",
        value = result.refresh_token,   
        httponly = True,
        secure = False,
        samesite = "lax",
    )
    return AuthResponse(
        message = "Login successful",
        data = AuthData(user = result.user)
    )
    
@router.get("/profile", response_model=ProfileResponse)
def get_profile(current_user = Depends(get_current_user)):
    return ProfileResponse(
        message="Profile fetched successfully",
        data=UserData(user=UserResponse.model_validate(current_user))
    )
    
@router.post("/refresh", response_model=AuthResponse)
def refresh_token(response: Response, refresh_token: str | None = Cookie(default=None), db: Session = Depends(get_db)):
    if not refresh_token:
        raise AuthenticationRequiredError()
    
    service = AuthService(db)
    result = service.refresh(refresh_token)
    response.set_cookie(
        key="access_token",
        value=result.access_token,
        httponly=True,
        secure=False,
        samesite="lax",
    )
    response.set_cookie(
        key="refresh_token",
        value=result.refresh_token,
        httponly=True,
        secure=False,
        samesite="lax",
    )
    return AuthResponse(
        message="Token refreshed successfully",
        data=AuthData(user=result.user)
    )