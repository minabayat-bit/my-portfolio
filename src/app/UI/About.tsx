

import React from "react";
import { useTheme } from "../store/useThemeStore";

const About = () => {
 

  return (
    <div className="transition-colors bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
     

      <div className="p-4 md:p-6 flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <div className="flex flex-col gap-4 w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Mina <span className="text-[#008d6d]">Bayat,</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-4">
            Frontend developer
          </h2>

          <p className="text-base md:text-lg lg:text-xl w-full max-w-2xl">
            Hi! I'm a Front-End Developer who enjoys crafting modern, fast, and
            user-friendly websites. I love turning complex problems into simple,
            elegant solutions through clean code and thoughtful design.
          </p>
        </div>

        <div className="flex justify-center w-full lg:w-auto">
          <img
            className="size-48 md:size-64 lg:size-80 rounded-lg object-cover"
            src="/me.webp"
            alt="me"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
