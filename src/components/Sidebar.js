import React, { useState } from "react";
import Header from "./SideBar/Header";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // state to toggle sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" flex w-full">
      <div className="bg-orange-200 min-w-48 h1-screen">
        <h2>SideBar</h2>
      </div>
      <div className="felx-1 h-screen ">
        <Header NavOpen={false} />
      </div>
    </div>
  );
};

export default Sidebar;
