import { skillsPage } from "../assets/assets.js";
import { PageTitle } from "../components/components.js";
import { containerStyle } from "./styles.js";

const Skills = () => {
  return (
    <>
      {(skillsPage && skillsPage.length > 0) && (
        <div id="Skills" className={`${containerStyle}`}>
          <PageTitle title={"Skills"} />
          <div className="flex gap-4 text-white flex-wrap justify-center bedar-sc1:justify-start">
            {skillsPage.map((Skill, idx) => {
              const labels = [
                "HTML",
                "CSS",
                "JavaScript",
                "GitHub",
                "Python",
                "Git",
                "TailwindCSS",
                "ReactJS",
              ];
              return (
                <div key={idx} className="flex flex-col items-center">
                  <Skill className="h-16 w-16 bg-mainColor cursor-pointer p-2 rounded shadow-md shadow-[#000]/15 " />
                  <span className="mt-2 text-sm text-gray-600 font-semibold">{labels[idx]}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Skills;
