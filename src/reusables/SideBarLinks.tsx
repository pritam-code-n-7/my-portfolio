import { ReactElement } from "react";

interface SideBarLinkTypes {
  icon: ReactElement;
  name: string;
}

const SideBarLinks = ({ icon, name }: SideBarLinkTypes) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className="flex items-center px-4 py-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition-colors"
    >
      <div className="text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white">
        {icon}
      </div>
      <span className="ml-3">{name}</span>
    </div>
  );
};

export default SideBarLinks;
