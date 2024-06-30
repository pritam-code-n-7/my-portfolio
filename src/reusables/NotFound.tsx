import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 border border-gray-300 p-6 rounded-md shadow-md text-center">
        <p className="text-lg text-black dark:text-white">404 Page not Found</p>
        <Link
          to="/"
          className="block mt-4 text-violet-600 underline font-bold hover:text-violet-700 focus:text-violet-700"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
