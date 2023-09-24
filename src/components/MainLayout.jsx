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
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
