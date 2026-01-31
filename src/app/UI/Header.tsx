"use client";

import { useState } from "react";
import { useTheme } from "../store/useThemeStore";
import Modal from "./Modal";
import Link from "next/link";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className=" transition-colors bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="flex flex-row justify-between items-center p-4 md:p-8">
        <Link
          href={"/"}
          className="w-8 h-8 rounded hover:-rotate-12 hover:scale-110 transition-all duration-500 cursor-pointer bg-black dark:bg-white"
        >
          <div className="text-center pt-1 text-white dark:text-black">M</div>
        </Link>

        <div className="flex flex-row gap-2">
          <button onClick={toggleTheme} className="p-2">
            <svg
              className="w-6 h-6 hidden dark:block"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>

            <svg
              className="w-6 h-6 block dark:hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>

          <button onClick={() => setIsModalOpen(true)}>
            <svg
              className="h-5 w-5 text-black dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative z-10 w-full max-w-3xl mx-auto rounded-2xl">
            <Modal />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
