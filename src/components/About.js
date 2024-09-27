import React from "react";
import MyImge from "../assets/Rectangle 1037.png";
import { aboutme } from "../Helper/constant";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 p-2 dark:text-white text-neutral-950">
      <h1 className="my-20 text-4xl  text-center ">
        About <span className="dark:text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={MyImge} alt="img" className="rounded-2xl" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start ">
            <p className=" my-2 max-w-xl">{aboutme}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
