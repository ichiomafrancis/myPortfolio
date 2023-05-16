import ProfileImage from '../assets/profile-img.jpg';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
// import { Link } from 'react-scroll';

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
            <Link
              activeClass='active'
              to='About'
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              className='pb-2'
            >
              About
            </Link>

            <Link
              activeClass='active'
              to='education'
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              className='pb-2'
            >
              Education
            </Link>

            <Link
              activeClass='active'
              to='skills'
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              className='pb-2'
            >
              Skills
            </Link>

            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              className='pb-2'
            >
              Projects
            </Link>

            <Link
              activeClass='active'
              to='interests'
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              className='pb-2'
            >
              Interest
            </Link>

            <Link
              activeClass='active'
              to='next'
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              className='pb-2'
            >
              What Next?
            </Link>
          </nav>
        </div>

        <div className='mt-20 mb-6'>
          <nav className='flex justify-center gap-4 items-center text-2xl font-semibold'>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <FaTwitter />
            </a>

            <a
              href='https://github.com/ichiomafrancis'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub />
            </a>

            <a
              href='https://www.linkedin.com/in/ifeanyi-chioma-137214b6/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedinIn />
            </a>

            <a href='mailto:ichiomafrancis@gmail.com'>
              <FaEnvelope />
            </a>
          </nav>
        </div>
        <div className='flex justify-center items-center text-xs'>
          <a
            href='https://github.com/ichiomafrancis/myPortfolio'
            target='_blank'
            rel='noopener noreferrer'
          >
            Designed & Built by Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
