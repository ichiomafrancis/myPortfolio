import { Link } from 'react-router-dom';
import ProfileImage from '../assets/profile-img.jpg';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='h-screen w-60 bg-red-300/50 py-8 px-4 border-r border-green-600 fixed'>
      <div className='flex flex-col items-center'>
        <img
          src={ProfileImage}
          alt=''
          className='rounded-full border-8 w-48 h-48'
        />
        <div className='text-base font-medium text-black text-center mt-3'>
          <h1 className='text-xl font-bold'>Francis I. CHIOMA</h1>
          <h3 className='text-base font-medium mt-2'>FrontEnd/Web</h3>
          <h3 className='text-base font-medium'>Developer</h3>
        </div>
      </div>

      <div className='flex flex-col '>
        <div className='flex justify-center mt-12'>
          <nav className='flex flex-col text-grey-300 text-lg font-semibold gap-3'>
            <Link to='/About '>About</Link>
            <Link to='/education'>Education</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/interests'>Interest</Link>
            <Link to='/next'>What Next?</Link>
          </nav>
        </div>

        <div className='mt-20'>
          <nav className='flex justify-center gap-4 items-center text-2xl font-semibold'>
            <Link to='' className=''>
              <FaTwitter />
            </Link>

            <Link to=''>
              <FaGithub />
            </Link>

            <Link to=''>
              <FaLinkedinIn />
            </Link>

            <Link to='mailto:ichiomafrancis@gmail.com'>
              <FaEnvelope />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
