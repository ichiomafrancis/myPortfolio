import { v4 as uuidv4 } from 'uuid';

const ProjectDisplay = ({ image, title, tools, type }) => {
  const allTools = tools.map((tool) => {
    return <li key={uuidv4()}>{tool}</li>;
  });

  return (
    <div className='flex flex-col justify-stretch w-80 h-[540px] mt-10 bg-teal-600 rounded-lg overflow-hidden shadow-md'>
      <div className='h-1/2'>
        <img src={image} alt='' className=' w-full h-full' />
      </div>

      <div className='p-3 text-teal-900 '>
        <div className='mb-4'>
          <h3 className='leading-7'>{title}</h3>
        </div>

        <div className=''>
          <ul>{allTools}</ul>
        </div>

        <div className=''>
          <p>{type}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
