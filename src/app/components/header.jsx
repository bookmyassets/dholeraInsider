"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "@/app/assets/icons/logo.webp";
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { getPosts, getSub, projectInfo } from "@/sanity/lib/api";
import { AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm"; // Make sure to import your ContactForm component

const Header = () => {
  const [header, setHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const [projects, setProjects] = useState([]);
  const [insideDholeraProjects, setInsideDholeraProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  // Navigation data
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Blogs", href: "/blogs" },
    { name: "Projects", href: "/projects/westwynCounty" },
  ];

  const openContactForm = () => {
    setIsContactFormOpen(true);
    setMobileMenuOpen(false); // Close mobile menu when opening form
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  const dropdownItems = [
    {
      name: "Inside Dholera",
      key: "projects",
      href: "/inside-dholera",
      items: projects,
      itemHref: (slug) => `/inside-dholera/${slug}`,
    },
    {
      name: "Gallery",
      key: "gallery",
      items: [
        { name: "Photo Gallery", href: "/gallery/photo-gallery" },
        { name: "Video Gallery", href: "/gallery/video-gallery" },
      ],
    },
    {
      name: "Get In Touch",
      key: "getInTouch",
      items: [
        { name: "Call Now", href: "tel:+919211820887" },
        { name: "WhatsApp Us", href: "https://wa.me/919211820887" },
        { 
          name: "Book A Free Site Visit", 
          onClick: openContactForm 
        },
      ],
    },
  ];

  // Handlers
  const handleHeader = () => setHeader(!header);
  const handleMobileHeader = () => {
    setHeader(false);
    setActiveDropdown(null);
    setMobileActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName, e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const toggleMobileDropdown = (dropdownName, e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setMobileActiveDropdown(
      mobileActiveDropdown === dropdownName ? null : dropdownName
    );
  };

  // Data fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, subProjectsData, insideDholeraData] =
          await Promise.all([projectInfo(), getSub(), getPosts()]);

        const processProjects = (data) => {
          const available = data.filter(
            (project) =>
              !project.categories?.some((cat) => cat.title === "Sold Out")
          );
          const soldOut = data.filter((project) =>
            project.categories?.some((cat) => cat.title === "Sold Out")
          );
          return [...available, ...soldOut];
        };

        setProjects(processProjects([...projectsData, ...subProjectsData]));
        setInsideDholeraProjects(processProjects(insideDholeraData));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside handler
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen || isContactFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen, isContactFormOpen]);

  // Loading state
  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-20 shadow-xl flex justify-between items-center z-40 bg-gradient-to-r from-gray-900 to-teal-900">
        <div className="md:max-w-[1240px] m-5 flex justify-between items-center p-4">
          <div className="relative h-14 w-14 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full h-28 max-sm:h-16 text-xl shadow-xl flex justify-between items-center z-40 transition-all duration-300
        ${
          scrolled
            ? "bg-gradient-to-r from-gray-900 via-emerald-900 to-teal-900 text-emerald-100 dark:from-gray-800 dark:via-teal-900 dark:to-cyan-900"
            : "bg-transparent text-white"
        }`}
    >
      {/* Logo */}
      <div className="md:max-w-[1240px] m-5 flex justify-between items-center p-4">
        <Link href="/">
          <div className="relative h-28 max-sm:h-16 w-28 max-sm:w-16">
            <Image
              src={logo}
              alt="Logo"
              className="object-contain"
              fill
            />
          </div>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex items-center">
        {navItems.map((item) => (
          <li key={item.name} className="p-4">
            <Link
              href={item.href}
              className="font-bold hover:text-orange-500 transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}

        {dropdownItems.map((dropdown) => (
          <li key={dropdown.key} className="relative p-4 dropdown-container">
            <div
              className="flex items-center cursor-pointer dropdown-trigger"
              onClick={(e) => toggleDropdown(dropdown.key, e)}
            >
              {dropdown.href ? (
                <Link
                  href={dropdown.href}
                  className="font-bold hover:text-orange-500 transition-colors flex items-center"
                >
                  {dropdown.name}
                </Link>
              ) : (
                <span className="font-bold hover:text-orange-500 transition-colors">
                  {dropdown.name}
                </span>
              )}
              <AiOutlineDown
                className={`ml-1 transition-transform duration-200 ${
                  activeDropdown === dropdown.key ? "rotate-180" : ""
                }`}
              />
            </div>

            {activeDropdown === dropdown.key && (
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50 max-h-96 overflow-y-auto dropdown-container"
                onClick={(e) => e.stopPropagation()}
              >
                {dropdown.items.map((item) => {
                  if (item.onClick) {
                    return (
                      <button
                        key={item.name}
                        onClick={() => {
                          item.onClick();
                          setActiveDropdown(null);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-300"
                      >
                        {item.name}
                      </button>
                    );
                  }

                  const isSoldOut = item.categories?.some(
                    (cat) => cat.title === "Sold Out"
                  );
                  const href = dropdown.itemHref
                    ? dropdown.itemHref(item.slug.current)
                    : item.href;

                  return (
                    <Link
                      key={item._id || item.name}
                      href={href}
                      className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm ${
                        isSoldOut
                          ? "opacity-60 text-gray-500"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="truncate">
                          {item.title || item.name}
                        </span>
                        {isSoldOut && (
                          <span className="text-xs bg-red-500 text-white px-2 py-1 rounded ml-2">
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
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl z-50 mr-4"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-95 z-40 pt-16 overflow-y-auto transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
        style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 font-medium text-white hover:text-orange-400 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}

          {dropdownItems.map((dropdown) => (
            <div key={dropdown.key}>
              <button
                className="w-full flex justify-between items-center py-3 font-medium text-white hover:text-orange-400 transition-colors duration-200"
                onClick={() =>
                  setMobileActiveDropdown(
                    mobileActiveDropdown === dropdown.key
                      ? null
                      : dropdown.key
                  )
                }
              >
                <span>{dropdown.name}</span>
                <AiOutlineDown
                  className={`transition-transform duration-200 ${
                    mobileActiveDropdown === dropdown.key ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`ml-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileActiveDropdown === dropdown.key
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2">
                  {dropdown.items.map((item) => {
                    if (item.onClick) {
                      return (
                        <li key={item.name}>
                          <button
                            onClick={() => {
                              item.onClick();
                              setMobileActiveDropdown(null);
                            }}
                            className="block w-full text-left py-2 text-sm text-gray-200 hover:text-orange-400 transition-colors duration-200"
                          >
                            {item.name}
                          </button>
                        </li>
                      );
                    }

                    const soldOut = item.categories?.some(
                      (cat) => cat.title === "Sold Out"
                    );
                    const href = dropdown.itemHref
                      ? dropdown.itemHref(item.slug?.current)
                      : item.href;

                    return (
                      <li key={item._id || item.name}>
                        <Link
                          href={href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block py-2 text-sm ${
                            soldOut
                              ? "text-gray-400"
                              : "text-gray-200 hover:text-orange-400"
                          } transition-colors duration-200`}
                        >
                          <div className="flex justify-between items-center">
                            <span>{item.title || item.name}</span>
                            {soldOut && (
                              <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">
                                Sold Out
                              </span>
                            )}
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isContactFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
            <ContactForm onClose={closeContactForm} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;