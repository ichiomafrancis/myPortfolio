import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Interests from './components/Interests';
import WhatNext from './components/WhatNext';

function App() {
  return (
    // <div className='flex flex-col'>
    <div className='w-screen h-screen flex'>
      <div className=''>
        <Sidebar />
      </div>

      <div className='bg-teal-100/50 grow h-[600px] py-10 px-20 my-auto'>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/about' element={<About />} />
          <Route path='/education' element={<Education />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/interests' element={<Interests />} />
          <Route path='/next' element={<WhatNext />} />
        </Routes>
      </div>
    </div>
    // </div>
  );
}

export default App;
