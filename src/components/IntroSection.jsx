import BG from "../assets/img/BGC.png";
import Bgif from "../assets/img/bgif.gif";
// .. for outside current dir

function IntroSection() {
  return (<div name="intro">
    <div
    style={{
      backgroundImage: `url(${BG})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    >
      <div className="grid md:grid-cols-2 justify-between w-screen h-screen px-0 lg:px-24 xl:px-64">
        <div className="flex flex-col justify-center items-start pl-4 sm:pl-0">
          <span className="text-4xl lg:text-5xl text-left font-bold text-slate-50 pb-3 w-full">
            Hello there, I'm Ethan<span className="text-cloud">.</span>
          </span>
          <span className="text-left text-slate-50 text-lg w-full pb-5">
            For those of you on desktop, yes that is my bitmoji, so please add
            me on snap at ethanliu666.
          </span>
          <button className="transition ease-in-out delay-50 text-left hover:scale-110 text-slate-50 underline underline-offset-8 py-3">
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
            src={Bgif}
            alt="hello gif"
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default IntroSection;
