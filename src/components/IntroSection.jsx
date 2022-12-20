import useAnalyticsEventTracker from "./analyticsEventTracker";
import Typical from "react-typical";
import Bgifdark from "../assets/img/bgif-dark.gif";
import Bgiflight from "../assets/img/bgif-light.gif"

function IntroSection() {
  const gaEventTracker = useAnalyticsEventTracker("Rick Roll Counter");
  
  return (
      <div name="intro" className="grid md:grid-cols-2 justify-between w-full h-screen px-0 lg:px-24 xl:px-64">
        <div className="flex flex-col relative justify-center items-start pl-4 md:pl-0 m-auto">
          <span className="z-10 text-md text-left font-bold w-full">
            Hello there, I'm
          </span>
          <span className="text-5xl lg:text-6xl text-left font-bold pb-3 w-full z-10">
            Ethan Liu<span className="text-[#999999] dark:text-cloud">.</span>
          </span>
          <span className="text-left text-lg w-full pb-5">
            For those of you on desktop, yes that is my bitmoji, so please add
            me on snap at ethanliu666.
          </span>
          <span className="absolute top-[-30px] lg:top-[-50px] text-[4rem] lg:text-[6rem] font-bold z-2 dark:text-[#113245] text-[#afb0b4] tracking-wide">
            <Typical
              steps={["Software", 1500, "Devploper", 2000]}
              loop={Infinity}
              wrapper="b"
            />
          </span>
          <button className="transition ease-in-out delay-150 hover:translate-x-[8px] text-left uppercase tracking-wider underline underline-offset-8 py-3">
            <a
              href="https://www.youtube.com/watch?v=O91DT1pR1ew"
              target="_blank"
              onClick={() => gaEventTracker("Find out more")}
            >
              Find out more
            </a>
          </button>
        </div>
        <div className="hidden md:flex pr-5 justify-center items-center">
          <img className="hidden dark:flex rounded-md" src={Bgifdark} alt="hello gif" />
          <img className="flex dark:hidden rounded-md" src={Bgiflight} alt="hello gif" />
        </div>
      </div>
  );
}

export default IntroSection;
