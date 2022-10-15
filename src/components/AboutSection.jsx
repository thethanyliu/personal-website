import { useInView } from 'react-intersection-observer';
import useAnalyticsEventTracker from "./analyticsEventTracker";


function AboutSection() {
  const gaEventTracker = useAnalyticsEventTracker("Instagram");
  const { ref:refOne, inView:oneIsVisible } = useInView({triggerOnce: true});
  const { ref:refTwo, inView:twoIsVisible } = useInView({triggerOnce: true});

  return (
    <div
      name="about"
      className="bg-teal grid md:grid-cols-2 justify-center items-center px-5 md:px-24 lg:px-56 xl:px-80"
    >
      <div ref={refOne} className={`fadeupelement${oneIsVisible ? " animatefu" : ""}`}>
        <h3 className="text-left font-semibold uppercase text-md pb-3 underline underline-offset-2 text-cloud">
          About Me
        </h3>
        <h1 className="text-5xl font-semibold text-slate-50">
          Full time student, part time 
          <span className="text-sand"> nostalgic.</span>
        </h1>
        <button className="transition ease-in-out delay-150 hover:translate-x-[8px] pt-5 text-left uppercase tracking-wider underline underline-offset-8 text-slate-50 cursor-pointer">
          <a href="https://www.instagram.com/ethanliu8/" target="_blank" onClick={()=>gaEventTracker("Hit me up on the gram")}>
            Hit me up on the gram
          </a>
        </button>
      </div>
      <div ref={refTwo} className={`fadeleftelement${twoIsVisible ? " animatefl" : ""}`}>
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
