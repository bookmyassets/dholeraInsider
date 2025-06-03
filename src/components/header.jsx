import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import logo from "../../src/assets/icons/logo.webp";
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from 'react-icons/ai';
import ThemeChanger from './themeChanger';

const Header = () => {
  const [header, setHeader] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [getInTouchDropdown, setGetInTouchDropdown] = useState(false);
  const [galleryDropdown, setGalleryDropdown] = useState(false);

  const handleHeader = () => {
    setHeader(!header);
  };

  const handleMobileHeader = () => {
    setHeader(false);
    setGetInTouchDropdown(false);
    setGalleryDropdown(false);
  };

  const toggleGetInTouchDropdown = () => {
    setGetInTouchDropdown(!getInTouchDropdown);
    setGalleryDropdown(false); // Close other dropdown
  };

  const toggleGalleryDropdown = () => {
    setGalleryDropdown(!galleryDropdown);
    setGetInTouchDropdown(false); // Close other dropdown
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 250) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setGetInTouchDropdown(false);
      setGalleryDropdown(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-20 shadow-xl flex justify-between items-center z-40 ease-in duration-300 
        ${scrolled ? 'bg-green-400 dark:bg-[#0a5307]' : 'bg-transparent'}`}
    >
      {/* Logo */}
      <div className="md:max-w-[1240px] m-5 flex justify-between items-center p-4">
        <Link href="/">
          <Image src={logo} className="h-14 w-14" alt="Logo" />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="hidden sm:flex">
       
      </div>

      {/* Navbar Links */}
      <ul className="text-sm font-bold hidden sm:flex text-white">
        <li className="p-4 hover:text-orange-500">
          <Link href="/">Home</Link>
        </li>
        <li className="p-4 hover:text-orange-500">
          <Link href="/about-us">About</Link>
        </li>
        <li className="p-4 hover:text-orange-500">
          <Link href="/all-project">Projects</Link>
        </li>
        <li className="p-4 hover:text-orange-500">
          <Link href="/all-blog">Blogs</Link>
        </li>
        <li className="p-4 hover:text-orange-500">
          <Link href="/inside-dholera">Inside Dholera</Link>
        </li>
        
        {/* Gallery Dropdown */}
        <li className="relative p-4 hover:text-orange-500">
          <div 
            className="flex items-center cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleGalleryDropdown();
            }}
          >
            Gallery
            <AiOutlineDown className={`ml-1 transition-transform duration-200 ${galleryDropdown ? 'rotate-180' : ''}`} />
          </div>
          
          {galleryDropdown && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50">
              <Link href="/gallery/photos" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                Photo Gallery
              </Link>
              <Link href="/gallery/videos" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                Video Gallery
              </Link>
              
            </div>
          )}
        </li>
      </ul>

      {/* Get In Touch Dropdown */}
      <div className="hidden sm:flex relative">
        <div 
          className="text-sm font-bold ml-10 mr-5 hover:text-orange-500 cursor-pointer text-white flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            toggleGetInTouchDropdown();
          }}
        >
          Get In Touch
          <AiOutlineDown className={`ml-1 transition-transform duration-200 ${getInTouchDropdown ? 'rotate-180' : ''}`} />
        </div>
        
        {getInTouchDropdown && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50">
            <a href="tel:+918130371647" className="block text-2xl hover:text-orange-500" onClick={handleMobileHeader}>
                  Call Now
                </a>
                <a hrhref="https://wa.me/918130371647" className="block text-2xl hover:text-orange-500" onClick={handleMobileHeader}>
                  WhatsApp Us
                </a>
                <a href="/callback" className="block text-2xl hover:text-orange-500" onClick={handleMobileHeader}>
                  Book A Free Site Visit
                </a>
          </div>
        )}
      </div>

      <div className="mr-10">
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
        className={`sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 
        ${header ? 'bg-[#020308ea]' : 'left-[-100%]'}`}
      >
        <ul className="text-sm font-bold text-white">
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="/" onClick={handleMobileHeader}>
              Home
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="/about-us" onClick={handleMobileHeader}>
              About
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="/all-project" onClick={handleMobileHeader}>
              Projects
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="/all-blog" onClick={handleMobileHeader}>
              Blogs
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="/inside-dholera" onClick={handleMobileHeader}>
              Inside Dholera
            </Link>
          </li>
          
          {/* Mobile Gallery Dropdown */}
          <li className="mx-7 py-4 text-4xl">
            <div 
              className="hover:text-orange-500 cursor-pointer flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setGalleryDropdown(!galleryDropdown);
              }}
            >
              Gallery
              <AiOutlineDown className={`ml-2 transition-transform duration-200 ${galleryDropdown ? 'rotate-180' : ''}`} />
            </div>
            {galleryDropdown && (
              <div className="mt-4 space-y-2">
                <Link href="/gallery/photos" className="block text-2xl hover:text-orange-500" onClick={handleMobileHeader}>
                  Photo Gallery
                </Link>
                <Link href="/gallery/videos" className="block text-2xl hover:text-orange-500" onClick={handleMobileHeader}>
                  Video Gallery
                </Link>
              </div>
            )}
          </li>

          {/* Mobile Get In Touch Dropdown */}
          <li className="mx-7 py-4 text-4xl">
            <div 
              className="hover:text-orange-500 cursor-pointer flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setGetInTouchDropdown(!getInTouchDropdown);
              }}
            >
              Get In Touch
              <AiOutlineDown className={`ml-2 transition-transform duration-200 ${getInTouchDropdown ? 'rotate-180' : ''}`} />
            </div>
            {getInTouchDropdown && (
              <div className="mt-4 space-y-2">
                <a href="tel:+918130371647" className="block text-2xl hover:text-orange-500" onClick={handleMobileHeader}>
                  Call Now
                </a>
                <a hrhref="https://wa.me/918130371647" className="block text-2xl hover:text-orange-500" onClick={handleMobileHeader}>
                  WhatsApp Us
                </a>
                <a href="/callback" className="block text-2xl hover:text-orange-500" onClick={handleMobileHeader}>
                  Book A Free Site Visit
                </a>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;