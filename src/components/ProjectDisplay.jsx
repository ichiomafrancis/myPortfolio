import { v4 as uuidv4 } from 'uuid';

const ProjectDisplay = ({ link, image, title, tools, type }) => {
  const allTools = tools.map((tool) => {
    return <li key={uuidv4()}>{tool}</li>;
  });

  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
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
              <ul className='p-3'>{allTools}</ul>
            </div>
          </div>

          <div className='text-teal-900'>
            <p>{type}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectDisplay;
