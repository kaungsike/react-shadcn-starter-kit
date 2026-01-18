import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { api } from "@/lib/axios";
import { formatDateForLoginToast } from "@/lib/toaste";
import type { registerRequest, registerResponse } from "@/types/register";

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const register = async (data: registerRequest) => {
    try {
      setLoading(true);
      setError(null);

      const res = await api.post<registerResponse>("/auth/register", data);
      toast.success(res?.data?.message || "Register successful", {
        description: formatDateForLoginToast(),
      });
      navigate("/login");
      return res.data;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message ?? "Register failed";
      setError(errorMessage);

      // Use the formatted date here
      toast.error(errorMessage, {
        description: formatDateForLoginToast(),
      });

      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
}
