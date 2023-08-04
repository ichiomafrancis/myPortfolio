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
    <div className='min-h-screen'>
      <div className='sticky top-0 z-10'>
        <Header />
      </div>
      <div className='lg:flex'>
        <div className='hidden lg:block'>
          <Sidebar />
        </div>

        <div className='widescreen:section-min-height tallscreen:section-min-height lg:ml-80 lg:grow'>
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
