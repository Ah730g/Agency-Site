import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

const ServiceCard = ({ service }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const devRef = useRef(null);
  const onMouseMoving = (e) => {
    const bounding = devRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounding.left, y: e.clientY - bounding.top });
  };
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ duration: 0.5 }}
      className="relative rounded-xl max-w-lg border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100
    dark:shadow-white/10 m-2 sm:m-4 overflow-hidden"
      ref={devRef}
      onMouseMove={onMouseMoving}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div
        className={`absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
      rounded-full blur-2xl transition-opacity duration-500 z-0 mix-blend-lighten pointer-events-none
      ${visible ? 'opacity-70' : 'opacity-0'}`}
        style={{ top: position.y - 150, left: position.x - 150 }}
      ></div>

      <div className="flex gap-10 p-8 bg-white z-10 relative dark:bg-gray-900 hover:p-7.5 rounded-[10px] hover:m-0.5 items-center transition-all">
        <div className="rounded-full bg-gray-100 dark:bg-gray-700">
          <img
            src={service.icon}
            alt=""
            className="bg-white rounded-full m-2 dark:bg-gray-900"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold">{service.title}</h3>
          <p className="text-sm mt-2">{service.des}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
