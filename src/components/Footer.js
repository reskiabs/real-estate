import React from "react";

const Footer = () => {
  return (
    <footer className="bg-violet-800 py-8 text-white text-center">
      <div className="container mx-auto">
        <p class="font-medium text-md mb-4 text-gray-400 text-center">
          Made with <span class="text-pink-500">&hearts;</span>{" "}
          <a
            href="https://instagram.com/reskiabs_"
            target="_blank"
            class="text-sky-500 font-semibold"
          >
            Reski Abbas
          </a>
          , using{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            class="text-sky-500 font-semibold"
          >
            Tailwind CSS
          </a>
        </p>
        Copyright &copy; 2023. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
