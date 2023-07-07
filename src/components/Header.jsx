import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Links from './Links';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      {show ? (
        <div className='flex w-full justify-between'>
          <div className='' onClick={handleClose}>
            close
          </div>
          <Links />
        </div>
      ) : (
        <header className='text-white' onClick={handleShow}>
          <FaBars />
        </header>
      )}
    </div>
  );
};

export default Header;
