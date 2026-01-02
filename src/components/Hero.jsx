import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import React from "react";

import { heroSection } from "../data/constant";
import { DownloadButton } from "./DownloadButton";
// import TypingEffect from "./TypingEffect";

const Hero = () => {
  return (
    <section className="bg-gradient-to-tr shadow-lg from-green-950 to-green-700 lg:h-[40rem] pt-10">
      <div>
        {heroSection.map((content, id) => (
          <div
            key={id}
            className="flex flex-col lg:flex-row justify-between items-center mt-10 lg:h-full lg:justify-around mx-10"
          >
            <div className="md:mt-10">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="max-w-lg"
              >
                <h1 className="text-center md:text-2xl lg:text-4xl lg:w-96 text-slate-300 lg:mb-6 lg:leading-10 py-2 font-bold">
                  {content.title}
                </h1>

                <p className="text-center xl:text-2xl xl:w-full lg:w-96 lg:leading-10 md:w-72 md:mb-5 max-xs:text-sm font-semibold text-gray-200 w-full m-auto">
                  I'm a{" "}
                  <ReactTyped
                    className="text-red-200"
                    strings={["Front-End Web Developer", "Graphic Designer"]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                    backDelay={1000}
                  />
                  {/* <p className="text-center md:text-xl lg:w-96 lg:leading-10 md:w-56 md:mb-5 font-semibold text-gray-200 w-48 m-auto">
                <TypingEffect /> */}
                </p>

                <DownloadButton />
              </motion.div>
            </div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative flex items-center justify-center h-96 w-96 lg:mt-10 
               before:border-8 before:border-green-200 
             before:border-t-transparent before:border-l-transparent
             before:animate-spin-slow
              before:absolute before:content-['']
              lg:before:w-full lg:before:h-full
              before:rounded-full before:w-64 before:h-64 before:bg-gray-500 
              lg:before:animate-none after:animate-spin-slow after:absolute 
               lg:after:border-[10rem] after:border-green-200 
             after:border-t-transparent after:border-l-transparent
              lg:after:content-[''] lg:after:rounded-full lg:after:w-[28rem] lg:after:h-[28rem] lg:after:bg-emerald-800"
            >
              <motion.img
                src={content.image}
                alt="Potrait image of Ebuka"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className=" h-60 mx-auto w-60 lg:h-96 bg-emerald-400 z-10 rounded-full lg:w-96 object-cover 
                "
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
