import React from 'react';
import { company_logos } from '../assets/assets';
import { motion } from 'motion/react';

const TrustedBy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col  gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white/80 items-center py-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="font-semibold"
      >
        Trusted by Leading companies
      </motion.h1>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-10 items-center"
      >
        {company_logos.map((c, i) => {
          return (
            <motion.img
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              src={c}
              alt=""
              key={i}
              className="max-h-5 sm:max-h-6 dark:drop-shadow-2xl"
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default TrustedBy;
