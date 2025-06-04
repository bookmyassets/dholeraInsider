"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "@/app/assets/icons/logo.webp";
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import ThemeChanger from "./themeChanger";
import {
  getPosts,
  getSub,
  getblogs,
  getUpdates,
  projectInfo,
  Inventory,
  Brochure,
  getEvents,
} from "@/sanity/lib/api";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [projects, setProjects] = useState([]);
  const [insideDholeraProjects, setInsideDholeraProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleHeader = () => setHeader(!header);
  const handleMobileHeader = () => {
    setHeader(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName, e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch projects data
        const projectsData = await projectInfo();
        const subProjectsData = await getSub();

        // Combine and organize projects
        const allProjects = [...projectsData, ...subProjectsData];
        const availableProjects = allProjects.filter(
          (project) =>
            !project.categories?.some((cat) => cat.title === "Sold Out")
        );
        const soldOutProjects = allProjects.filter((project) =>
          project.categories?.some((cat) => cat.title === "Sold Out")
        );

        setProjects([...availableProjects, ...soldOutProjects]);

        // Fetch inside Dholera projects (using getPosts or other relevant API)
        const insideDholeraData = await getPosts();
        const availableInsideProjects = insideDholeraData.filter(
          (project) =>
            !project.categories?.some((cat) => cat.title === "Sold Out")
        );
        const soldOutInsideProjects = insideDholeraData.filter((project) =>
          project.categories?.some((cat) => cat.title === "Sold Out")
        );

        setInsideDholeraProjects([
          ...availableInsideProjects,
          ...soldOutInsideProjects,
        ]);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".dropdown-container") &&
        !e.target.closest(".dropdown-trigger")
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-20 shadow-xl flex justify-between items-center z-40 bg-green-400 dark:bg-[#0a5307]">
        <div className="md:max-w-[1240px] m-5 flex justify-between items-center p-4">
          <div className="relative h-14 w-14 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full h-20 shadow-xl flex justify-between items-center z-40 ease-in duration-300 
        ${scrolled ? "bg-green-400 dark:bg-[#0a5307]" : "bg-transparent"}`}
    >
      {/* Logo */}
      <div className="md:max-w-[1240px] m-5 flex justify-between items-center p-4">
        <Link href="/">
          <div className="relative h-14 w-14">
            <Image src={logo} alt="Logo" fill className="object-contain" />
          </div>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="text-sm font-bold hidden sm:flex text-white">
        <li className="p-4 hover:text-orange-500">
          <Link href="/">Home</Link>
        </li>
        <li className="p-4 hover:text-orange-500">
          <Link href="/about-us">About</Link>
        </li>

        {/* Projects Dropdown */}
        <li className="relative p-4 hover:text-orange-500 dropdown-container">
          <div
            className="flex items-center cursor-pointer dropdown-trigger"
            onClick={(e) => toggleDropdown("insideDholera", e)}
          >
            Projects
            <AiOutlineDown
              className={`ml-1 transition-transform duration-200 ${activeDropdown === "insideDholera" ? "rotate-180" : ""}`}
            />
          </div>
          {activeDropdown === "insideDholera" && (
            <div
              className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50 max-h-96 overflow-y-auto dropdown-container"
              onClick={(e) => e.stopPropagation()}
            >
              {insideDholeraProjects.map((project) => {
                const isSoldOut = project.categories?.some(
                  (cat) => cat.title === "Sold Out"
                );
                return (
                  <Link
                    key={project._id}
                    href={`/inside-dholera/${project.slug.current}`}
                    className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm ${
                      isSoldOut
                        ? "opacity-60 text-gray-500"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="truncate">{project.title}</span>
                      {isSoldOut && (
                        <span className="text-xs bg-red-500 text-white px-2 py-1 rounded ml-2 flex-shrink-0">
                          Sold Out
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </li>

        <li className="p-4 hover:text-orange-500">
          <Link href="/all-blog">Blogs</Link>
        </li>

        {/* Inside Dholera Dropdown */}

        <li className="relative p-4 hover:text-orange-500 dropdown-container">
          <div
            className="flex items-center cursor-pointer dropdown-trigger"
            onClick={(e) => toggleDropdown("projects", e)}
          >
            Inside Dholera
            <AiOutlineDown
              className={`ml-1 transition-transform duration-200 ${activeDropdown === "projects" ? "rotate-180" : ""}`}
            />
          </div>
          {activeDropdown === "projects" && (
            <div
              className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50 max-h-96 overflow-y-auto dropdown-container"
              onClick={(e) => e.stopPropagation()}
            >
              {projects.map((project) => {
                const isSoldOut = project.categories?.some(
                  (cat) => cat.title === "Sold Out"
                );
                return (
                  <Link
                    key={project._id}
                    href={`/all-project/${project.slug.current}`}
                    className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm ${
                      isSoldOut
                        ? "opacity-60 text-gray-500"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="truncate">{project.title}</span>
                      {isSoldOut && (
                        <span className="text-xs bg-red-500 text-white px-2 py-1 rounded ml-2 flex-shrink-0">
                          Sold Out
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </li>

        {/* Gallery Dropdown */}
        <li className="relative p-4 hover:text-orange-500 dropdown-container">
          <div
            className="flex items-center cursor-pointer dropdown-trigger"
            onClick={(e) => toggleDropdown("gallery", e)}
          >
            Gallery
            <AiOutlineDown
              className={`ml-1 transition-transform duration-200 ${activeDropdown === "gallery" ? "rotate-180" : ""}`}
            />
          </div>
          {activeDropdown === "gallery" && (
            <div
              className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50 dropdown-container"
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                href="/gallery/photos"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setActiveDropdown(null)}
              >
                Photo Gallery
              </Link>
              <Link
                href="/gallery/videos"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setActiveDropdown(null)}
              >
                Video Gallery
              </Link>
            </div>
          )}
        </li>

        {/* Get In Touch Dropdown */}
        <div className="relative ml-6 dropdown-container">
          <div
            className="cursor-pointer flex items-center text-white p-4 hover:text-orange-500 dropdown-trigger"
            onClick={(e) => toggleDropdown("getInTouch", e)}
          >
            Get In Touch
            <AiOutlineDown
              className={`ml-1 transition-transform duration-200 ${activeDropdown === "getInTouch" ? "rotate-180" : ""}`}
            />
          </div>
          {activeDropdown === "getInTouch" && (
            <div
              className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50 dropdown-container"
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href="tel:+918130371647"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setActiveDropdown(null)}
              >
                Call Now
              </a>
              <a
                href="https://wa.me/918130371647"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setActiveDropdown(null)}
              >
                WhatsApp Us
              </a>
              <a
                href="/callback"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setActiveDropdown(null)}
              >
                Book A Free Site Visit
              </a>
            </div>
          )}
        </div>
      </ul>

      <div className="mr-10 hidden sm:flex">
        <ThemeChanger />
      </div>

      {/* Mobile Menu Button */}
      <div onClick={handleHeader} className="block sm:hidden p-4 z-10">
        {header ? (
          <AiOutlineClose size={30} className="text-white" />
        ) : (
          <AiOutlineMenu size={30} className="text-white" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden absolute top-0 left-0 w-full h-screen bg-[#020308ea] flex justify-center items-center transition-all duration-300 overflow-y-auto ${header ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="text-white text-center text-xl space-y-4 py-8">
          <li>
            <Link href="/" onClick={handleMobileHeader}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us" onClick={handleMobileHeader}>
              About
            </Link>
          </li>

          {/* Mobile Projects Section */}
          <li className="pt-4">
            <div className="font-bold text-xl">Projects</div>
            <div className="text-base mt-2 space-y-3 max-h-40 overflow-y-auto">
              {projects.slice(0, 5).map((project) => (
                <Link
                  key={project._id}
                  href={`/all-project/${project.slug.current}`}
                  onClick={handleMobileHeader}
                  className={`block text-sm ${project.categories?.some((cat) => cat.title === "Sold Out") ? "opacity-60" : ""}`}
                >
                  {project.title}
                  {project.categories?.some(
                    (cat) => cat.title === "Sold Out"
                  ) && (
                    <span className="text-xs bg-red-500 text-white px-2 py-1 rounded ml-2">
                      Sold Out
                    </span>
                  )}
                </Link>
              ))}
              {projects.length > 5 && (
                <div className="text-sm text-orange-400">
                  Scroll for more projects...
                </div>
              )}
            </div>
          </li>

          <li>
            <Link href="/all-blog" onClick={handleMobileHeader}>
              Blogs
            </Link>
          </li>

          {/* Mobile Inside Dholera Section */}
          <li className="pt-4">
            <div className="font-bold text-xl">Inside Dholera</div>
            <div className="text-base mt-2 space-y-3 max-h-40 overflow-y-auto">
              {insideDholeraProjects.slice(0, 5).map((project) => (
                <Link
                  key={project._id}
                  href={`/inside-dholera/${project.slug.current}`}
                  onClick={handleMobileHeader}
                  className={`block text-sm ${project.categories?.some((cat) => cat.title === "Sold Out") ? "opacity-60" : ""}`}
                >
                  {project.title}
                  {project.categories?.some(
                    (cat) => cat.title === "Sold Out"
                  ) && (
                    <span className="text-xs bg-red-500 text-white px-2 py-1 rounded ml-2">
                      Sold Out
                    </span>
                  )}
                </Link>
              ))}
              {insideDholeraProjects.length > 5 && (
                <div className="text-sm text-orange-400">
                  Scroll for more projects...
                </div>
              )}
            </div>
          </li>

          <li>
            <Link href="/gallery/photos" onClick={handleMobileHeader}>
              Photo Gallery
            </Link>
          </li>
          <li>
            <Link href="/gallery/videos" onClick={handleMobileHeader}>
              Video Gallery
            </Link>
          </li>
          <li>
            <a href="tel:+918130371647" onClick={handleMobileHeader}>
              Call Now
            </a>
          </li>
          <li>
            <a href="https://wa.me/918130371647" onClick={handleMobileHeader}>
              WhatsApp Us
            </a>
          </li>
          <li>
            <a href="/callback" onClick={handleMobileHeader}>
              Book A Site Visit
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
