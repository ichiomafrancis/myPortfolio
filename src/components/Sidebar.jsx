import ProfileImage from '../assets/profile-img.jpg';
import Links from './Links';

const Sidebar = () => {
  return (
    <div className='min-h-screen w-80 flex flex-col justify-center bg-orange-primary py-8 border-r border-green-600 fixed'>
      <div className='flex flex-col items-center'>
        <img
          src={ProfileImage}
          alt=''
          className='rounded-full border-8 w-48 h-48'
        />
      </div>

      <div>
        <Links />
      </div>
    </div>
  );
};

export default Sidebar;
