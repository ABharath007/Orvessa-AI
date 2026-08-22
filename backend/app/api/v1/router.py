from fastapi import APIRouter

from app.api.v1.auth.router import router as auth_router
# from app.api.v1.dashboard.router import router as dashboard_router
# from app.api.v1.designers.router import router as designers_router
# from app.api.v1.designs.router import router as designs_router
# from app.api.v1.favorites.router import router as favorites_router
# from app.api.v1.furniture.router import router as furniture_router
# from app.api.v1.gallery.router import router as gallery_router
# from app.api.v1.palettes.router import router as palettes_router
# from app.api.v1.pricing.router import router as pricing_router
# from app.api.v1.profile.router import router as profile_router
# from app.api.v1.projects.router import router as projects_router
# from app.api.v1.rooms.router import router as rooms_router
# from app.api.v1.settings.router import router as settings_router
# from app.api.v1.uploads.router import router as uploads_router
# from app.api.v1.users.router import router as users_router


api_router = APIRouter()

api_router.include_router(auth_router, prefix="/auth", tags=["Authentication"])
# api_router.include_router(dashboard_router, prefix="/dashboard", tags=["Dashboard"])
# api_router.include_router(designers_router, prefix="/designers", tags=["Designers"])
# api_router.include_router(designs_router, prefix="/designs", tags=["Designs"])
# api_router.include_router(favorites_router, prefix="/favorites", tags=["Favorites"])
# api_router.include_router(furniture_router, prefix="/furniture", tags=["Furniture"])
# api_router.include_router(gallery_router, prefix="/gallery", tags=["Gallery"])
# api_router.include_router(palettes_router, prefix="/palettes", tags=["Palettes"])
# api_router.include_router(pricing_router, prefix="/pricing", tags=["Pricing"])
# api_router.include_router(profile_router, prefix="/profile", tags=["Profile"])
# api_router.include_router(projects_router, prefix="/projects", tags=["Projects"])
# api_router.include_router(rooms_router, prefix="/rooms", tags=["Rooms"])
# api_router.include_router(settings_router, prefix="/settings", tags=["Settings"])
# api_router.include_router(uploads_router, prefix="/uploads", tags=["Uploads"])
# api_router.include_router(users_router, prefix="/users", tags=["Users"])