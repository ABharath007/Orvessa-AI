export interface User{
    id:string;
    name:string;
    email:string;
    avatar?:string;

}
export interface LoginRequest{
    email:string;
    password:string;
}
export interface RegisterRequest{
    name:string;
    email:string;
    password:string;
    confirmPassword:string;
}
export interface AuthResponse{
    accessToken:string;
    refreshToken:string;
    user: User;
}
