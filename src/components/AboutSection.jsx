import { analyticsEventTracker } from "../utils/analyticsEventTracker";
import { Link } from "react-scroll";
import Instalight from "../assets/logos/gramm.png";
import Instadark from "../assets/logos/insta-logo-dark.png";

function AboutSection() {
  const instaButtonClick = () => {
    analyticsEventTracker("Instagram", "Clicked Insta");
  };

  return (
    <div
      name="about"
      className="dark:bg-teal bg-[#c0c2ce] grid md:grid-cols-2 justify-center items-center px-5 md:px-16 lg:px-52 xl:px-72"
    >
      <div className="flex flex-col items-start mt-10 mx-5 md:my-[3.5rem]">
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
        <a
          className="flex transition ease-in-out delay-150 hover:translate-x-[8px] ml-2 pt-5 pb-1 text-left uppercase tracking-wider border-b-2 dark:border-white border-stone-800 cursor-pointer"
          href="https://www.instagram.com/ethanliu8/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => instaButtonClick()}
        >
          <span className="text-md">Say hello</span>
          <img
            className="hidden dark:flex ml-3"
            src={Instalight}
            alt="Instagram"
            width="20px"
            height="20px"
          />
          <img
            className="flex ml-3 dark:hidden"
            src={Instadark}
            alt="Instagram"
            width="20px"
            height="20px"
          />
        </a>
      </div>
      <div className="flex my-8 mx-5">
        <p className="text-lg">
          Currently a third year CS student at the University of Waterloo.
          That&rsquo;s it, that&rsquo;s really all I have to say, but do feel
          free to hang around as long as you like and always do feel free to{" "}
          <Link to={"contact"} smooth={true} duration={500}>
            <span className="cursor-pointer font-semibold underline">
              reach out
            </span>
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
