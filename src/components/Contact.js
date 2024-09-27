import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 p-2 dark:text-white text-neutral-950">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-2 text-4xl  text-center "
      >
        Get In Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 "
        >
          Pune
        </motion.p>
        <p className="my-4 ">9022471779</p>
        <a href="#" className="border-b ">
          pramod.14mahajan@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
