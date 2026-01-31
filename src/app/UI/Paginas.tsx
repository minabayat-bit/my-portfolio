"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Pages = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col p-4 md:p-8 lg:p-12 gap-4 bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="text-xl md:text-2xl font-bold dark:text-white">Pages</h2>
      <div className="h-0.5 bg-gray-300 dark:bg-gray-700"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 *:cursor-pointer">
        <div className="bg-gray-200 dark:bg-gray-800 w-full rounded-2xl p-4 hover:scale-[1.02] transition-transform duration-300">
          <h3 className="font-medium text-xl md:text-2xl dark:text-white">
            Portfolio
          </h3>
          <Link className="text-gray-600 dark:text-gray-300" href="/projects">
            Selected Projects
          </Link>
        </div>

        <div className="bg-gray-200 dark:bg-gray-800 w-full rounded-2xl p-4 hover:scale-[1.02] transition-transform duration-300">
          <h3 className="font-medium text-xl md:text-2xl dark:text-white">
            Let's Talk
          </h3>
          <Link
            href={"/contact"}
            className="text-gray-600 dark:text-gray-300 text-sm md:text-base"
          >
            Contact Me!
          </Link>{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default Pages;
