import { Link } from "react-router-dom";
import Data from "../data/About.json";
import { FaExternalLinkAlt } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="bg-black min-h-screen p-4">
      <div className="p-2 border-b-2 text-2xl border-gray-700 text-violet-500 mb-6">
        About Me
      </div>
      {Data.map((item) => (
        <div
          className="flex flex-col gap-6 p-4 bg-neutral-800 rounded-lg shadow-lg text-white mb-6"
          key={item.id}
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-xl text-violet-400">{item.aboutMe.role}</h1>
            <p className="text-base text-gray-300">{item.aboutMe.brief}</p>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Name: </span>
                {item.personalInformation.Name}
              </li>
              <li>
                <span className="font-semibold">Email: </span>
                {item.personalInformation.Email}
              </li>
              <li>
                <span className="font-semibold">Mobile: </span>
                {item.personalInformation.Mobile}
              </li>
              <li>
                <span className="font-semibold">Current Location: </span>
                {item.personalInformation.currentLocation}
              </li>
              {item.personalInformation.Github && (
                <li>
                  <Link
                    to={item.personalInformation.Github}
                    className="text-blue-500 underline font-semibold focus:text-blue-900 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>GitHub Profile</span>
                    <FaExternalLinkAlt />
                  </Link>
                </li>
              )}
              {item.personalInformation.LinkedIn && (
                <li>
                  <Link
                    to={item.personalInformation.LinkedIn}
                    className="text-blue-500 underline font-semibold focus:text-blue-900 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>LinkedIn Profile</span>
                    <FaExternalLinkAlt />
                  </Link>
                </li>
              )}
              {item.personalInformation.Vercel && (
                <li>
                  <Link
                    to={item.personalInformation.Vercel}
                    className="text-blue-500 underline font-semibold focus:text-blue-900 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Vercel Profile</span>
                    <FaExternalLinkAlt />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutMe;
