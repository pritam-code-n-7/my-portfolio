import Data from "../data/Clients.json";
import Career from "../data/Career.json";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const CareerSummary = () => {
  return (
    <div className="min-h-screen flex flex-col mt-5 bg-black text-gray-300 p-4">
      <div className="border-b-2 border-gray-700 mb-6">
        <p className="text-violet-500 text-2xl mb-2">
          Professional Work Experience
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mt-5 gap-8">
        <div className="space-y-6">
          {Career.map((data) => (
            <div
              key={data.id}
              className="p-4 bg-neutral-800 rounded-lg shadow-lg"
            >
              <div className="mb-2">
                {data.careerSummary.company && (
                  <Link
                    to={data.careerSummary.company}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline font-semibold text-lg"
                  >
                    <div className="flex gap-2 items-center">
                      <p>Acxiom Consulting Pvt. Ltd. </p>
                      <FaExternalLinkAlt />
                    </div>
                  </Link>
                )}
              </div>
              <div className="flex justify-between text-sm mb-2">
                <p className="font-medium">
                  Duration: {data.careerSummary.workTime}
                </p>
                <p className="font-medium">-{data.careerSummary.location}</p>
              </div>
              <p className="font-semibold text-lg mb-2">
                Role: {data.careerSummary.role}
              </p>
              <p className="text-sm text-gray-400">
                Tech stack: {data.careerSummary.techStack}
              </p>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          {Data.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-800 border-2 border-amber-800 rounded-lg p-4 shadow-lg"
            >
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold text-amber-400 mb-1">
                  {item.client}
                </h1>
                <p className="text-sm text-gray-400 mb-1">
                  {item.clientLocation}
                </p>
              </div>

              <p className="font-medium mb-1">Role: {item.role}</p>
              <p className="text-sm text-gray-400 mb-2">
                Contribution: {item.work}
              </p>
              <p className="text-sm text-gray-400">
                Achievement: {item.achievement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerSummary;
