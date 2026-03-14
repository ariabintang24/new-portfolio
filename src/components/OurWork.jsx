import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Title from "./Title";
import { motion, AnimatePresence } from "motion/react";
import { Github } from "lucide-react";
import assets, { workData, badgeColors } from "../assets/assets";

const OurWork = ({ showAll = false }) => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  // ✅ Ambil filter dari URL
  const filterFromUrl = searchParams.get("filter") || "All";

  const projectsPerPage = 6;

  const filters = ["All", "Front End", "Full Stack"];

  const filteredProjects =
    filterFromUrl === "All"
      ? workData
      : workData.filter((project) => project.category === filterFromUrl);

  const totalProjects = filteredProjects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  // ✅ Ambil page dari URL
  const pageFromUrl = parseInt(searchParams.get("page")) || 1;

  // ✅ Clamp langsung tanpa setState
  const currentPage =
    pageFromUrl < 1
      ? 1
      : pageFromUrl > totalPages && totalPages > 0
        ? totalPages
        : pageFromUrl;

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  const paginatedProjects = showAll
    ? filteredProjects.slice(startIndex, endIndex)
    : filteredProjects.slice(0, 3);

  useEffect(() => {
    if (!showAll) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage, showAll]);

  return (
    <div id="our-work" className="flex flex-col items-center gap-7 w-full">
      <Title title="All Projects" desc="Explore all projects I have built" />

      {/* FILTER BUTTON */}
      <div className="flex gap-3 flex-wrap justify-center">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() =>
              setSearchParams({
                page: "1", // reset page ke 1 saat ganti filter
                filter: item,
              })
            }
            className={`px-4 py-2 rounded-2xl border transition cursor-pointer
              ${
                filterFromUrl === item
                  ? "bg-primary text-white border-blue-600"
                  : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300  bg-white dark:bg-black"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {paginatedProjects.map((work, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedProject(work)}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer rounded-xl p-3 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition bg-white dark:bg-black shadow-md flex flex-col h-full"
          >
            {/* ✅ wrapper relative untuk badge overlay */}
            <div className="relative">
              <div className="aspect-[16/9] overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
                <img src={work.image} className="w-full h-full object-cover" />
              </div>

              {/* ✅ badge overlay */}
              <div className="absolute top-2 right-2 flex gap-2 flex-wrap justify-end">
                {work.badges.map((badge, i) => (
                  <span
                    key={i}
                    className={`
                px-2 py-1 text-xs font-medium rounded-md shadow-lg
                backdrop-blur-md bg-opacity-90
                ${badgeColors[badge] || "bg-gray-500 text-white"}
              `}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>{" "}
            <h3 className="font-semibold mt-3 text-gray-900 dark:text-white">
              {work.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-2 mb-2">
              {work.tags.map((tag, i) => (
                <span
                  key={i}
                  className="
              text-xs px-2 py-1 rounded-md
              bg-gray-100 text-gray-700
              dark:bg-gray-800 dark:text-gray-300
              border border-gray-200 dark:border-gray-700
            "
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2 ">
              {work.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* PAGINATION */}
      {showAll && totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-10 flex-wrap">
          {/* PREV */}
          <button
            onClick={() =>
              setSearchParams({
                page: Math.max(currentPage - 1, 1).toString(),
                filter: filterFromUrl,
              })
            }
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 dark:bg-neutral-900 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition"
          >
            Prev
          </button>

          {/* PAGE NUMBERS */}
          {Array.from({ length: totalPages }, (_, i) => {
            const page = i + 1;
            const isActive = currentPage === page;

            return (
              <button
                key={page}
                onClick={() =>
                  setSearchParams({
                    page: page.toString(),
                    filter: filterFromUrl,
                  })
                }
                className={`
            px-4 py-2 rounded-lg border transition cursor-pointer

            ${
              isActive
                ? "bg-blue-600 text-white border-blue-600"
                : `
                  border-gray-300 dark:border-gray-700
                  text-gray-800 dark:text-gray-200
                  bg-white dark:bg-black
                  hover:bg-gray-100 dark:hover:bg-gray-800
                `
            }
          `}
              >
                {page}
              </button>
            );
          })}

          {/* NEXT */}
          <button
            onClick={() =>
              setSearchParams({
                page: Math.min(currentPage + 1, totalPages).toString(),
                filter: filterFromUrl,
              })
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed transition "
          >
            Next
          </button>
        </div>
      )}

      {/* SHOW MORE BUTTON */}
      {!showAll && (
        <div className="w-full flex justify-center mt-8">
          <Link
            to="/projects?page=1&filter=All"
            className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-white dark:text-gray-200 bg-primary dark:bg-primary transition"
          >
            Show More Projects →
          </Link>
        </div>
      )}

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 dark:bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="
          bg-white dark:bg-neutral-950
          border border-gray-200 dark:border-gray-700
          rounded-2xl

          max-w-lg w-full
          max-h-[85vh]

          flex flex-col
          relative

          shadow-2xl dark:shadow-black/50
          overflow-hidden
        "
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedProject(null)}
                className="
            absolute top-3 right-3
            w-9 h-9
            flex items-center justify-center

            rounded-full
            bg-white/80 dark:bg-neutral-950/80
            backdrop-blur-md

            text-gray-700 dark:text-gray-200
            hover:bg-red-500 hover:text-white

            transition
            z-20 cursor-pointer
          "
              >
                ✕
              </button>

              {/* SCROLLABLE CONTENT */}
              <div className="overflow-y-auto px-6 pt-6 pb-5">
                {/* IMAGE */}
                <div className="relative mb-5">
                  <div
                    className="
              rounded-xl
              overflow-hidden
              border border-gray-200 dark:border-gray-700
              p-2
              bg-gray-50 dark:bg-neutral-950/40
            "
                  >
                    <img
                      src={selectedProject.image}
                      className="rounded-lg w-full object-cover"
                    />
                  </div>

                  {/* BADGE */}
                  <div className="absolute bottom-4 right-4 flex gap-2 flex-wrap">
                    {selectedProject.badges.map((badge, i) => (
                      <span
                        key={i}
                        className={`
                    px-3 py-1 text-xs font-medium rounded-md shadow-lg
                    ${badgeColors[badge] || "bg-gray-500 text-white"}
                  `}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* TITLE */}
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {selectedProject.title}
                </h2>

                {/* TAGS */}
                <div className="flex gap-2 flex-wrap mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="
                  bg-gray-100 dark:bg-gray-800
                  text-gray-700 dark:text-gray-300
                  text-xs px-2.5 py-1 rounded-md
                  border border-gray-200 dark:border-gray-700
                "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* DESCRIPTION */}
                <p
                  className="
            text-gray-600 dark:text-gray-300
            leading-relaxed
            mb-6
          "
                >
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* FOOTER */}
              <div
                className="
          px-6 py-4
          border-t border-gray-200 dark:border-gray-700
          bg-gray-50 dark:bg-neutral-950/50
        "
              >
                <div className="flex items-center justify-between">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    className="
                bg-primary
                text-white
                px-5 py-2.5
                rounded-lg
                font-medium
                transition
              "
                  >
                    Live Preview
                  </a>

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    className="
    p-2.5
    rounded-lg
    text-gray-600 dark:text-gray-300
    transition-all duration-300
    hover:-translate-y-1
  "
                  >
                    <Github size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurWork;
