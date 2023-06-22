import useAnalyticsEventTracker from "./analyticsEventTracker";
import Instalight from "../assets/logos/gramm.png";
import Instadark from "../assets/logos/insta-logo-dark.png";

function AboutSection() {
  const gaEventTracker = useAnalyticsEventTracker("Instagram", "click");
  return (
    <div
      name="about"
      className="dark:bg-teal bg-[#c0c2ce] grid md:grid-cols-2 justify-center items-center px-5 md:px-16 lg:px-52 xl:px-72"
    >
      <div className="flex flex-col items-start mt-10 mx-5 md:my-[3.5rem]">
        <h3 className="text-left font-semibold uppercase text-md pb-3 underline underline-offset-2 dark:text-cloud text-[#4c4c55]">
          About Me
        </h3>
        <h1 className="text-5xl font-semibold ">
          Glad you're here, take a second to
          <span className="dark:text-sand"> look around.</span>
        </h1>
        <a
          className="flex transition ease-in-out delay-150 hover:translate-x-[8px] pt-5 pb-1 text-left uppercase tracking-wider border-b-2 dark:border-white border-stone-800 cursor-pointer"
          href="https://www.instagram.com/ethanliu8/"
          target="_blank"
          onClick={() => gaEventTracker("Instagram")}
        >
          Say hello
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
          Hi there, I'm Ethan, I am a first year CS student at the University of
          Waterloo currently working on web dev. In my free time I enjoy
          watching The Man in the High Castle and playing basketball. Feel free
          to hang around as long as you like.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
