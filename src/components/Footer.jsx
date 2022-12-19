import Linkedin from "../assets/logos/linkedin.png";
import Githubblue from "../assets/logos/githubblue.png";

function Footer() {

  return (
    <div className="flex flex-col w-full z-10 justify-center items-center px-5 md:px-24 lg:px-56 xl:px-80">
        <div className="pb-3">
          <h1 className="text-center text-[#a9a9a9] text-2xl font-mono">Follow Me</h1>
        </div>
        <div className="flex justify-center pb-4">
          <a
            className="pr-3"
            href="https://www.linkedin.com/in/ethan-liu-069717216/"
            target="_blank"
          >
            <img src={Linkedin} alt="Linkedin" width="35px" height="35px" />
          </a>
          <a href="https://github.com/ethanliu666" target="_blank">
            <img src={Githubblue} alt="github" width="35px" height="35px" />
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