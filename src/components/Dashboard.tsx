import { FaHandshake } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ButtonDemo from "../reusables/ButtonDemo";

const Dashboard: React.FC = () => {
  const routes = useNavigate();

  const handleRoutes = () => {
    routes("/portfolio");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-4xl font-bold text-violet-500">Hi, myself Pritam</p>
        <FaHandshake className="text-violet-500 text-6xl" />
        <p className="text-xl font-light">(Software Development Engineer)</p>
      </div>
      <ButtonDemo
        name="Hire Me"
        type="button"
        onClick={handleRoutes}
        className="mt-8 px-6 py-3 bg-violet-500 text-white rounded-lg shadow-md hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50"
      />
    </div>
  );
};

export default Dashboard;
