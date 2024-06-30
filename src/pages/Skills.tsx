import React from "react";
import Data from "../data/Skills.json";

interface SkillTypes {
  title: string;
  content: string;
}

const SkillSection: React.FC<SkillTypes> = ({ title, content }) => {
  return (
    <div className="container mx-auto my-4 p-4 border-b-2 border-amber-500 flex justify-center gap-2 text-white">
      <p className="text-violet-500 font-semibold">{title}:</p>
      <p>{content}</p>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-300 p-6">
      <div className="border-b-2 border-gray-700 mb-6">
        <p className="text-violet-500 text-2xl font-bold mb-2">
          Technical Skills
        </p>
      </div>
      {Data.map((item) => (
        <div key={item.id}>
          <SkillSection
            title="Languages/Frameworks"
            content={item.technicalSkills.languagesnFrameworks}
          />
          <SkillSection
            title="Testing Libraries"
            content={item.technicalSkills.testingLibrary}
          />
          <SkillSection
            title="UI Libraries"
            content={item.technicalSkills.uiLibrary}
          />
          <SkillSection
            title="Database"
            content={item.technicalSkills.database}
          />
          <SkillSection
            title="Technologies"
            content={item.technicalSkills.technologies}
          />
        </div>
      ))}
    </div>
  );
};

export default Skills;
