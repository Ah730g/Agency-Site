import React from 'react';
import { useTheme } from '../Context/ThemeContext';
import assets from '../assets/assets';
import { motion } from 'motion/react';

const Footer = () => {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-600 dark:text-gray-300"
    >
      {/* Footer Upper */}
      <div className="flex justify-between gap-6 max-lg:flex-col lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <img
            src={theme === 'dark' ? assets.logo_dark : assets.logo}
            alt=""
            className="w-33 sm:w-40"
          />
          <p className="text-sm max-w-md">
            From strategy to execution we craft digital solutions that move your
            business forward
          </p>
          <ul className="text-sm flex gap-8">
            <a href="#" className="transition-all hover:text-primary">
              Home
            </a>
            <a href="#services" className="transition-all hover:text-primary">
              Services
            </a>
            <a href="#ourWork" className="transition-all hover:text-primary">
              Our Work
            </a>
            <a href="#contact" className="transition-all hover:text-primary">
              Contact Us
            </a>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="mt-3 mb-5 text-sm">
            The latest news, articles, and resources sent to your inbox weekly
          </p>
          <div className="flex gap-2 text-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded border border-gray-300 dark:border-gray-600
            text-sm outline-none w-full bg-transparent"
            />
            <button className="bg-primary text-white px-8 cursor-pointer ">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      <hr className="text-gray-300 my-6 dark:text-gray-600" />

      {/* Footer Lower */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex justify-between items-center pb-6 flex-wrap gap-4 max-sm:justify-center"
      >
        <p className="">Designed by Ahmed Senan, Inspired by GreatStack</p>
        <ul className="flex gap-3">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
