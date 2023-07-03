const Education = () => {
  return (
    <div id='education' className='p-10 border-b border-gray-300'>
      <h1>Education</h1>

      <div className='text-black'>
        <div className='sm:flex sm:justify-between mt-10'>
          <div className=''>
            <h2 className='mb-2'>Stutern</h2>
            <h3 className='mb-4'>Front End Developer</h3>
            <p className='mb-2'>Front End Specialization</p>
          </div>
          <h3>June 2022 - April 2023</h3>
        </div>

        <div className='sm:flex sm:justify-between mt-20'>
          <div>
            <h2 className='mb-2'>Obafemi Awolowo University</h2>
            <h3 className='mb-4'>Bachelor of Science (BSc)</h3>
            <p>Mechanical Engineering</p>
            <p className='mb-2'>Grade - 4.12</p>
          </div>
          <h3>May 2010 - June 2015</h3>
        </div>
      </div>
    </div>
  );
};

export default Education;
