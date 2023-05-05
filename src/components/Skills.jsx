import Html from '../assets/html.svg';
import Css from '../assets/css.svg';
import JS from '../assets/js.svg';
import Tailwind from '../assets/tailwindcss.svg';
import React from '../assets/React.svg';
import Redux from '../assets/redux.svg';
import Git from '../assets/git.svg';
// import Linux from '../assets/linux.svg';
import { skills } from './Data';
import { v4 as uuidv4 } from 'uuid';

const skillLogos = [Html, Css, JS, Tailwind, React, Redux, Git];

const allSkills = skills.map((skill) => {
  return <li key={uuidv4()}>{skill}</li>;
});

const logos = skillLogos.map((logo) => {
  return <img key={uuidv4()} src={logo} alt='' className='w-20 h-20' />;
});

const Skills = () => {
  return (
    <div className='bg-teal-100/50 h-[600px] py-10 px-20'>
      <h1>Skills</h1>
      <h3 className='mt-6'>PROGRAMMING LANGUAGES & TOOLS</h3>

      <div className='flex flex-col '>
        <ul className=' flex flex-col gap-1 mt-4 ml-5 font-medium'>
          {allSkills}
        </ul>

        <div>
          <div className='flex justify-between items-center mt-10'>{logos}</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
