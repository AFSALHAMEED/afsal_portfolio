import React from "react";
import { motion } from "motion/react";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";

export const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg !font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl !font-Ovo"
      >
        My Latest work
      </motion.h2>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 10, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mb-10 max-w-2xl !font-Ovo text-center mx-auto"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end-development.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className=" "
      >
        <div className="flex  flex-col md:flex-row  items-center gap-6 md:h-[400px] w-full max-w-5xl mt-10 mx-auto ">
          {workData.map(({ bgImage, description, title, website }, index) => (
            <motion.a
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={index}
              className="relative group  flex-grow transition-all md:w-56 h-[400px] duration-500 hover:w-full"
              href={website ? website : ""}
              target="_blank"
            >
              <img
                className="h-full w-full object-cover object-center"
                src={bgImage}
                alt="image"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-10 text-white  bg-black/50 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="text-3xl">{title}</h1>
                <p className="text-sm">{description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
