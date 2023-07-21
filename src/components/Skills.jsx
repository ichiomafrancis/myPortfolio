import { skills } from "./Data";
import { v4 as uuidv4 } from "uuid";

const allSkills = skills.map((skill) => {
  return (
    <div key={uuidv4()} className="mb-2">
      <img
        src={skill.logo}
        alt=""
        className="h-16 w-16 lg:h-20 lg:w-20 xl:h-32 xl:w-32"
      />
      <li className="text-center  font-medium">{skill.title}</li>
    </div>
  );
});

const Skills = () => {
  return (
    <div className="flex h-screen items-center border-b border-gray-300">
      <section id="skills" className="p-10">
        <h1>Skills</h1>
        <h3 className="mt-6">PROGRAMMING LANGUAGES & TOOLS</h3>

        <div className="my-10 flex lg:mx-20">
          <ul className="mt-4 flex flex-wrap items-center justify-evenly gap-4 lg:mt-10 lg:gap-10">
            {allSkills}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Skills;
