import Navbar from "@/components/Navbar";
import ErrorPage from "@/pages/ErrorPage";
import { Outlet, useRouteError } from "react-router-dom";
const MainLayout = () => {
  const error = useRouteError();
  return (
    <div>
      <Navbar />

         {error ? <ErrorPage /> : <Outlet />}

    </div>
  );
};

export default MainLayout;
