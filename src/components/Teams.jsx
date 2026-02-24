import React from "react";
import Title from "./Title";
import { skillsData } from "../assets/assets"; // ✅ UBAH
import { motion } from "motion/react";

const Skills = () => {
  // ✅ TAMBAH: struktur kategori
  const categories = [
    {
      title: "Front End",
      data: skillsData.frontend,
    },
    {
      title: "Back End",
      data: skillsData.backend,
    },
    {
      title: "Others",
      data: skillsData.others,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white"
    >
      {/* 🔄 UBAH title */}
      <Title
        title="My Skills"
        desc="Technologies and tools I use to build modern applications"
      />

      {/* ✅ TAMBAH: 3 category grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-6xl">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="
              p-6 rounded-xl
              border border-gray-200 dark:border-gray-700
              bg-white dark:bg-black
              shadow-md
            "
          >
            {/* CATEGORY TITLE */}
            <h3 className="font-semibold text-lg mb-4">{category.title}</h3>

            {/* SKILLS LIST */}
            <div className="grid grid-cols-2 gap-4">
              {category.data.map((skill, i) => (
                <div
                  key={i}
                  className="
                    flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 transition  
                  "
                >
                  {/* LOGO */}
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-6 h-6 object-contain"
                  />

                  {/* NAME */}
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
