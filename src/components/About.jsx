import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <div className='h-screen flex flex-col border-b border-gray-300'>
      <div id='about' className='my-auto p-10 '>
        <h1>Francis I. Chioma</h1>
        <h3 className='mt-2'>FrontEnd/Web Developer</h3>
        <h3 className='mt-4'>+2348139668285 ifrancischioma@gmail.com</h3>

        <p className='mt-12 text-black'>
          Hello! My name is Francis Ifeanyi Chioma and I like coding things from
          scratch and enjoy bringing ideas to life in the browser.
        </p>

        <p className='text-black mt-2'>
          My interest in web development started back in 2022
        </p>

        <div className='mt-20 mb-6'>
          <nav className='flex gap-4 text-3xl font-semibold'>
            <div className='w-12 h-12 bg-red-200 rounded-full flex justify-center items-center'>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white'>
                <FaTwitter />
              </a>
            </div>

            <a
              href='https://github.com/ichiomafrancis'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white'>
              <FaGithub />
            </a>

            <a
              href='https://www.ScrollLinkedin.com/in/ifeanyi-chioma-137214b6/'
              target='_blank'
              rel='noopener noreferrer'>
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
            rel='noopener noreferrer'>
            Designed & Built by Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
