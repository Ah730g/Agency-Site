import React from 'react';
import Title from './Title';
import assets from '../assets/assets';
import { motion } from 'motion/react';

const OurWork = () => {
  const works = [
    {
      title: 'Mobile app marketing',
      des: 'We trun bold ideas into powerful digital solutions that connect, engage',
      image: assets.work_mobile_app,
    },
    {
      title: 'Dashboard management',
      des: 'We help you execute your plan and deliver results',
      image: assets.work_dashboard_management,
    },
    {
      title: 'Fitness app promotion',
      des: 'We help you create a marketing startegy that drives results',
      image: assets.work_fitness_app,
    },
  ];
  return (
    <div
      className="flex flex-col gap-7 px-4 sm:px-14 lg:px-24 xl:px-40 text-gray-700 dark:text-white pt-20 items-center"
      id="ourWork"
    >
      <Title
        title="Our latest work"
        desc="From strategy to execution we craft digital solutions that move your business forward"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl"
      >
        {works.map((w, i) => {
          return (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duraiton: 0.5 }}
              key={i}
              className="hover:scale-102 transition-all duration-500 cursor-pointer"
            >
              <img src={w.image} alt="" className="w-full rounded-xl" />
              <h3 className="mt-3 mb-2 text-lg font-semibold">{w.title}</h3>
              <p className="text-sm w-4/5 opacity-60">{w.des}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default OurWork;
