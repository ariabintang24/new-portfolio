import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        relative
        w-full
        py-20 lg:py-28
        px-4 sm:px-12 lg:px-24 xl:px-40
        overflow-hidden
        text-gray-700 dark:text-white
      "
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-20">
          {/* LEFT CONTENT */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg xl:max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="
                inline-flex items-center gap-2
                border border-gray-300 dark:border-white/20
                px-4 py-2
                rounded-full
                mb-6
                bg-neutral-100/60 dark:bg-neutral-950/60
                backdrop-blur-sm
              "
            >
              <img
                className="w-6 h-6 object-contain"
                src={assets.atom_2}
                alt=""
              />
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Web Developer
              </p>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="
                text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
                font-bold
                leading-[1.1]
              "
            >
              I am <br />
              <span className="bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent">
                Aria Bintang
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="
                mt-6
                text-base lg:text-lg
                leading-relaxed
                text-gray-500 dark:text-white/70
                max-w-lg
              "
            >
              I am a motivated and versatile individual, always eager to take on
              new challenges. With a passion for learning, I am dedicated to
              delivering high-quality results.
            </motion.p>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <img
              src={assets.my_photo}
              alt="Aria Bintang"
              className="
                w-64 sm:w-72 lg:w-80 xl:w-96
                aspect-square
                object-cover
                rounded-full
                shadow-2xl
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
