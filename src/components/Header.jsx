import { FaBars } from 'react-icons/fa';
// import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      <div className='h-16 flex justify-end items-center lg:hidden px-10'>
        <FaBars />
        {/* <FaGithub />
        <FaLinkedinIn />
        <FaTwitter />
        <FaEnvelope /> */}
      </div>
    </div>
    // bg-orange-500
  );
};

export default Header;
