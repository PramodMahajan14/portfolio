import React from "react";
import { ReactComponent as SwithcIcon } from "../../assets/Switch.svg";
import { BiEdit } from "react-icons/bi";
import { LuPanelLeftOpen } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
const Header = ({ NavOpen }) => {
  return (
    <div className="flex px-4 text-black justify-between px-4 py-2 w-screen">
      <ul className="flex items-center">
        <li className={`px-2 py-1 m-1 ${NavOpen ? "block" : "hidden"}`}>
          <LuPanelLeftOpen className="size-6 cursor-pointer" />
        </li>
        <li className="px-2 py-1 m-1">
          <BiEdit className="size-6 cursor-pointer" />
        </li>
      </ul>
      <ul className="flex items-center ">
        <li className="px-2 py-1 m-1">
          <CgProfile className="size-6 cursor-pointer" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
