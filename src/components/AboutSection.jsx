function AboutSection() {
  return (
    <div
      name="about"
      className="bg-storm grid md:grid-cols-2 justify-center items-center px-5 md:px-24 lg:px-56 xl:px-80"
    >
      <div className="flex flex-col lg:my-24 mx-5">
        <h3 className="text-left font-semibold text-md pb-3 underline underline-offset-2 text-cloud">
          About Me
        </h3>
        <h1 className="text-5xl font-semibold text-slate-50">
          Full time student, part time drug dealer<span className="text-cloud">.</span>
        </h1>
        <a className="pt-5 text-left uppercase tracking-wider underline underline-offset-8 text-slate-50 cursor-pointer">Hit me up on the gram</a>
      </div>
      <div className="flex my-16 lg:my-24 mx-5">
        <p className="text-slate-300 text-lg">
          Hi there, I'm Ethan, I still enjoy Fallout 4 even after 7 years. Other
          than that, I like balling, Peaky Blinders and I have a major sweet
          tooth. I currently am a first year CS student at the University of
          Waterloo. Feel free to hang around as long as you like.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
