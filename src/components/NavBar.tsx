import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaLink } from "react-icons/fa6";
import SocialLinks from "../reusables/SocialLinks";

const NavBar: React.FC = () => {
  const [isDropDown, setIsDropDown] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleClick = () => {
    setIsDropDown((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setIsDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropDownRef} className="relative">
      <nav className="flex justify-between items-center p-2 bg-neutral-900 shadow border-b-2 border-b-violet-900 rounded">
        <div className="flex items-center gap-6">
          <img
            src="/assets/pf.jpeg"
            alt="profile image"
            className="h-10 w-10 rounded-full ring-2 ring-white"
            loading="lazy"
          />
          <h1 className="text-lg font-bold text-white">Portfolio Website</h1>
        </div>
        <div className="flex items-center gap-6">
          {location.pathname !== "/" && (
            <Link to="/">
              <button className="px-2 py-1 rounded-full text-white ring-2 ring-white focus:bg-violet-500">
                Home
              </button>
            </Link>
          )}
          <button
            onClick={handleClick}
            className="flex items-center text-blue-500 underline font-bold text-xs focus:text-lg transition-all duration-200"
          >
            <span className="mr-2">Social Links</span>
            <FaLink size="20px" />
          </button>
        </div>
      </nav>
      {isDropDown && (
        <div className="absolute z-50 right-0 mt-2 w-40 p-2">
          <SocialLinks />
        </div>
      )}
    </div>
  );
};

export default NavBar;
