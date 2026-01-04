// components/Header.jsx
"use client";

import React, { useEffect } from "react";
import { useTheme } from "../store/useThemeStore"; 

const Header = () => {
  const { theme, setTheme } = useTheme();

  // مقداردهی اولیه theme
  useEffect(() => {
    // چک کردن localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    } else {
      // چک کردن preference سیستم
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, [setTheme]);

  // اعمال theme به html element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' ? "bg-gray-900 text-white" : "bg-white text-gray-900"
    }`}>
      <div className="flex flex-row justify-between items-center p-4 md:p-8">
        <div
          className={`w-8 h-8 rounded hover:-rotate-12 hover:scale-110 transition-all duration-500 cursor-pointer ${
            theme === 'dark' ? "bg-white" : "bg-black"
          }`}
        >
          <div
            className={`text-center ${theme === 'dark' ? "text-black" : "text-white"}`}
          >
            M
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <button onClick={toggleTheme} className="p-2">
            {theme === 'dark' ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <button>
            {theme === 'dark' ? (
              <svg
                className="text-white h-5 w-5"
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
            ) : (
              <svg
                className="text-black h-5 w-5"
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
            )}
          </button>
        </div>
      </div>

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
            src={"/me.webp"}
            alt="me"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
