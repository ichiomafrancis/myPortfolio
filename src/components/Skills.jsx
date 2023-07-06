import { skills } from './Data';
import { v4 as uuidv4 } from 'uuid';

const allSkills = skills.map((skill) => {
  return (
    <div key={uuidv4()} className='mb-2'>
      <img
        src={skill.logo}
        alt=''
        className='w-16 h-16 lg:w-20 lg:h-20 xl:w-32 xl:h-32'
      />
      <li className='font-medium  text-center'>{skill.title}</li>
    </div>
  );
});

const Skills = () => {
  return (
    <div className='h-screen flex items-center border-b border-gray-300'>
      <section id='skills' className='p-10'>
        <h1>Skills</h1>
        <h3 className='mt-6'>PROGRAMMING LANGUAGES & TOOLS</h3>

        <div className='flex lg:mx-20 my-10'>
          <ul className='flex flex-wrap gap-4 lg:gap-10 justify-evenly items-center mt-4 lg:mt-10'>
            {allSkills}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Skills;
