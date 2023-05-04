import { v4 as uuidv4 } from 'uuid';

const ProjectDisplay = ({ image, title, tools, type }) => {
  const allTools = tools.map((tool) => {
    return <li key={uuidv4()}>{tool}</li>;
  });

  return (
    <div className='flex flex-col w-80 h-[360px] m-3 mt-10 border bg-white shadow'>
      <div className='h-1/2'>
        <img src={image} alt='' />
      </div>

      <div className='p-3'>
        <div>
          <h2>{title}</h2>
        </div>

        <div className='mb-10'>
          <ul>{allTools}</ul>
        </div>

        <div>
          <p>{type}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
