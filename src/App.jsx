import Sidebar from './components/Sidebar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Interests from './components/Interests';
import WhatNext from './components/WhatNext';
import Header from './components/Header';

function App() {
  return (
    <div className='h-full'>
      <div className='h-16 w-screen flex justify-end items-center lg:hidden px-10 fixed bg-orange-primary'>
        <Header />
      </div>
      <div className='lg:flex'>
        <div className='hidden lg:block'>
          <Sidebar />
        </div>

        <div className='lg:grow lg:ml-80 pt-16 lg:pt-0'>
          <About />
          <Education />
          <Skills />
          <Projects />
          <Interests />
          <WhatNext />
        </div>
      </div>
    </div>
  );
}

export default App;
