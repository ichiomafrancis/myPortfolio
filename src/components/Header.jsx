import { FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      <div className='h-12 w-screen bg-orange-500 flex justify-end lg:hidden'>
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
