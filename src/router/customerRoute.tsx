import RoleRoute from "./roleRoute";
import MainLayout from "@/components/layout/MainLayout";
import HomePage from "@/home/pages/HomePage";
import ProfilePage from "@/home/pages/ProfilePage";

const customerRoute = [
  {
    path: "/",
    element: <RoleRoute allow={["customer", "admin", "employee"]} />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
];

export default customerRoute;
