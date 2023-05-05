import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const ProjectDisplay = ({ link, image, title, tools, type }) => {
  const allTools = tools.map((tool) => {
    return <li key={uuidv4()}>{tool}</li>;
  });

  return (
    <Link to={link}>
      <div className='flex flex-col w-80 h-[540px] mt-10 bg-teal-600 rounded-lg overflow-hidden shadow-md'>
        <div className='h-1/2'>
          <img src={image} alt='' className=' w-full h-full' />
        </div>

        <div className='p-3 text-gray-900 h-1/2 flex flex-col justify-between '>
          <div>
            <div className='h-12 mb-6'>
              <h3 className='leading-7'>{title}</h3>
            </div>

            <div className=''>
              <p>Tools used:</p>
              <ul>{allTools}</ul>
            </div>
          </div>

          <div className='text-teal-900'>
            <p>{type}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectDisplay;
