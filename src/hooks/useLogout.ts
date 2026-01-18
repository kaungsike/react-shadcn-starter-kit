import { useUserStore } from "@/store/useUserStore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useLogout() {
  const navigate = useNavigate();
  const user = useUserStore((s) => s.user);
  const logout = useUserStore((s) => s.logout);

  const handleLogout = () => {
    const role = user?.role;
    logout();

    if (role === "customer") {
      navigate("/", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }

    toast.success("Successfully logged out");
  };

  return { handleLogout };
}
