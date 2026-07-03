import { mockLogin, mockRegister } from "../mock/auth.mock";

import type {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
} from "../types/auth.types";

export const authService = {
  async login(
    data: LoginRequest
  ): Promise<AuthResponse> {
    return await mockLogin(data);
  },

  async register(
    data: RegisterRequest
  ): Promise<AuthResponse> {
    return await mockRegister(data);
  },

  async logout(): Promise<void> {
    return Promise.resolve();
  },
};