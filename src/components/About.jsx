import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <div className='h-screen flex items-center border-b border-gray-300'>
      <div id='about' className='my-auto p-10 '>
        <h1>About Me</h1>

        <div className='text-base font-medium text-black text-center mt-3'>
          <h1 className='text-xl font-bold'>Francis I. CHIOMA</h1>
          <h3 className='text-base font-medium mt-2'>FrontEnd/Web</h3>
          <h3 className='text-base font-medium'>Developer</h3>
        </div>

        <p className='mt-12 text-black'>
          Hello! My name is Francis Ifeanyi Chioma and I like coding things from
          scratch and enjoy bringing ideas to life in the browser.
        </p>

        <p className='text-black mt-2'>
          My interest in web development started back in 2022
        </p>

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
              href='https://www.ScrollLinkedin.com/in/ifeanyi-chioma-137214b6/'
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

export default About;
