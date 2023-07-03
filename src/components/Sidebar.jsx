import ProfileImage from '../assets/profile-img.jpg';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Sidebar = () => {
  return (
    <div className='min-h-screen w-80 flex flex-col justify-center bg-red-300/50 py-8 border-r border-green-600 fixed'>
      <div className='flex flex-col items-center'>
        <img
          src={ProfileImage}
          alt=''
          className='rounded-full border-8 w-48 h-48'
        />
      </div>

      <div className='flex flex-col '>
        <div className='text-center mt-6 uppercase'>
          <nav className='flex flex-col text-grey-300 text-base font-semibold'>
            <ScrollLink
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='nav-link p-4 pb-2'>
              About
            </ScrollLink>

            <ScrollLink
              activeClass='active'
              to='education'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='nav-link p-4 pb-2'>
              Education
            </ScrollLink>

            <ScrollLink
              activeClass='active'
              to='skills'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='nav-link p-4 pb-2'>
              Skills
            </ScrollLink>

            <ScrollLink
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='nav-link p-4 pb-2'>
              Projects
            </ScrollLink>

            <ScrollLink
              activeClass='active'
              to='interests'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='nav-link p-4 pb-2'>
              Interest
            </ScrollLink>

            <ScrollLink
              activeClass='active'
              to='next'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='nav-link p-4 pb-2'>
              What Next?
            </ScrollLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
