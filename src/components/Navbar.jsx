import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-50 backdrop-blur-xl font-medium bg-neutral-100/50 dark:bg-neutral-950/70"
    >
      {/* LOGO */}
      <Link to="/" className="cursor-pointer">
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
          <span className="text-gray-900 dark:text-white ml-1">Portfolio.</span>
        </h1>
      </Link>

      {/* MENU */}
      <div
        className={`
          text-gray-700 dark:text-white sm:text-sm
          ${
            !sidebarOpen
              ? "max-sm:w-0 overflow-hidden"
              : "max-sm:w-60 max-sm:pl-10"
          }
          max-sm:fixed top-0 bottom-0 right-0
          max-sm:min-h-screen max-sm:h-full
          max-sm:flex-col
          max-sm:dark:bg-black max-sm:bg-white
          max-sm:pt-20
          flex sm:items-center gap-6
          transition-all duration-300
        `}
      >
        {/* CLOSE ICON MOBILE */}
        <img
          src={theme === "dark" ? assets.close_icon : assets.close_icon_dark}
          alt="close"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        {/* HOME */}
        <Link
          to="/"
          onClick={() => setSidebarOpen(false)}
          className="hover:border-b border-primary"
        >
          Home
        </Link>

        {/* PROJECTS */}
        <Link
          to="/projects"
          onClick={() => setSidebarOpen(false)}
          className="hover:border-b border-primary"
        >
          Projects
        </Link>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* THEME TOGGLE */}
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        {/* MOBILE MENU ICON */}
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="menu"
          className="w-8 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />

        {/* CONNECT BUTTON (DESKTOP ONLY) */}
        <a
          href="https://www.linkedin.com/in/aria-bintang-772146260"
          className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"
        >
          Connect
          <img src={assets.arrow_icon} alt="" width={14} />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
