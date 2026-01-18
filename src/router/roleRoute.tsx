import { useUserStore } from "@/store/useUserStore";
import { Navigate, Outlet } from "react-router";

const RoleRoute = ({ allow }: any) => {
  const { user, token } = useUserStore();
  // Not logged in
  if (!token || !user) {
    return <Navigate to="/" replace />;
  }

  // Role not allowed
  if (!allow.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default RoleRoute;
