import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="bg-black text-white ">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
