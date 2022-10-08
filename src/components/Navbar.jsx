import { Link } from "react-scroll";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import logo from "../assets/img/logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  // const [scrolling, setScrolling] = useState(false);

  function navHandler() {
    setNav(!nav);
  }

  function closeHandler() {
    setNav(!nav);
  }

  // function scrollHandler() {
  //   if(window.scrollY>=100){
  //     setScrolling(true);
  //   }else{
  //     setScrolling(false);
  //   }
  // }

  // window.addEventListener("scroll", scrollHandler);

  return (
    <div className="nbar bg-storm">
      <div className="px-3 justify-between items-center w-full h-full flex">
        <div className="flex items-center">
          <img src={logo} alt="personal logo" width="65px" height="65px" />
          <ul className="text-slate-100 hidden md:flex">
            <li className="cursor-pointer"><Link to="intro" smooth={true} duration={500}>Home</Link></li>
            <li className="cursor-pointer"><Link to="about" smooth={true} duration={500} offset={-50}>About</Link></li>
            <li className="cursor-pointer"><Link to="places" smooth={true} duration={500} offset={-50}>Places</Link></li>
            <li className="cursor-pointer"><Link to="tech" smooth={true} duration={500} offset={-100}>Tech</Link></li>
            <li className="cursor-pointer"><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          </ul>
        </div>
        {/* <div className="text-slate-50 hidden md:flex mr-4">
          social media
        </div> */}
        <div className="md:hidden mr-3" onClick={navHandler}>
          {!nav ? (
            <Bars3Icon className="w-5" />
          ) : (
            <XCircleIcon className="w-5" />
          )}
        </div>
        
      </div>
      <ul className={!nav ? "hidden" : "absolue bg-storm w-full px-6 text-slate-50"}>
        <li className="border-b-2 border-zinc-300"><Link onClick={closeHandler} to="intro" smooth={true} duration={500}>Home</Link></li>
        <li className="border-b-2 border-zinc-300"><Link onClick={closeHandler} to="about" smooth={true} duration={500}>About</Link></li>
        <li className="border-b-2 border-zinc-300"><Link onClick={closeHandler} to="places" smooth={true} duration={500}>Places</Link></li>
        <li className="border-b-2 border-zinc-300"><Link onClick={closeHandler} to="tech" smooth={true} duration={500}>Tech</Link></li>
        <li><Link onClick={closeHandler} to="projects" smooth={true} duration={500}>Projects</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
