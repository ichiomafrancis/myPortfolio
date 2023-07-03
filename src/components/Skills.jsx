// import Html from '../assets/html.svg';
// import Css from '../assets/css.svg';
// import JS from '../assets/js.svg';
// import Tailwind from '../assets/tailwindcss.svg';
// import React from '../assets/React.svg';
// import Redux from '../assets/redux.svg';
// import Git from '../assets/git.svg';
// import Linux from '../assets/linux.svg';
import { skills } from './Data';
import { v4 as uuidv4 } from 'uuid';

// const skillLogos = [Html, Css, JS, Tailwind, React, Redux, Git];

const allSkills = skills.map((skill) => {
  return (
    <div key={uuidv4()} className='mb-2'>
      <img src={skill.logo} alt='' className='w-32 h-32' />
      <li className='font-medium text-black text-center'>{skill.title}</li>
    </div>
  );
});

const Skills = () => {
  return (
    <div id='skills' className='h-screen py-10 px-20 border-b border-gray-300'>
      <h1>Skills</h1>
      <h3 className='mt-6'>PROGRAMMING LANGUAGES & TOOLS</h3>

      <div className='flex mx-20 my-10'>
        <ul className='flex flex-wrap gap-10 justify-evenly items-center mt-10'>
          {allSkills}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
