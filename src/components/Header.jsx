import { FaBars } from 'react-icons/fa';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      <div className='flex justify-end lg:hidden'>
        <FaBars />
        <FaGithub />
        <FaLinkedinIn />
        <FaTwitter />
        <FaEnvelope />
      </div>
    </div>
    // bg-orange-500
  );
};

export default Header;
