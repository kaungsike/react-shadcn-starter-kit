import { useState } from "react";
import { api } from "@/lib/axios"; // your axios instance
import { useUserStore } from "@/store/useUserStore";
import { toast } from "sonner";

export const useChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const { token } = useUserStore(); // safe inside hook
  const [errors, setErrors] = useState<Record<string, string>>({});

  const changePassword = async (formData: {
    current_password: string;
    new_password: string;
    new_password_confirmation: string;
  }) => {
    setLoading(true);
    setErrors({});

    try {
      const response = await api.post(
        "/user/change-password",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response?.data?.message || "Password changed successfully");
      setLoading(false);
      return response.data;
    } catch (err: any) {
      setLoading(false);

      // Handle validation errors from backend
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        toast.error(err.response?.data?.message || "Something went wrong!");
      }

      throw err;
    }
  };

  return { loading, errors, changePassword };
};
