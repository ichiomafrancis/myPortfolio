// import { v4 as uuidv4 } from 'uuid';

const ProjectDisplay = ({ link, image, title, tools }) => {
  // const allTools = tools.map((tool) => {
  //   return <li key={uuidv4()}>{tool}</li>;
  // });

  return (
    <div className='mt-6 hover'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img
          src={image}
          alt=''
          className='w-80 h-64 rounded-lg overflow-hidden border border-gray-primary shadow-md'
        />
      </a>

      <h3 className='pt-3 text-center leading-7'>{title}</h3>
    </div>
  );
};

export default ProjectDisplay;
