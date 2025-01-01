import Linkedin from "../assets/logos/linkedin.png";
import Githubblue from "../assets/logos/githubblue.png";

function Footer() {
  return (
    <div className="flex flex-col w-full z-10 justify-center items-center px-5 md:px-24 lg:px-56 xl:px-64">
      <div className="flex justify-center pb-4">
        <a
          className="pr-3"
          href="https://www.linkedin.com/in/ethan-liu-069717216/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} alt="Linkedin" width="30px" height="30px" />
        </a>
        <a
          href="https://github.com/thethanyliu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Githubblue} alt="github" width="30px" height="30px" />
        </a>
      </div>
      <div className="text-center">
        <h2 className="dark:text-[#a9a9a9] text-md font-mono pb-3">
          &copy; Created by Ethan Liu. All Rights Reserved.
        </h2>
      </div>
    </div>
  );
}

export default Footer;
