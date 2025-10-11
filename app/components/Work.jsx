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
        className="grid grid-cols-[var(--col-auto)]  gap-3 dark:text-black "
      >
        <div className="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
          {workData.map(({ bgImage, description, title, website }, index) => (
            <motion.a
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={index}
              className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full"
              href={website ? website : ""}
              target="_blank"
            >
              <img
                className="h-full w-full object-cover object-center"
                src={bgImage}
                alt="image"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="text-3xl">{title}</h1>
                <p className="text-sm">{description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
      {/* <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show More
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="right-arrow-bold"
          className="w-4"
        />
      </motion.a> */}
    </motion.div>
  );
};
