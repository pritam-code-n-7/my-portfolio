import { Link } from "react-router-dom";
import Data from "../data/About.json";
import SideBarLinks from "./SideBarLinks";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { GiBookCover } from "react-icons/gi";
import { TbBrandVercel } from "react-icons/tb";

const icons: { [key: string]: JSX.Element } = {
  Email: <MdOutlineEmail />,
  LinkedIn: <CiLinkedin />,
  Github: <VscGithub />,
  Resume: <GiBookCover />,
  Vercel: <TbBrandVercel />,
};

const SocialLinks:React.FC = () => {
  return (
    <div>
      {Data.map((item) => (
        <div
          className="flex flex-col p-4 bg-neutral-900 border border-amber-500 rounded items-center gap-2"
          key={item.id}
        >
          {Object.entries(item.personalInformation).map(([key, value]) => {
            if (typeof value === "string" && icons[key]) {
              return (
                <Link
                  key={key}
                  to={key == "Email" ? `mailto:${value}` : value}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SideBarLinks icon={icons[key]} name={key} />
                </Link>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
