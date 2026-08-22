from fastapi import FastAPI
from app.core.config import settings
from app.api.v1.router import api_router
from app.core.exception_handlers import app_exception_handler
from app.core.exceptions import AppException

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION
)

app.add_exception_handler(AppException, app_exception_handler)

app.include_router(api_router, prefix="/api/v1")


@app.get("/")
def root():
    return {
        "message": f"Welcome to {settings.APP_NAME}"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }