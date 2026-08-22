class AppException(Exception):
    def __init__(
        self,
        message: str,
        error_code: str,
        status_code: int,
    ):
        self.message = message
        self.error_code = error_code
        self.status_code = status_code

        super().__init__(message)

class UserAlreadyExistsError(AppException):
    def __init__(self):
        super().__init__(
            message="Email already registered",
            error_code="USER_ALREADY_EXISTS",
            status_code=409,
        )


class InvalidCredentialsError(AppException):
    def __init__(self):
        super().__init__(
            message="Invalid email or password",
            error_code="INVALID_CREDENTIALS",
            status_code=401,
        )


class InactiveUserError(AppException):
    def __init__(self):
        super().__init__(
            message="User account is inactive",
            error_code="USER_INACTIVE",
            status_code=403,
        )
        
class AuthenticationRequiredError(AppException):
    def __init__(self):
        super().__init__(
            message="Authentication required",
            error_code="AUTHENTICATION_REQUIRED",
            status_code=401,
        )


class InvalidAccessTokenError(AppException):
    def __init__(self):
        super().__init__(
            message="Invalid access token",
            error_code="INVALID_ACCESS_TOKEN",
            status_code=401,
        )


class UserNotFoundError(AppException):
    def __init__(self):
        super().__init__(
            message="User not found",
            error_code="USER_NOT_FOUND",
            status_code=401,
        )
