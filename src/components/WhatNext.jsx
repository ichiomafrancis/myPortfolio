const WhatNext = () => {
  return (
    <div className='h-screen flex items-center border-b border-gray-300'>
      <div id='next' className='p-10'>
        <h1>What's Next</h1>
        <div className='mt-12 text-black'>
          <h3>Currently Learning:</h3>
          <div className='ml-6 mt-2'>
            <p>TypeScript</p>
            <p>NextJS</p>
          </div>
          <h3 className='mt-6'>Aspiring to be a</h3>
          <p className='ml-6 mt-2'>Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
};

export default WhatNext;
