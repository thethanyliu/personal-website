import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import logolight from "../assets/img/logo-light.png";
import logodark from "../assets/img/logo-black.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function navHandler() {
    setNav(!nav);
  }

  function closeHandler() {
    setNav(!nav);
  }

  function handleThemeButton() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
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
    <div className="dark:bg-storm bg-[#d2d4dc] w-screen h-16 z-20 fixed drop-shadow-lg ">
      <div className="px-3 justify-between items-center w-full h-full flex">
        <div className="flex items-center">
          <img
            src={theme === "dark" ? logolight : logodark}
            alt="personal logo"
            width="65px"
            height="65px"
          />
          <ul className="hidden md:flex">
            <li className="cursor-pointer">
              <Link to="intro" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="about" smooth={true} duration={500} offset={-50}>
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="tech" smooth={true} duration={500} offset={-100}>
                Tech
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="contact" smooth={true} duration={500} offset={-100}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div
          onClick={handleThemeButton}
          className={
            theme === "dark"
              ? "hidden md:flex bg-orange-400 p-2 mr-4 rounded-md"
              : "hidden"
          }
        >
          <SunIcon className="w-5" fill="none" stroke="#fff" />
        </div>
        <div
          onClick={handleThemeButton}
          className={
            theme === "light"
              ? "hidden md:flex bg-violet-400 p-2 mr-4 rounded-md"
              : "hidden"
          }
        >
          <MoonIcon className="w-5" fill="none" />
        </div>
        <div className="md:hidden mr-3" onClick={navHandler}>
          {!nav ? (
            <Bars3Icon className="w-5" fill="none" stroke="#d4d4d8" />
          ) : (
            <XCircleIcon className="w-5" fill="none" stroke="#d4d4d8" />
          )}
        </div>
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "bg-[#d2d4dc] dark:bg-storm absolue w-full px-6 md:hidden"
        }
      >
        <li className="border-b-2 border-stone-900 dark:border-zinc-300 cursor-pointer">
          <Link onClick={closeHandler} to="intro" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-stone-900 dark:border-zinc-300 cursor-pointer">
          <Link onClick={closeHandler} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="border-b-2 border-stone-900 dark:border-zinc-300 cursor-pointer">
          <Link onClick={closeHandler} to="tech" smooth={true} duration={500}>
            Tech
          </Link>
        </li>
        <li className="border-b-2 border-stone-900 dark:border-zinc-300 cursor-pointer">
          <Link
            onClick={closeHandler}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
        {/* <li>
          <div
            onClick={handleThemeButton}
            className={
              theme === "dark"
                ? "justify-center items-center bg-orange-300 p-2 mr-4 rounded-md"
                : "hidden"
            }
          >
            <SunIcon className="w-5" fill="none" stroke="#fff" />
          </div>
          <div
            onClick={handleThemeButton}
            className={
              theme === "light"
                ? "bg-violet-300 p-2 mr-4 rounded-md"
                : "hidden"
            }
          >
            <MoonIcon className="w-5" fill="none" />
          </div>
        </li> */}
      </ul>
    </div>
  );
}

export default Navbar;
