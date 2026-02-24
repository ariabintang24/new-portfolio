import React from "react";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

import webVideo from "../assets/videos/website.mp4";
import uiuxVideo from "../assets/videos/ux-design.mp4";
import videoCreatorVideo from "../assets/videos/video-channel.mp4";

const Services = () => {
  const servicesData = [
    {
      title: "Website Development",
      description:
        "I build modern, responsive, and high-performance websites tailored to your business needs. From landing pages to full-stack web applications, I focus on clean code, scalability, and user experience.",
      video: webVideo,
    },
    {
      title: "UI/UX Design",
      description:
        "I design intuitive and visually engaging user interfaces that enhance usability and create meaningful digital experiences. Every design is crafted with user behavior, accessibility, and aesthetics in mind.",
      video: uiuxVideo,
    },
    {
      title: "Video Creator",
      description:
        "I create compelling video content that tells your story and strengthens your brand presence. From concept to editing, I focus on delivering impactful visuals that capture attention and drive engagement.",
      video: videoCreatorVideo,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-10 text-gray-700 dark:text-white"
    >
      <Title
        title="How I can help you?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
