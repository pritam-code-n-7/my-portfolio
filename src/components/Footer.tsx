import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";
import Data from "../data/About.json";
import FooterLinks from "../reusables/FooterLinks";

const icons: { [key: string]: JSX.Element } = {
  LinkedIn: <CiLinkedin />,
  Github: <VscGithub />,
  Email: <MdOutlineEmail />,
};

const Footer: React.FC = () => {
  return (
    <footer className="flex divide-x-2 justify-center p-4 gap-4 items-center text-white">
      {Data.map((item) => (
        <div key={item.id} className="flex gap-2">
          {Object.entries(item.personalInformation).map(([key, value]) => {
            if (typeof value === "string" && icons[key]) {
              return (
                <FooterLinks
                  key={key}
                  icon={icons[key]}
                  url={value}
                  email={key === "Email"}
                />
              );
            }
            return null;  
          })}
        </div>
      ))}
      <div className="pl-2 flex">
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
