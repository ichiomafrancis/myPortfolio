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
    <div className='w-screen lg:w-full bg-[teal]'>
      <div className='h-16 w-screen lg:hidden bg-teal-900 fixed'>
        <Header />
      </div>
      <div className='lg:flex'>
        <div className='hidden lg:block'>
          <Sidebar />
        </div>

        <div className='w-screen bg-teal-100/50 mt-16 lg:grow lg:ml-60 lg:mt-0'>
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
