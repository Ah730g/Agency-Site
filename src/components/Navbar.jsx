import React from 'react';
import { useTheme } from '../Context/ThemeContext';
import assets from '../assets/assets';
import { useState } from 'react';
import ThemeToggleBtn from './ThemeToggleBtn';
import { motion } from 'motion/react';

const Navbar = () => {
  const { theme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white/50 dark:bg-gray-900/70 backdrop-blur-xl px-6 sm:px-13 lg:px-23 xl:px-40 sticky top-0 p-4 flex justify-between
    items-center z-20"
    >
      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        alt=""
        className="w-30 sm:w-40"
      />
      <div
        className={`flex max-sm:flex-col gap-5 max-sm:bg-primary  max-sm:text-white text-gray-700 dark:text-white
       max-sm:pt-10 max-sm:fixed top-0 button-0 right-0 sm:text-sm max-sm:min-h-screen transition-all
      ${
        sidebarOpen ? 'max-sm:w-55 max-sm:pl-10' : 'overflow-hidden max-sm:w-0'
      }`}
      >
        <img
          src={assets.close_icon}
          alt=""
          className="absolute right-4 top-4 cursor-pointer w-6 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
        <a href="#" className="sm:hover:border-b">
          Home
        </a>
        <a href="#services" className="sm:hover:border-b">
          Hamza
        </a>
        <a href="#ourWork" className="sm:hover:border-b">
          Our Work
        </a>
        <a href="#contact" className="sm:hover:border-b">
          Contact Us
        </a>
      </div>
      <div className="flex items-center gap-3">
        <img
          src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
          alt=""
          className="sm:hidden w-10 cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />
        <ThemeToggleBtn />
        <a
          href="#contact"
          className="bg-primary px-6 py-2 flex gap-2 rounded-full transition-all hover:scale-103 text-white text-sm max-sm:hidden"
        >
          Connect <img src={assets.arrow_icon} alt="" />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
