import MapOverlay from "./MapOverlay";

function AboutSection() {
  return (
    <div className="bg-dark-purple grid md:grid-cols-2 justify-center px-5 md:px-24 lg:px-56 xl:px-80">
      <div className="flex-col my-24 mx-5">
        <h1 className="text-left font-semibold text-2xl md:text-4xl pb-3 text-slate-50">
          About Me
        </h1>
        <p className="text-slate-300 text-lg">
          Hi there, I'm Ethan, I still enjoy Fallout 4 even after 7 years.
          Other than that, I like balling, Peaky Blinders and I have a major sweet tooth. 
          I currently am a first year CS student at the University of Waterloo. Feel free
          to hang around as long as you like.
        </p>
      </div>
      <MapOverlay />
    </div>
  );
}

export default AboutSection;
