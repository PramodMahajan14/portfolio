import React from "react";
import { summry } from "../Helper/constant";
import MyImge from "../assets/Rectangle 1037.png";
import { ReactComponent as Plogoion } from "../assets/Plogo.svg";
import { ReactComponent as Phone } from "../assets/phone.svg";
import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as GitHub } from "../assets/github.svg";
import { motion } from "framer-motion";
const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  return (
    <div className="border-b border-neutral-200 pb-4 lg:mb-35 px-2 dark:text-white text-neutral-950">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 2 }}
              className=" pb-16 text-2xl font-thin tracking-tight lg:mt-16 lg:text-8xl "
            >
              Pramod Mahajan
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 2 }}
              className="bg-gradient-to-r from-pink-200 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent"
            >
              MERN Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 2 }}
              className="my-2 max-w-xl py-2   tracking-tighter"
            >
              {summry}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl"
              src={MyImge}
              alt="profile"
            />
          </div>
        </div>
        <ul className="ml-auto mr-2 space-y-3 text-[#b0b2c3] hover:text-white fixed right-1">
          <motion.li
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className=" text-[#b0b2c3] hover:text-neutral-600 dark:hover:text-white"
          >
            <LinkedIn className="size-5 md:size-10 cursor-pointer" />
          </motion.li>
          <motion.li
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -110 }}
            transition={{ duration: 1 }}
            className=" text-[#b0b2c3] hover:text-neutral-600 dark:hover:text-white"
          >
            <Twitter className="size-5 md:size-10 " />
          </motion.li>
          <motion.li
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -120 }}
            transition={{ duration: 1.5 }}
            className=" text-[#b0b2c3] hover:text-neutral-600 dark:hover:text-white"
          >
            <GitHub className="size-5 md:size-10 size-10" />
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
