"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "@/app/assets/icons/logo.webp";
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { getPosts, getSub, projectInfo } from "@/sanity/lib/api";
import { AnimatePresence, motion } from "framer-motion";
import ContactForm from "@/app/components/Contactform";

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

  const openContactForm = () => {
    setIsContactFormOpen(true);
    setMobileMenuOpen(false);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  // Main navigation items (visible on desktop)
  const mainNavItems = [
    { name: "Home", href: "/" },
    { name: "Inside Dholera", href: "/inside-dholera" },
    { name: "Westwyn County", href: "/projects/westwynCounty" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  // Hamburger menu items
  const hamburgerMenuItems = [
    { name: "Blog", href: "/blogs" },
    { name: "Projects", href: "/projects/westwynCounty" },
    { name: "Bulk Land", href: "/bulk-land" },
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
          onClick: openContactForm,
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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen, isContactFormOpen]);

  // Loading state
  if (loading) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 w-full h-20 backdrop-blur-lg bg-gradient-to-r from-slate-900/95 via-emerald-900/95 to-teal-900/95 border-b border-white/10 flex justify-between items-center z-50"
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="relative h-14 w-14 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full animate-pulse shadow-lg"></div>
          <div className="hidden sm:flex space-x-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-6 w-16 bg-white/20 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out
        ${
          scrolled
            ? "h-20 backdrop-blur-xl bg-gradient-to-r from-slate-900/95 via-emerald-900/95 to-teal-900/95 border-b border-white/10 shadow-2xl"
            : "h-28 max-sm:h-20 bg-transparent"
        }`}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
      
      <div className="container mx-auto px-6 h-full flex justify-between items-center relative">
        {/* Enhanced Logo */}
        <Link href="/" className="group">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className={`relative transition-all duration-300 ${
              scrolled ? "h-16 w-16" : "h-24 max-sm:h-16 w-24 max-sm:w-16"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-teal-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <Image 
              src={logo} 
              alt="Logo" 
              className="object-contain relative z-10 drop-shadow-2xl" 
              fill 
            />
          </motion.div>
        </Link>

        {/* Enhanced Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {mainNavItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Link
                href={item.href}
                className="group relative px-6 py-3 text-white/90 hover:text-white font-semibold tracking-wide transition-all duration-300"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-teal-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-teal-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
              </Link>
            </motion.div>
          ))}

          {/* Enhanced Menu Dropdown */}
          <div className="relative dropdown-container">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="dropdown-trigger group flex items-center px-6 py-3 text-white/90 hover:text-white font-semibold tracking-wide transition-all duration-300"
              onClick={(e) => toggleDropdown("hamburgerMenu", e)}
            >
              <span className="relative z-10">Menu</span>
              <motion.div
                animate={{ rotate: activeDropdown === "hamburgerMenu" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-2"
              >
                <AiOutlineDown />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-teal-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </motion.button>

            <AnimatePresence>
              {activeDropdown === "hamburgerMenu" && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full right-0 mt-4 w-72 backdrop-blur-xl bg-white/10 dark:bg-gray-900/90 border border-white/20 rounded-2xl shadow-2xl py-4 z-50 max-h-96 overflow-y-auto dropdown-container"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="absolute -top-2 right-8 w-4 h-4 bg-white/10 border-l border-t border-white/20 rotate-45"></div>
                  
                  {hamburgerMenuItems.map((item, index) => {
                    if (item.items) {
                      return (
                        <motion.div
                          key={item.key}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index, duration: 0.3 }}
                          className="border-b border-white/10 last:border-0"
                        >
                          <div className="px-6 py-3 font-semibold text-white/90 bg-gradient-to-r from-orange-500/10 to-transparent">
                            {item.name}
                          </div>
                          <div className="pl-6 pb-2">
                            {item.items.map((subItem) => {
                              if (subItem.onClick) {
                                return (
                                  <button
                                    key={subItem.name}
                                    onClick={() => {
                                      subItem.onClick();
                                      setActiveDropdown(null);
                                    }}
                                    className="block w-full text-left px-4 py-2 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-teal-500/20 text-sm text-white/80 hover:text-white transition-all duration-200 rounded-lg mx-2"
                                  >
                                    {subItem.name}
                                  </button>
                                );
                              }
                              return (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-teal-500/20 text-sm text-white/80 hover:text-white transition-all duration-200 rounded-lg mx-2"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {subItem.name}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      );
                    }
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          className="block px-6 py-3 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-teal-500/20 text-sm text-white/80 hover:text-white transition-all duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Enhanced Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="lg:hidden relative z-50 p-3 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <motion.div
            animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <AiOutlineMenu className="text-2xl" />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Enhanced Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-gradient-to-br from-slate-900/98 via-emerald-900/95 to-teal-900/98 backdrop-blur-2xl z-40 pt-24 overflow-y-auto"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl animate-pulse delay-300"></div>
            </div>

            <div className="relative px-6 py-8 space-y-2">
              {/* Main nav items in mobile */}
              {mainNavItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 px-6 text-xl font-bold text-white hover:text-orange-400 transition-all duration-300 hover:bg-white/5 rounded-xl border-l-4 border-transparent hover:border-orange-400"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Separator */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"
              ></motion.div>

              {/* Hamburger menu items in mobile */}
              {hamburgerMenuItems.map((item, index) => {
                if (item.items) {
                  return (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + 0.1 * index, duration: 0.4 }}
                      className="border border-white/10 rounded-xl overflow-hidden bg-white/5"
                    >
                      <button
                        className="w-full flex justify-between items-center py-4 px-6 font-bold text-white hover:text-orange-400 hover:bg-white/5 transition-all duration-300"
                        onClick={() =>
                          setMobileActiveDropdown(
                            mobileActiveDropdown === item.key ? null : item.key
                          )
                        }
                      >
                        <span>{item.name}</span>
                        <motion.div
                          animate={{ rotate: mobileActiveDropdown === item.key ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <AiOutlineDown />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {mobileActiveDropdown === item.key && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white/5 border-t border-white/10"
                          >
                            <ul className="py-2">
                              {item.items.map((subItem) => {
                                if (subItem.onClick) {
                                  return (
                                    <li key={subItem.name}>
                                      <button
                                        onClick={() => {
                                          subItem.onClick();
                                          setMobileActiveDropdown(null);
                                        }}
                                        className="block w-full text-left py-3 px-8 text-gray-200 hover:text-orange-400 hover:bg-white/5 transition-all duration-200"
                                      >
                                        {subItem.name}
                                      </button>
                                    </li>
                                  );
                                }
                                return (
                                  <li key={subItem.name}>
                                    <Link
                                      href={subItem.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block py-3 px-8 text-gray-200 hover:text-orange-400 hover:bg-white/5 transition-all duration-200"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + 0.1 * index, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-4 px-6 font-semibold text-white hover:text-orange-400 transition-all duration-300 hover:bg-white/5 rounded-xl border-l-4 border-transparent hover:border-teal-400"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isContactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-[1000]"
          >
            <ContactForm onClose={closeContactForm} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;