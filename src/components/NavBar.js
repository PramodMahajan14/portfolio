import React from "react";
import { RiSunLine } from "react-icons/ri";
import { IoMoonOutline } from "react-icons/io5";
export const NavBar = ({ handleChangeTheam, CurrentTheam }) => {
  const changeTheam = () => {
    if (CurrentTheam === "dark") {
      handleChangeTheam("light");
    } else {
      handleChangeTheam("dark");
    }
  };
  return (
    <div className="mb-20  py-6 px-3 flex flex-col dark:text-white text-neutral-950">
      <header className="flex  items-center justify-between">
        <h1 className="text-2xl">PM</h1>
        <ul className="flex items-center justify-center gap-5 md:text-xl ">
          <li className="border-b-orange-500 border-b-2 cursor-pointer ease-in-out duration-75 ">
            About me
          </li>
          <li className="active:border-b-orange-500 active:border-b-2 cursor-pointer ">
            Experince
          </li>
          <li className="active:border-b-orange-500 active:border-b-2 cursor-pointer ">
            Projects
          </li>
          <li
            className="active:border-b-orange-500 active:border-b-2 cursor-pointer "
            onClick={changeTheam}
          >
            {CurrentTheam === "dark" ? <RiSunLine /> : <IoMoonOutline />}
          </li>
        </ul>
      </header>
    </div>
  );
};
