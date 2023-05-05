import facts from '../assets/react-facts.jpg';
import airbnb from '../assets/airbnb.jpg';
import citrone from '../assets/citrone.jpg';
import table from '../assets/table.jpg';
import todo from '../assets/todo.jpg';
import travel from '../assets/travel.jpg';

export const skills = [
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'JavaScript',
  'React',
  'Redux',
  'Git',
  'Collaboration',
  'VS code',
  'Linux Command Line',
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
    image: table,
    title: 'Prime Numbers Multiplication Table',
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
  {
    image: citrone,
    title: 'Citrone Website Redesign',
    tools: ['React', 'TailwindCSS', 'Git', 'Redux'],
    type: 'Group Project/Collaboration',
    link: 'https://citrone-redesign-crater.vercel.app/',
  },
];
