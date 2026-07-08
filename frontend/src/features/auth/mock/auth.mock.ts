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

  console.log("✅ LOGIN CALLED");
  console.log(data);

  return {
    accessToken: "mock-access-token",
    refreshToken: "mock-refresh-token",
    user: {
      id: Date.now().toString(),
      fullName: "Kiran",
      email: data.email,
    },
  };
}

export async function mockRegister(
  data: RegisterRequest
): Promise<AuthResponse> {
  await delay(1200);

  console.log("✅ REGISTER CALLED");
  console.log(data);

  return {
    accessToken: "mock-access-token",
    refreshToken: "mock-refresh-token",
    user: {
      id: Date.now().toString(),
      fullName: data.fullName,
      email: data.email,
    },
  };
}