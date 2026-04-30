function AboutSection() {
  return (
    <div
      name="about"
      className="dark:bg-teal bg-[#c0c2ce] grid md:grid-cols-2 justify-center items-center px-5 md:px-16 lg:px-52 xl:px-72"
    >
      <div className="flex flex-col items-start mt-10 mx-8 md:my-[3.5rem]">
        <h3 className="text-left font-semibold uppercase text-md ml-2 pb-3 underline underline-offset-2 dark:text-cloud text-[#4c4c55]">
          About Me
        </h3>
        <span className="text-4xl font-semibold ">
          <span role="img" aria-label="wave">
            {String.fromCodePoint(0x1f44b)}
          </span>
          Hi there, I'm {`{Ethan}`}
          <span className="dark:text-sand"> Software Engineer</span> & CS
          @University of Waterloo
        </span>
      </div>
      <div className="flex my-8 mx-5">
        <p className="text-lg">
          Currently a fourth year CS and statistics student at the University of
          Waterloo. That&rsquo;s it, that&rsquo;s really all I have to say, but
          do feel free to hang around as long as you like.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
