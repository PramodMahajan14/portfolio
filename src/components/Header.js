import React from "react";
import { ReactComponent as Plogoion } from "../assets/Plogo.svg";
import { ReactComponent as Phone } from "../assets/phone.svg";
import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as GitHub } from "../assets/github.svg";
const Header = () => {
  return (
    <div className="flex h-screen flex-col  justify-between h-screen">
      <header className="flex  justify-between w-full px-1 mt-1 max-w-screen-2xl mx-auto">
        <span>
          <Plogoion />
        </span>
        <div className="flex gap-10 m-2">
          <Sun className="size-10" />
          <Moon className="size-10 hidden" />
          <Phone className="size-10" />
        </div>
      </header>

      <div className="items-center flex -mt-0 relative">
        <div className="w-full px-2 max-w-screen-xl mx-auto ">
          <Plogoion className="size-72 md:size-96 absolute top-0 left-1/2 -translate-y-1/4 -translate-x-1/2 " />
          <div className="relative">
            <h1 className="text-[30px] md:text-[64px]">Pramod Mahajan</h1>
            <p className="text=[34px] font-thin">Mern Stack developer</p>
            <button className="p-2 my-2 font-bold  rounded-md bg-gradient-to-l from-[#1596b6] to-[#1f2667e6]">
              About me
            </button>
          </div>
        </div>
        <ul className="ml-auto mr-2 space-y-3 text-[#b0b2c3] hover:text-white absolute right-1">
          <li className=" text-[#b0b2c3] hover:text-white">
            <LinkedIn className="size-10" />
          </li>
          <li className=" text-[#b0b2c3] hover:text-white">
            <Twitter className="size-10" />
          </li>
          <li className=" text-[#b0b2c3] hover:text-white">
            <GitHub className="size-10" />
          </li>
        </ul>
      </div>
      <button className="p-2 my-2 font-bold self-center  rounded-md bg-gradient-to-l from-[#1596b6] to-[#1f2667e6]">
        Let's Start
      </button>
    </div>
  );
};

export default Header;
