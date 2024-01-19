const HomepageExpertise = () => {
  return (
    <section
      data-comp="section"
      className="py-xxl h-screen relative bg-bruno-white text-bruno-dark-grey"
    >
      <div
        data-comp="container"
        className="sm:mx-auto px-base h-full flex flex-col"
      >
        <div className="text-center flex justify-center items-center w-full flex-col mb-base">
          <h2 className="text-fluid-display-xl font-bebas text-center leading-none">
            Expertise
          </h2>
          <p className="text-center sm:w-1/2 w-full font-manrope text-fluid-body-xl  font-bold">
            I am here to help you build a strong and recognizable brand.
            Flexible and customize codebase.
          </p>
        </div>
        <div className="grid gap-base flex-grow md:grid-cols-5 py-xs">
          <div className="h-full rounded-3xl hover:bg-bruno-ximen hover:text-bruno-yellow duration-300 bg-bruno-grey px-xs flex flc justify-center items-center col-span-1">
            <h3 className="text-fluid-body-xl font-bebas">
              Creative Development
            </h3>
          </div>
          <div className="h-full rounded-3xl hover:bg-bruno-ximen hover:text-bruno-yellow duration-300 bg-bruno-grey px-xs flex justify-center items-center col-span-1">
            <h3 className="text-fluid-body-xl font-bebas">
              Front-end Development
            </h3>
            <p></p>
          </div>
          <div className="h-full rounded-3xl hover:bg-bruno-ximen hover:text-bruno-yellow duration-300 bg-bruno-grey px-xs flex justify-center items-center col-span-1">
            <h3 className="text-fluid-body-xl font-bebas">
              Design System Integration
            </h3>
          </div>
          <div className="h-full rounded-3xl hover:bg-bruno-ximen hover:text-bruno-yellow duration-300 bg-bruno-grey px-xs flex justify-center items-center col-span-1">
            <h3 className="text-fluid-body-xl font-bebas"> SEO Optimization</h3>
          </div>
          <div className="h-full rounded-3xl hover:bg-bruno-ximen hover:text-bruno-yellow duration-300 bg-bruno-grey px-xs flex justify-center items-center col-span-1">
            <h3 className="text-fluid-body-xl font-bebas"> CMS Integration</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageExpertise;
