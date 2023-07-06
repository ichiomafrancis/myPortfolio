import React from 'react';
import { projects } from './Data';
import ProjectDisplay from './ProjectDisplay';
import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
  const allProjects = projects.map((project) => {
    return <ProjectDisplay key={uuidv4()} {...project} />;
  });

  return (
    <div className='min-h-screen flex items-center border-b border-gray-300'>
      <section id='projects' className='p-10'>
        <h1 className='mb-6'>Projects</h1>
        <div className='flex flex-wrap-reverse justify-around'>
          {allProjects}
        </div>
      </section>
    </div>
  );
};

export default Projects;
