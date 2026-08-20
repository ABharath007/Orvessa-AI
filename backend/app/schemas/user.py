from pydantic import BaseModel, EmailStr, Field, ConfigDict
import uuid
from datetime import datetime


class UserCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    password: str = Field(..., min_length=8, max_length=128)

class UserResponse(BaseModel):
    id: uuid.UUID
    name: str
    email: EmailStr
    avatar_url: str | None
    role: str
    is_active: bool
    created_at: datetime
    updated_at: datetime
    model_config = ConfigDict(from_attributes=True)
    
class LoginRequest(BaseModel):
    email: EmailStr
    password: str
    
class AuthResponse(BaseModel):
    user: UserResponse