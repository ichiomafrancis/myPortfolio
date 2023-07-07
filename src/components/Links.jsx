import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Links = () => {
  return (
    <div className='flex flex-col '>
      <div className='text-center mt-6 uppercase'>
        <nav className='flex flex-col text-white/50 text-base font-semibold'>
          <ScrollLink
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className='nav-link p-4 pb-2'>
            About
          </ScrollLink>

          <ScrollLink
            activeClass='active'
            to='education'
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className='nav-link p-4 pb-2'>
            Education
          </ScrollLink>

          <ScrollLink
            activeClass='active'
            to='skills'
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className='nav-link p-4 pb-2'>
            Skills
          </ScrollLink>

          <ScrollLink
            activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className='nav-link p-4 pb-2'>
            Projects
          </ScrollLink>

          <ScrollLink
            activeClass='active'
            to='interests'
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className='nav-link p-4 pb-2'>
            Interest
          </ScrollLink>

          <ScrollLink
            activeClass='active'
            to='next'
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className='nav-link p-4 pb-2'>
            What Next?
          </ScrollLink>
        </nav>
      </div>
    </div>
  );
};

export default Links;
