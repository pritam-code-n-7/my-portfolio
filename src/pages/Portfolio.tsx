import { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { RiArrowDownWideLine } from "react-icons/ri";
import HeroSection from "../components/HeroSection";


//main function consists of childrens
function Portfolio() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  //for sidebar open
  const handleToggleClick = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  //close sidebar by clicking on the rest document
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const location = useLocation();

  //close sidebar when location changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex">
      <aside ref={sidebarRef} className="flex flex-col ">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-2 p-2 "
            role="button"
            tabIndex={0}
            onClick={handleToggleClick}
            onKeyDown={(e) => e.key === "Enter" && handleToggleClick()}
          >
            <RiArrowDownWideLine size="20px" />
            <span>Menu</span>
          </div>
          <hr className="border border-neutral-800" />
        </div>
       
          <Sidebar open={sidebarOpen} onClick={handleSidebarClose} />
       
      </aside>
      {location.pathname === "/portfolio" && <HeroSection />}
      <div className="p-4 m-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Portfolio;
