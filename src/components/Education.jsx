const Education = () => {
  return (
    <div className="flex h-screen flex-col border-b border-gray-300">
      <section id="education" className="my-auto p-10">
        <h1>Education</h1>

        <div className="mt-10 md:flex md:justify-between">
          <div>
            <h2 className="mb-2">Stutern</h2>
            <h3 className="mb-4">Front End Developer</h3>
            <p className="mb-2">Front End Specialization</p>
          </div>

          <h3 className="text-base text-orange-primary">
            June 2022 - April 2023
          </h3>
        </div>

        <div className="mt-20 md:flex md:justify-between">
          <div>
            <h2 className="mb-2">Obafemi Awolowo University</h2>
            <h3 className="mb-4">Bachelor of Science (BSc)</h3>
            <p>Mechanical Engineering</p>
            <p className="mb-2">Grade - 4.12</p>
          </div>
          <h3 className="text-base text-orange-primary">
            May 2010 - June 2015
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Education;
