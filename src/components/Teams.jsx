import React from 'react';
import Title from './Title';
import { teamData } from '../assets/assets';
import { motion } from 'motion/react';

const Teams = () => {
  return (
    <div className="flex flex-col gap-7 items-center px-4 sm:px-12 lg:px-24 xl:40 text-gray-700 dark:text-white pt-20">
      <Title
        title="Meet the team"
        desc="A passionate team of digital experst dedicated to your brands success"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        {teamData.map((t, i) => {
          return (
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.4 }}
              key={i}
              className="flex items-center gap-5  max-sm:flex-col shadow-xl shadow-gray-100 dark:shadow-white/5 p-4 rounded-xl cursor-pointer 
              transition-all hover:scale-102 dark:bg-gray-900 duration-400 bg-white border border-gray-100 dark:border-gray-700"
            >
              <img src={t.image} alt="" className="w-12 rounded-full" />
              <div>
                <h3 className="text-sm font-bold">{t.name}</h3>
                <p className="text-xs opacity-60">{t.title}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Teams;
