import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  // ✅ Hanya jalankan sekali untuk set default jika belum ada theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (!savedTheme) {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      setTheme(prefersDarkMode ? "dark" : "light");
    }
  }, [setTheme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer"
    >
      {theme === "dark" ? (
        <img
          src={assets.sun_icon}
          alt="Light Mode"
          className="size-8.5 p-1.5 border border-gray-500 rounded-full"
        />
      ) : (
        <img
          src={assets.moon_icon}
          alt="Dark Mode"
          className="size-8.5 p-1.5 border border-gray-500 rounded-full"
        />
      )}
    </button>
  );
};

export default ThemeToggleBtn;
