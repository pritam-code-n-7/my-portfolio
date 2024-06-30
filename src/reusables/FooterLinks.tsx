import { Link } from "react-router-dom";

interface FooterLinkTypes {
  url: string;
  icon: JSX.Element;
  email?: boolean;
}
const FooterLinks = ({ url, icon, email }: FooterLinkTypes) => {
  return (
    <div>
      <Link
        to={email ? `mailto:${url}` : url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white"
      >
        {icon}
      </Link>
    </div>
  );
};

export default FooterLinks;
