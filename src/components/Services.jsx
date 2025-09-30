import React from 'react';
import assets from '../assets/assets';
import Title from './Title';
import ServiceCard from './ServiceCard';
import { motion } from 'motion/react';

const Services = () => {
  const srevices = [
    {
      title: 'Advertising',
      des: 'We trun bold ideas into powerful digital solutions that connect, engage',
      icon: assets.ads_icon,
    },
    {
      title: 'Content marketing',
      des: 'We help you execute your plan deliver results',
      icon: assets.marketing_icon,
    },
    {
      title: 'Content Writing',
      des: 'We help you create a marketing strategy that drives results',
      icon: assets.content_icon,
    },
    {
      title: 'Social media',
      des: 'We help you build a strong social media presence and engate with you audience',
      icon: assets.social_icon,
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col gap-7 relative px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-600 dark:text-white items-center 
    mt-10"
      id="services"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -z-1 -top-110 -left-70 dark:hidden"
      />
      <Title
        title="How can we help ? "
        desc="From strategy to execution we craft digital solutions that move your business forward"
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {srevices.map((s, i) => {
          return <ServiceCard service={s} key={i} />;
        })}
      </div>
    </motion.div>
  );
};

export default Services;
