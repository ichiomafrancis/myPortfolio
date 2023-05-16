import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
// import About from './components/About';
// import Education from './components/Education';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Interests from './components/Interests';
// import WhatNext from './components/WhatNext';
import Content from './components/Content';

function App() {
  return (
    <div className='min-h-screen flex'>
      <div className=''>
        <Sidebar />
      </div>

      <div className='grow my-auto ml-60'>
        <Routes>
          <Route path='/' element={<Content />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
