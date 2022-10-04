import { Link, animateScroll as scroll } from "react-scroll";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import logo from "../assets/img/logo-black.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  // const [scrolling, setScrolling] = useState(false);

  function navHandler() {
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
    <div className="nbar bg-orange">
      <div className="px-3 justify-center items-center w-full h-full flex">
        <div className="flex items-center">
          <img src={logo} alt="personal logo" width="65px" height="65px"/>
        </div>
        <>
          <ul className="text-black hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Tech</li>
            <li>Projects</li>
          </ul>
        </>
        <div className="md:hidden" onClick={navHandler}>
          {!nav ? (
            <Bars3Icon className="w-5" />
          ) : (
            <XCircleIcon className="w-5" />
          )}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolue bg-orange w-full px-6"}>
        <li className="border-b-2 border-zinc-300">Home</li>
        <li className="border-b-2 border-zinc-300">About</li>
        <li className="border-b-2 border-zinc-300">Tech</li>
        <li>Projects</li>
      </ul>
    </div>
  );
}

export default Navbar;
