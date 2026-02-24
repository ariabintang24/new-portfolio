import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";

import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="bg-neutral-100 dark:bg-neutral-950 relative min-h-screen flex flex-col">
        <Toaster
          position="top-center"
          toastOptions={{
            style: { zIndex: 9999999 },
          }}
        />

        <Navbar theme={theme} setTheme={setTheme} />

        {/* MAIN CONTENT */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>

        <Footer theme={theme} />
      </div>
    </BrowserRouter>
  );
};

export default App;
