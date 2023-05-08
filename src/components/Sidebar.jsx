import { NavLink, Link } from 'react-router-dom';
import ProfileImage from '../assets/profile-img.jpg';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='min-h-screen w-60 bg-red-300/50 py-8 px-4 border-r border-green-600 fixed'>
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
          <nav className='flex flex-col text-grey-300 text-lg font-semibold'>
            <NavLink
              to='/About'
              className='pb-2 hover:bg-blue-500 hover:border-r-4 '
            >
              About
            </NavLink>
            <NavLink to='/education' className='pb-2'>
              Education
            </NavLink>
            <NavLink to='/skills' className='pb-2'>
              Skills
            </NavLink>
            <NavLink to='/projects' className='pb-2'>
              Projects
            </NavLink>
            <NavLink to='/interests' className='pb-2'>
              Interest
            </NavLink>
            <NavLink to='/next' className='pb-2'>
              What Next?
            </NavLink>
          </nav>
        </div>

        <div className='mt-20'>
          <nav className='flex justify-center gap-4 items-center text-2xl font-semibold'>
            <Link to='' className=''>
              <FaTwitter />
            </Link>

            <Link to='https://github.com/ichiomafrancis'>
              <FaGithub />
            </Link>

            <Link to='https://www.linkedin.com/in/ifeanyi-chioma-137214b6/'>
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
