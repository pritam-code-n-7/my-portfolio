import { NavLink } from "react-router-dom";
import { ReactElement } from "react";
import { SiBookmyshow } from "react-icons/si";
import { MdOutlineContactMail, MdWork } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";


//declared an array of objects consist of side bar properties
const links = [
  { to: "/portfolio/aboutme", icon: <SiBookmyshow />, name: "About Me" },
  { to: "/portfolio/career", icon: <MdWork />, name: "Career Summary" },
  {
    to: "/portfolio/projects",
    icon: <GoProjectSymlink />,
    name: "Personal Projects",
  },
  { to: "/portfolio/skills", icon: <GiSkills />, name: "Skills" },
  {
    to: "/portfolio/contact",
    icon: <MdOutlineContactMail />,
    name: "Contact Me",
  },
];
//declared an interface for type safty
interface SidebarLinkProps {
  to: string;
  icon: ReactElement;
  name: string;
}

//parent element of list
const SideBarLink = ({ name, to, icon }: SidebarLinkProps) => (
  <li key={to}>
    <NavLink
      to={to}
      className={({ isActive }) => `${isActive ? "text-amber-700" : ""}`}
    >
      <div className="flex items-center gap-2 p-6 rounded-lg dark:hover:bg-gray-800 group dark:hover:text-white transition-colors duration-300">
        <div>{icon}</div>
        <span> {name}</span>
      </div>
    </NavLink>
  </li>
);

interface SidebarTypes {
  open: boolean;
  onClick?: () => void;
  type?: "button" | "reset";
}

const Sidebar = ({ open, onClick, type }: SidebarTypes) => {
  return (
    
    <dialog open={open} className="min-h-screen w-full fixed z-50 inset-0">
      <div className="flex justify-center mt-2">
        <button onClick={onClick} type={type}>
          <IoMdClose size={"30"} />
        </button>
      </div>
      <div>
        <ul className="flex-grow mt-2">
          {links.map((link) => (
            <SideBarLink
              key={link.to}
              to={link.to}
              icon={link.icon}
              name={link.name}
            />
          ))}
        </ul>
      </div>
    </dialog>
 
  );
};

export default Sidebar;
