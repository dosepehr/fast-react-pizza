import { useSelector } from "react-redux";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import { selectUserName } from "../redux/reducers/userSlice";
import { useEffect } from "react";
const MainLayout = () => {
  const username = useSelector((state) => selectUserName(state));
  const navigate = useNavigate();
  useEffect(() => {
    if (username) {
      navigate("/menu");
    }
  }, [navigate, username]);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
