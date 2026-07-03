import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from "../types/auth.types";

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function mockLogin(
  data: LoginRequest
): Promise<AuthResponse> {
  await delay(1000);

  return {
    accessToken: "mock-access-token",
    refreshToken: "mock-refresh-token",
    user: {
      id: "1",
      fullName: "Kiran",
      email: data.email,
    },
  };
}

export async function mockRegister(
  data: RegisterRequest
): Promise<AuthResponse> {
  await delay(1200);

  return {
    accessToken: "mock-access-token",
    refreshToken: "mock-refresh-token",
    user: {
      id: "2",
      fullName: data.fullName,
      email: data.email,
    },
  };
}