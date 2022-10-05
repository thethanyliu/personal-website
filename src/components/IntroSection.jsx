import { Parallax } from "react-parallax";
import BG from "../assets/img/BGC.png";
import Headphones from "../assets/img/headphones.gif";
// .. for outside current dir

function IntroSection() {
  return (<div name="intro">
    <Parallax
      className="relative h-5/6"
      bgImage={BG}
      bgImageAlt="bg"
      strength={400}
    >
      <div className="grid md:grid-cols-2 justify-between w-screen h-screen px-0 lg:px-24 xl:px-64">
        <div className="flex flex-col justify-center items-start pl-4 sm:pl-0">
          <span className="text-4xl lg:text-5xl text-left font-bold text-slate-50 pb-3 w-full">
            Hello there, I'm Ethan
          </span>
          <span className="text-left text-slate-50 text-lg w-full pb-5">
            For those of you on desktop, yes that is my bitmoji, so please add
            me on snap at ethanliu666.
          </span>
          <button className="animate-bounce text-left hover:drop-shadow-lg text-slate-50 border-[2px] py-3 px-5 rounded-lg">
            <a
              href="https://www.youtube.com/watch?v=O91DT1pR1ew"
              target="_blank"
            >
              Find out more
            </a>
          </button>
        </div>
        <div className="hidden md:flex pr-5 justify-center items-center">
          <img
            src={Headphones}
            alt="hello gif"
            className="rounded-md drop-shadow-lg"
          />
        </div>
      </div>
    </Parallax>
    </div>
  );
}

export default IntroSection;
