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
    <div className='bg-[teal]'>
      <div className=''>
        <Header />
      </div>
      <div className='lg:flex'>
        <div className='hidden lg:block'>
          <Sidebar />
        </div>

        <div className='w-full bg-teal-100/50 pt-12 lg:grow lg:ml-60 lg:pt-0'>
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
