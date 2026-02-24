import React, { useState, useRef } from "react";
import { motion } from "motion/react";

const ServiceCard = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md dark:shadow-white/5 "
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={divRef}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${
          visible ? "opacity-70" : "opacity-0"
        }`}
        style={{ top: position.y - 150, left: position.x - 150 }}
      />
      <div className="relative z-10 bg-white dark:bg-black rounded-[10px] p-8 transition-all hover:p-7.5 hover:m-0.5">
        {/* ICON */}
        {/* VIDEO ICON */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white  overflow-hidden">
            <video
              src={service.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-semibold text-center mb-4">
          {service.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
