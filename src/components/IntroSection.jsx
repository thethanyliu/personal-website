import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';
import Bitmoji from "../assets/img/bitmoji.png";

function IntroSection() {
  return (
    <div
      name="intro"
      className="introBackground grid md:grid-cols-2 justify-between w-full h-screen pl-4 md:px-4 lg:px-32 xl:px-56"
    >
      <div className="flex flex-col relative justify-center items-start m-auto">
        <span className="z-10 text-md text-left font-bold w-full">
          Hello there, I'm
        </span>
        <span className="text-5xl lg:text-6xl text-left font-bold pb-3 w-full z-10">
          Ethan Liu<span className="text-[#999999] dark:text-cloud">.</span>
        </span>
        <span className="text-left text-lg w-full pb-5">
          An aspiring software developer who can maybe be the CSS for your HTML.
        </span>
        <span className="absolute top-[-30px] lg:top-[-50px] text-[4rem] lg:text-[6rem] font-bold z-2 dark:text-[#113245] text-[#afb0b4] tracking-wide">
          <TypeAnimation
            sequence={["Software", 1500, "Devploper", 2000]}
            repeat={Infinity}
            wrapper="b"
          />
        </span>
        <button className="transition ease-in-out delay-150 hover:translate-x-[8px] text-left uppercase tracking-wider border-b-[1px] dark:border-zinc-300 border-stone-800 pb-2">
          <Link to="about" smooth={true} duration={500} offset={-75}>
            Learn more
          </Link>
        </button>
      </div>
      <div className="hidden md:flex pr-5 justify-center items-center">
        <img
          className="hidden dark:flex rounded-md"
          src={Bitmoji}
          alt="hello gif"
        />
        <img
          className="flex dark:hidden rounded-md"
          src={Bitmoji}
          alt="hello gif"
        />
      </div>
    </div>
  );
}

export default IntroSection;
