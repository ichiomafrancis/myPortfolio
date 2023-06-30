import { v4 as uuidv4 } from 'uuid';

const ProjectDisplay = ({ link, image, title, tools }) => {
  const allTools = tools.map((tool) => {
    return <li key={uuidv4()}>{tool}</li>;
  });

  return (
    <div>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img
          src={image}
          alt=''
          className='flex flex-col w-80 h-64 mt-6 bg-teal-600 rounded-lg overflow-hidden shadow-md'
        />
      </a>

      <h3 className='p-3 text-gray-900 text-center leading-7'>{title}</h3>
    </div>
  );
};

export default ProjectDisplay;
