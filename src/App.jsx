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
    <div className='h-screen flex'>
      <div className=''>
        <Sidebar />
      </div>

      <div className='grow my-auto ml-60'>
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
