"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className=" mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-600">
              Hello, I'm
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Johan",
                2000,
                "Web Developer",
                2000,
                "Frontend Developer",
                2000,
                "Backend Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <div className="max-w-full sm:max-w-[300px] md:max-w-[400px] lg:max-w-[580px] ">
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              Welcome! I’m a recently graduated junior developer with a passion
              for building modern web applications.
            </p>
          </div>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-400 to-green-500 hover:bg-slate-200 text-white">
              Hire me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-blue-500 via-purple-400 to-green-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/pathetic.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2"
              width={300}
              height={300}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
