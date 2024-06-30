import Data from "../data/Project.json";
import CardDemo from "../reusables/CardDemo";

function PersonalProjects() {
  return (
    <div className="min-h-screen">
      <div className="border-b-2 border-gray-500">
        <p className="text-violet-500 text-xl mb-2">Personal Projects</p>
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
        {Data.map((item) => (
          <CardDemo {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default PersonalProjects;
