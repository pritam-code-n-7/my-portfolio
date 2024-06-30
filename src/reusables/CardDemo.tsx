import { Link } from "react-router-dom";
import ButtonDemo from "./ButtonDemo";
import { Suspense, lazy } from "react";
const LazyImage = lazy(() => import("./CustomImage"));

interface CardDemoProps {
  name: string;
  category: string;
  gitHub?: string;
  liveSite?: string;
  techStack: string;
  conclusion: string;
  image: string;
  compressedImage: string;
}

const CardDemo = ({
  name,
  category,
  gitHub,
  liveSite,
  techStack,
  conclusion,
  image,
  compressedImage,
}: CardDemoProps) => {
  return (
    <div className="text-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <Suspense fallback={<img src={image} alt="ProjectImage" />}>
          <LazyImage src={compressedImage} alt="ProjectImage" />
        </Suspense>
        <div className="absolute top-0 right-0 p-2">
          <span className="text-xs bg-gray-800 bg-opacity-75 px-2 py-1 rounded">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-lg font-bold mb-2">{name}</h1>
        <div className="flex mb-4">
          {gitHub && (
            <Link
              to={gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <ButtonDemo
                name="GitHub"
                type="button"
                className="py-1 px-2 rounded-full bg-amber-500 text-white text-xs underline"
              />
            </Link>
          )}
          {liveSite && (
            <Link
              to={liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <ButtonDemo
                name="Live Site"
                type="button"
                className="py-1 px-2 rounded-full bg-amber-500 text-white text-xs underline"
              />
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-neutral-700 p-2 shadow">
            <p className="text-sm">{techStack}</p>
          </div>
          <div className="border border-neutral-700 p-2 shadow">
            <p className="text-sm text-balance">{conclusion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDemo;
