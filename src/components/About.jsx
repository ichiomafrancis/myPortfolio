import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <div className='min-h-screen flex items-center border-b border-gray-300'>
      <section id='about' className='p-10 '>
        <h1>
          <span>Francis Ifeanyi </span>
          <span className='text-orange-primary'>Chioma</span>
        </h1>
        <h3 className='mt-2'>FrontEnd/Web Developer</h3>
        <h4 className='mt-2 text-xl'>
          <span>+2348139668285</span>
          <span className='ml-6 text-orange-primary'>
            ifrancischioma@gmail.com
          </span>
        </h4>

        <p className='mt-12'>
          Hello! I am a passionate front-end developer with a strong drive to
          create captivating and user-friendly web experiences. I like coding
          things from scratch and enjoy bringing ideas to life in the browser.
        </p>

        <p className='mt-2'>
          My journey as a front-end developer began in year 2022 with a deep
          curiosity for technology and design. I thrive on the continuous
          evolution of web development trends and enjoy staying up-to-date with
          the latest advancements in HTML, CSS, and JavaScript. Through my
          diverse skill set and keen eye for detail, I transform concepts and
          wireframes into polished websites.
        </p>
        <p className='mt-2'>
          Collaboration is at the heart of my work ethos. I believe in the power
          of effective communication and close collaboration with fellow team
          members.
        </p>
        <p className='mt-2'>
          As a lifelong learner, I embrace challenges and constantly seek new
          opportunities to enhance my skills.
        </p>

        <nav className='mt-28 mb-6'>
          <ul className='flex gap-4 text-3xl font-semibold'>
            <li className='w-12 h-12 bg-black-secondary rounded-full flex justify-center items-center cursor-pointer'>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white'>
                <FaTwitter />
              </a>
            </li>

            <li className='w-12 h-12 bg-black-secondary rounded-full flex justify-center items-center cursor-pointer'>
              <a
                href='https://github.com/ichiomafrancis'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white'>
                <FaGithub />
              </a>
            </li>

            <li className='w-12 h-12 bg-black-secondary rounded-full flex justify-center items-center cursor-pointer'>
              <a
                href='https://www.linkedin.com/in/ifeanyi-chioma-137214b6/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white'>
                <FaLinkedinIn />
              </a>
            </li>

            <li className='w-12 h-12 bg-black-secondary rounded-full flex justify-center items-center cursor-pointer'>
              <a href='mailto:ifrancischioma@gmail.com' className='text-white'>
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default About;
