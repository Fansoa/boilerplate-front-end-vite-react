import { useRoutes } from "react-router-dom";
import TestComponent from "../components/TestComponent/index.jsx";

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
