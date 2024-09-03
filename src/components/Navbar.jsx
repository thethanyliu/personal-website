import { useState, useEffect, useRef } from "react";
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

  const menu = [
    { title: "Home", name: "intro" },
    { title: "About", name: "about" },
    { title: "Tech", name: "tech" },
    { title: "Contact", name: "contact" },
  ];

  const navbarRef = useRef();

  const clickHandler = (e) => {
    if (navbarRef.current && !navbarRef.current.contains(e.target)) {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", clickHandler);

    return () => document.removeEventListener("mousedown", clickHandler);
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function handleThemeButton() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <div className="dark:bg-storm bg-[#d2d4dc] w-screen h-16 z-20 fixed drop-shadow-lg">
      <div className="px-3 justify-between items-center w-full h-full flex">
        <div className="flex items-center">
          <img
            src={theme === "dark" ? logolight : logodark}
            alt="personal logo"
            width="65px"
            height="65px"
          />
          <ul className="hidden md:flex font-burtons">
            {menu.map((item, i) => (
              <li className="cursor-pointer" key={i}>
                <Link to={item.name} smooth={true} duration={500}>
                  {item.title}
                </Link>
              </li>
            ))}
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
        <div className="md:hidden mr-3" onClick={() => setNav((prev) => !prev)}>
          {!nav ? (
            <Bars3Icon
              className="w-5 cursor-pointer"
              fill="none"
              stroke={theme === "dark" ? "#d4d4d8" : "#1a120b"}
            />
          ) : (
            <XCircleIcon
              className="w-5 cursor-pointer"
              fill="none"
              stroke={theme === "dark" ? "#d4d4d8" : "#1a120b"}
            />
          )}
        </div>
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "bg-[#d2d4dc] dark:bg-storm absolute w-full px-6 md:hidden"
        }
        ref={navbarRef}
      >
        {menu.map((item, i) => (
          <li
            className="border-b-2 border-stone-900 dark:border-zinc-300 cursor-pointer"
            key={i}
          >
            <Link
              onClick={() => setNav((prev) => !prev)}
              to={item.name}
              smooth={true}
              duration={500}
            >
              {item.title}
            </Link>
          </li>
        ))}
        <li className="flex">
          <div
            onClick={handleThemeButton}
            className={
              theme === "dark" ? "w-fit bg-orange-300 p-2 rounded-md" : "hidden"
            }
          >
            <SunIcon className="w-5" fill="none" stroke="#fff" />
          </div>
          <div
            onClick={handleThemeButton}
            className={
              theme === "light"
                ? "w-fit bg-violet-300 p-2 rounded-md"
                : "hidden"
            }
          >
            <MoonIcon className="w-5" fill="none" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
