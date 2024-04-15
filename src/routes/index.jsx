import { useRoutes } from "react-router-dom";
import TestComponent from "@/src/components/TestComponent";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <TestComponent />,
    },
  ]);
  return routes;
};

export default Routes;
