// src/routes/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "@/store/useUserStore";

export const ProtectedRoute = () => {
  const { user } = useUserStore((state) => state);

  if (!user) return <Navigate to={"/"} replace />;

  return <Outlet />;

};
