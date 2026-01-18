import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { api } from "@/lib/axios";
import { formatDateForLoginToast } from "@/lib/toaste";
import type { loginRequest, loginResponse } from "@/types/login";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const login = async (data: loginRequest) => {
    try {
      setLoading(true);
      setError(null);

      const res = await api.post<loginResponse>("/auth/login", data);
      toast.success(res?.data?.message || "Login successful", {
        description: formatDateForLoginToast(),
      });
      navigate("/dashboard");
      return res.data;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message ?? "Login failed";
      setError(errorMessage);

      toast.error(errorMessage, {
        description: formatDateForLoginToast(),
      });

      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
