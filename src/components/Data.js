import Html from '../assets/html.svg';
import Css from '../assets/css.svg';
import JS from '../assets/js.svg';
import Tailwind from '../assets/tailwindcss.svg';
import React from '../assets/React.svg';
import Redux from '../assets/redux.svg';
import Git from '../assets/git.svg';
import TS from '../assets/ts.svg';
import NextJs from '../assets/nextjs.svg';

import facts from '../assets/react-facts.jpg';
import airbnb from '../assets/airbnb.jpg';
import citrone from '../assets/citrone.jpg';
import table from '../assets/table.jpg';
import todo from '../assets/todo.jpg';
import travel from '../assets/travel.jpg';

export const skills = [
  { title: 'HTML', logo: Html },
  { title: 'CSS', logo: Css },
  { title: 'Tailwind CSS', logo: JS },
  { title: 'JavaScript', logo: Tailwind },
  { title: 'React', logo: React },
  { title: 'Redux', logo: Redux },
  { title: 'Git', logo: Git },
  { title: 'TypeScript', logo: TS },
  { title: 'NextJs', logo: NextJs },
  // { title: 'Linux Command Line', logo: '' },
];

export const projects = [
  {
    image: facts,
    title: 'React Facts',
    tools: ['React', 'CSS'],
    type: 'Personal Project',
    link: 'https://react-facts-kappa.vercel.app/',
  },
  {
    image: travel,
    title: 'Travel Journal',
    tools: ['React', 'CSS'],
    type: 'Personal Project',
    link: 'https://travel-journal-nine-plum.vercel.app/',
  },
  {
    image: airbnb,
    title: 'AirBnb Clone',
    tools: ['React', 'CSS'],
    type: 'Personal Project',
    link: 'https://airbnb-clone-sandy-one.vercel.app/',
  },
  {
    image: citrone,
    title: 'Citrone Website Redesign',
    tools: ['React', 'TailwindCSS', 'Git', 'Redux'],
    type: 'Group Project/Collaboration',
    link: 'https://citrone-redesign-crater.vercel.app/',
  },
  {
    image: table,
    title: 'Multiplication Table',
    tools: ['React', 'CSS'],
    type: 'Personal Project',
    link: 'https://prime-multiplication-table.vercel.app/',
  },
  {
    image: todo,
    title: 'To Do App',
    tools: ['React', 'CSS'],
    type: 'Personal Project',
    link: 'https://todo-list-flax-three.vercel.app/',
  },
];
