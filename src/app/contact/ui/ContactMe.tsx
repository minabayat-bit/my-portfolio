import React from "react";

const ContactMe = () => {
  return (
    <div className="flex flex-col p-4 md:p-8 lg:p-12 gap-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h2 className="font-medium text-xl md:text-2xl dark:text-white">
        Contact Me
      </h2>

      <p className="text-sm md:text-2xl dark:text-white">
        Feel free to reach out to me for collaborations or just a friendly hello 
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        
        <div className="flex flex-col gap-3 bg-white/50 dark:bg-black/50 p-4 md:p-8 rounded-3xl
        transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg md:text-xl font-medium dark:text-white">
            Email
          </h3>
          <p className="text-sm md:text-lg dark:text-gray-300">
            Minabayatt9@gmail.com
          </p>
          <a
            href="mailto:your.email@example.com"
            className="mt-2 self-start px-4 py-2 text-sm rounded-xl
            bg-gray-600 text-white hover:bg-gray-700 transition"
          >
            Send Email →
          </a>
        </div>

        
        <div className="flex flex-col gap-3 bg-white/50 dark:bg-black/50 p-4 md:p-8 rounded-3xl
        transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg md:text-xl font-medium dark:text-white">
             Phone
          </h3>
          <p className="text-sm md:text-lg dark:text-gray-300">
            +98 938 289 6007
          </p>
          <a
            href="tel:+989121234567"
            className="mt-2 self-start px-4 py-2 text-sm rounded-xl
            bg-gray-600 text-white hover:bg-gray-700 transition"
          >
            Call Me →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
