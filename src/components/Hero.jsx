import React from 'react';
import assets from '../assets/assets';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <div
      className="flex flex-col gap-4 items-center text-center px-4 sm:px-12 lg:px-24 xl:px-40
     py-20 text-gray-700 dark:text-white overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="border border-gray-600 pr-4 rounded-full p-1.5 flex gap-1 font-medium text-sm items-center"
      >
        <img src={assets.group_profile} alt="" className="w-20" />
        <p>Trusted by 10k+ people</p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl sm:text-6xl xl:text-[84px] max-w-5xl xl:leading-[95px] font-medium"
      >
        Truning imagination into{' '}
        <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{' '}
        impact
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className=" max-w-lg font-medium text-gray-600 dark:text-white"
      >
        Creating meaningful connections and truning big ideas into interactive
        digital experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img
          src={assets.bgImage1}
          alt=""
          className="absolute sm:-top-100 sm:left-70 -z-1 -top-50 left-25 dark:hidden"
        />
        <img src={assets.hero_img} alt="" className="w-full max-w-6xl" />
      </motion.div>
    </div>
  );
};

export default Hero;
