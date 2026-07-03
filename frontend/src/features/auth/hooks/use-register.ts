import { useMutation } from "@tanstack/react-query";

import { authService } from "../services/auth.service";
import { useAuthStore } from "../store/auth.store";

export function useRegister() {
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: authService.register,

    onSuccess(data) {
      login(
        data.user,
        data.accessToken,
        data.refreshToken
      );

      console.log("Registration Successful", data);
    },

    onError(error) {
      console.error(error);
    },
  });
}