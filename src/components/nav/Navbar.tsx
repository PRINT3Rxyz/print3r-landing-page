import { useState } from "react";

import LaunchApp from "./LaunchApp";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const links = ["Home", "Trade", "Earn", "Referrals", "Airdrop", "Ecosystem"];
  const flexDirection = isActive ? "flex-col" : "flex-row";
  const mg = isActive ? "my-6" : "mr-6";
  const visibility = isActive ? "flex flex-col justify-around" : "hidden";

  return (
    <>
      <nav className="flex flex-row bg-p3-blue px-5 sm:px-24 py-5 items-center justify-between min-w-full relative top-0 z-50">
        <img
          src="src/assets/printer-nav-logo.png"
          className="w-48 max-w-[50%] m-0 cursor-pointer"
        ></img>
        <div
          className="hidden xl:flex flex-row
           justify-between w-max items-center"
        >
          <div className={`flex ${flexDirection}`}>
            {links.map((link, index) => (
              <a
                key={index}
                href="#"
                className={`text-p3-nav-text no-underline font-inter text-base px-7 py-2.5 focus:text-white`}
              >
                {link}
              </a>
            ))}
          </div>

          <img
            className={`${mg} max-h-14 cursor-pointer`}
            src="src/assets/base-button.png"
          ></img>
          <LaunchApp />
        </div>

        <div className="xl:hidden" onClick={toggleMenu}>
          <div className="h-12 w-12 relative cursor-pointer xl:hidden">
            <div
              className={`absolute w-[70%] h-0.5 bg-p3-orange rounded-full transform transition-transform duration-600 
          ${isActive ? "top-6 rotate-[-315deg]" : "top-3"}`}
            />
            <div
              className={`absolute w-[70%] h-0.5 bg-p3-orange rounded-full transform transition-opacity duration-800 
          ${isActive ? "opacity-0" : "top-6"}`}
            />
            <div
              className={`absolute w-[70%] h-0.5 bg-p3-orange rounded-full transform transition-transform duration-600 
          ${isActive ? "top-6 rotate-[-45deg]" : "top-9"}`}
            />
          </div>
        </div>
      </nav>

      <div
        className={`${visibility} bg-p3-blue items-center p-6 absolute w-full z-10`}
      >
        <div className={`flex ${flexDirection}`}>
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className={`text-p3-nav-text no-underline font-inter text-base px-7 py-2.5 focus:text-white`}
            >
              {link}
            </a>
          ))}
        </div>
        <img
          className={`${mg} max-h-14 cursor-pointer`}
          src="src/assets/base-button.png"
        ></img>
        <LaunchApp />
      </div>
    </>
  );
};

export default Navbar;
