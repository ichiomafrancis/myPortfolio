import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <div className='bg-orange-primary lg:hidden'>
      <section className='mx-auto flex items-center justify-end p-4'>
        <button
          id='hamburger-button'
          className={`${
            isMenuOpen ? 'toggle-btn' : ''
          } relative h-8 w-8 cursor-pointer text-3xl`}
          onClick={toggleMenu}
        >
          <div className='absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[""] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-[""]'></div>
        </button>
      </section>
      <section
        id='mobile-menu'
        className={`top-68 absolute hidden w-full origin-top animate-open-menu flex-col justify-center bg-orange-primary text-5xl ${
          isMenuOpen ? 'flex' : 'hidden'
        }`}
        onClick={toggleMenu}
      >
        <nav
          className='flex min-h-screen flex-col items-center py-8'
          aria-label='mobile'
        >
          <a href='#about' className='w-full py-6 text-center hover:opacity-90'>
            About
          </a>
          <a
            href='#education'
            className='w-full py-6 text-center hover:opacity-90'
          >
            Education
          </a>
          <a
            href='#skills'
            className='w-full py-6 text-center hover:opacity-90'
          >
            Skills
          </a>
          <a
            href='#projects'
            className='w-full py-6 text-center hover:opacity-90'
          >
            Projects
          </a>
          <a
            href='#interests'
            className='w-full py-6 text-center hover:opacity-90'
          >
            Interests
          </a>
          <a href='#next' className='w-full py-6 text-center hover:opacity-90'>
            What's Next
          </a>
        </nav>
      </section>
    </div>
  );
};

export default Header;

// import { useState } from "react";
// import { FaBars } from "react-icons/fa";
// import Links from "./Links";

// const Header = () => {
//   const [show, setShow] = useState(false);

//   const handleShow = () => {
//     setShow(true);
//   };

//   const handleClose = () => {
//     setShow(false);
//   };

//   return (
//     <div>
//       {show ? (
//         <div className="flex w-full justify-between">
//           <div className="" onClick={handleClose}>
//             close
//           </div>
//           <Links />
//         </div>
//       ) : (
//         <header className="text-white" onClick={handleShow}>
//           <FaBars />
//         </header>
//       )}
//     </div>
//   );
// };

// export default Header;
