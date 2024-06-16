const Hero = () => {
  return (
    <section className="container py-12">
      <h1 className="text-4xl font-bold text-center">
        Connecting Talent <br /> with Opportunity
      </h1>
      <p className="text-center text-gray-600 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, aperiam
        illo. Esse tempora quia ex eius aliquam iure nisi odio placeat nihil
        dolorem, quod qui!
      </p>
      <form className="flex gap-2 mt-4 mx-auto max-w-md">
        <input
          type="search"
          className="border border-gray-400 w-full py-2 px-3 rounded-md"
          placeholder="Search phrase..."
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
          Search
        </button>
      </form>
    </section>
  );
};

export default Hero;
