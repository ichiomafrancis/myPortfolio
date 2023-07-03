import { skills } from './Data';
import { v4 as uuidv4 } from 'uuid';

const allSkills = skills.map((skill) => {
  return (
    <div key={uuidv4()} className='mb-2'>
      <img
        src={skill.logo}
        alt=''
        className='w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32'
      />
      <li className='font-medium text-black text-center'>{skill.title}</li>
    </div>
  );
});

const Skills = () => {
  return (
    <div id='skills' className='p-10 border-b border-gray-300'>
      <h1>Skills</h1>
      <h3 className='mt-6'>PROGRAMMING LANGUAGES & TOOLS</h3>

      <div className='flex lg:mx-20 my-10'>
        <ul className='flex flex-wrap gap-4 lg:gap-10 justify-evenly items-center mt-4 lg:mt-10'>
          {allSkills}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
