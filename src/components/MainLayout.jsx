import Header from "./Header";
import { Outlet } from "react-router-dom";
import CartOverview from "./CartOverview";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <CartOverview />
    </div>
  );
};

export default MainLayout;
