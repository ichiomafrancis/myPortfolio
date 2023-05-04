import React from 'react';
import { projects } from './Data';
import ProjectDisplay from './ProjectDisplay';
import { v4 as uuidv4 } from 'uuid';
import Carousel from './Carousel';

const Projects = () => {
  const allProjects = projects.map((project) => {
    return <ProjectDisplay key={uuidv4()} {...project} />;
  });

  return (
    <div className=''>
      <h1>Projects</h1>

      <Carousel>
        <div className='flex justify-between'>{allProjects}</div>
      </Carousel>
    </div>
  );
};

export default Projects;
