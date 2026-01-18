import { createBrowserRouter } from "react-router-dom";
import ScrollRestorationWrapper from "@/components/scroll-restoration-wrapper";
import MainLayout from "@/components/layout/MainLayout";
import publicRoute from "./publicRoute";
import authRoute from "./authRoute";
import customerRoute from "./customerRoute";
import adminRoute from "./adminRoute";
import NotFoundPage from "@/home/pages/NotFoundPage";

const wrapWithScrollRestoration = (routes: any) => {
  return routes.map((route: any) => ({
    ...route,
    element: (
      <ScrollRestorationWrapper>{route.element}</ScrollRestorationWrapper>
    ),
  }));
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [...wrapWithScrollRestoration(publicRoute)],
  },
  ...wrapWithScrollRestoration(authRoute),
  ...wrapWithScrollRestoration(customerRoute),
  ...wrapWithScrollRestoration(adminRoute),
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
