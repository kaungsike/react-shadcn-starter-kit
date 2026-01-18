import DashboardLayout from "@/components/layout/DashboardLayout";
import RoleRoute from "./roleRoute";
import DashboardPage from "@/features/admin/pages/DashboardPage";
import EmployeePage from "@/features/admin/pages/EmployeePage";

const adminRoute = [
  {
    path: "dashboard",
    element: <RoleRoute allow={["admin"]} />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "dashboard",
            element: <DashboardPage />,
          },
          {
            path: "employee",
            element: <EmployeePage />,
          },
        ],
      },
    ],
  },
];

export default adminRoute;
