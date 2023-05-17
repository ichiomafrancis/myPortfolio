const Education = () => {
  return (
    <div
      id='education'
      className='h-screen py-10 px-20 border-b border-gray-300'
    >
      <h1>Education</h1>

      <div className='text-black'>
        <div className='flex justify-between mt-10'>
          <div className=''>
            <h2>Stutern</h2>
            <h3>Front End Developer</h3>
            <p>Front End Specialization</p>
          </div>
          <h3>June 2022 - April 2023</h3>
        </div>

        <div className='flex justify-between mt-10'>
          <div>
            <h2>Obafemi Awolowo University</h2>
            <h3>Bachelor of Science (BSc)</h3>
            <p>Mechanical Engineering</p>
            <p>Grade - 4.12</p>
          </div>
          <h3>May 2010 - June 2015</h3>
        </div>
      </div>
    </div>
  );
};

export default Education;
