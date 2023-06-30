import React from 'react';
import { projects } from './Data';
import ProjectDisplay from './ProjectDisplay';
import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
  const allProjects = projects.map((project) => {
    return <ProjectDisplay key={uuidv4()} {...project} />;
  });

  return (
    <div id='projects' className='min-h-screen bg-teal-100/50 py-10 px-10'>
      <h1 className='mb-4'>Projects</h1>

      <div className='flex flex-wrap-reverse justify-around'>{allProjects}</div>
    </div>
  );
};

export default Projects;
