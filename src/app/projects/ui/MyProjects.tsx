import React from "react";

const MyProjects = () => {
  return (
    <div className="flex flex-col p-4 md:p-8 lg:p-12 gap-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h2 className="font-medium text-xl md:text-2xl dark:text-white">
        Projects
      </h2>
      <p className="text-sm md:text-2xl dark:text-white">
        A personal portfolio website showcasing my skills, projects, and
        experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        <div
          className="flex flex-col gap-2.5 bg-white/50 dark:bg-black/50 p-4 md:p-8 rounded-3xl 
        transition-transform duration-300 hover:scale-105"
        >
          <img
            className="w-full max-w-130 rounded-3xl"
            src="/goGreen.png"
            alt=""
          />
          <h2 className="text-sm font-medium md:text-2xl dark:text-white">
            Go Green Project
          </h2>
          <button
            className="mt-4 self-start px-4 py-2 text-sm rounded-xl 
            bg-gray-600 text-white hover:bg-gray-700 transition"
          >
            View Project →
          </button>
        </div>

        <div
          className="flex flex-col gap-2.5 bg-white/50 dark:bg-black/50 p-4 md:p-8 rounded-3xl 
        transition-transform duration-300 hover:scale-105"
        >
          <img
            className="w-full max-w-130 rounded-3xl"
            src="/hamraheMan.png"
            alt=""
          />
          <h2 className="text-sm font-medium md:text-2xl dark:text-white">
            Hamrahe Man Project
          </h2>
          <button
            className="mt-4 self-start px-4 py-2 text-sm rounded-xl 
            bg-gray-600 text-white hover:bg-gray-700 transition"
          >
            View Project →
          </button>
        </div>

        <div
          className="flex flex-col gap-2.5 bg-white/50 dark:bg-black/50 p-4 md:p-8 rounded-3xl 
        transition-transform duration-300 hover:scale-105"
        >
          <img
            className="w-full max-w-130 rounded-3xl"
            src="/shoppingCart.png"
            alt=""
          />
          <h2 className="text-sm font-medium md:text-2xl dark:text-white">
            GreenCart Project
          </h2>
          <span className="dark:text-white">
            (open this with google cors free!)
          </span>
          <button
            className="mt-4 self-start px-4 py-2 text-sm rounded-xl 
            bg-gray-600 text-white hover:bg-gray-700 transition"
          >
            View Project →
          </button>
        </div>
         <div
          className="flex flex-col gap-2.5 bg-white/50 dark:bg-black/50 p-4 md:p-8 rounded-3xl 
        transition-transform duration-300 hover:scale-105"
        >
          <img
            className="w-full max-w-130 rounded-3xl"
            src="/cars.png"
            alt=""
          />
          <h2 className="text-sm font-medium md:text-2xl dark:text-white">
            Rent Cars Project
          </h2>
         
          <button
            className="mt-4 self-start px-4 py-2 text-sm rounded-xl 
            bg-gray-600 text-white hover:bg-gray-700 transition"
          >
            View Project →
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
