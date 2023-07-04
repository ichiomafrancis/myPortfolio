import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <div className='h-screen flex flex-col border-b border-gray-300'>
      <div id='about' className='my-auto p-10 '>
        <h1>Francis Ifeanyi Chioma</h1>
        <h3 className='mt-2'>FrontEnd/Web Developer</h3>
        <h4 className='mt-2 text-xl'>
          <span>+2348139668285</span>
          <span className='ml-6'>ifrancischioma@gmail.com</span>
        </h4>

        <p className='mt-12'>
          Hello! My name is Francis Ifeanyi Chioma and I like coding things from
          scratch and enjoy bringing ideas to life in the browser.
        </p>

        <p className='mt-2'>
          My interest in web development started back in 2022
        </p>

        <nav className='mt-28 mb-6'>
          <ul className='flex gap-4 text-3xl font-semibold'>
            <li className='w-12 h-12 bg-[#444] rounded-full flex justify-center items-center cursor-pointer'>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white'
              >
                <FaTwitter />
              </a>
            </li>

            <li className='w-12 h-12 bg-[#444] rounded-full flex justify-center items-center cursor-pointer'>
              <a
                href='https://github.com/ichiomafrancis'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white'
              >
                <FaGithub />
              </a>
            </li>

            <li className='w-12 h-12 bg-[#444] rounded-full flex justify-center items-center cursor-pointer'>
              <a
                href='https://www.linkedin.com/in/ifeanyi-chioma-137214b6/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white'
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className='w-12 h-12 bg-[#444] rounded-full flex justify-center items-center cursor-pointer'>
              <a href='mailto:ifrancischioma@gmail.com' className='text-white'>
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default About;
