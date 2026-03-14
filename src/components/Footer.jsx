import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import assets from "../assets/assets";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        mt-20
        bg-white dark:bg-black
        px-6 sm:px-12 lg:px-24
        pt-16 pb-8
        transition-colors duration-500 ease-in-out
      "
    >
      {/* TOP SECTION */}
      <div className="grid md:grid-cols-3 gap-12 md:items-start">
        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Portfolio
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-sm">
            Showcasing my projects, skills, and passion for building modern web
            applications.
          </p>

          <div className="mt-6 space-y-4">
            <div
              className="
                bg-white dark:bg-black
                border border-gray-200 dark:border-gray-700
                rounded-xl px-4 py-3
                shadow-sm dark:shadow-black/30
                text-sm
                text-gray-700 dark:text-gray-300
                transition-all duration-500 ease-in-out
              "
            >
              ✉️ code.demna@gmail.com
            </div>

            <div
              className="
                bg-white dark:bg-black
                border border-gray-200 dark:border-gray-700
                rounded-xl px-4 py-3
                shadow-sm dark:shadow-black/30
                text-sm
                text-gray-700 dark:text-gray-300
                transition-colors duration-500 ease-in-out
              "
            >
              📍 Indonesia
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="md:justify-self-center">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-600 dark:text-gray-400 transition-colors duration-500 ease-in-out">
            <li>
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Sosial Media
          </h3>

          <div className="flex gap-4">
            {[
              {
                icon: assets.github_icon,
                link: "https://github.com/ariabintang24",
                isGithub: true,
              },
              {
                icon: assets.linkedin_icon,
                link: "https://www.linkedin.com/in/aria-bintang-772146260",
              },
              {
                icon: assets.facebook_icon,
                link: "https://facebook.com/",
              },
              {
                icon: assets.instagram_icon,
                link: "https://instagram.com/theweeknd",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
          w-10 h-10
          flex items-center justify-center
          bg-white dark:bg-black
          border border-gray-200 dark:border-gray-700
          rounded-lg
          shadow-md dark:shadow-black/30
          hover:scale-110
          transition-all duration-300 ease-in-out
        "
              >
                <img
                  src={item.icon}
                  alt="social icon"
                  className={`${item.isGithub ? "w-8" : "w-6"} opacity-80 dark:opacity-90`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div
        className="
          border-t border-gray-300 dark:border-gray-800
          mt-12 pt-6
          text-center text-sm
          text-gray-500 dark:text-gray-500
          transition-colors duration-500 ease-in-out
        "
      >
        © {new Date().getFullYear()} Portfolio. All rights reserved.
        <br />
        Built with ❤️ by Me
      </div>
    </motion.footer>
  );
};

export default Footer;
