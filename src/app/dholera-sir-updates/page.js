import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroD from "../assets/hero/diBlogs.png";
import heroM from "../assets/hero/blogMhero.webp";
import { getblogs } from "@/sanity/lib/api";
import { urlFor } from "@/sanity/lib/image";
import CommonForm from "../components/CommonForm";

export default async function Blogs() {
  const blogs = await getblogs();

  return (
    <>
      {/* Hero Section */}
      <section className="w-full h-[50vh] relative" aria-label="Dholera Blogs Hero">
        <div className="relative w-full h-full">
          <Image
            src={heroD}
            alt="Dholera blogs hero background"
            fill
            sizes="100vw"
            className="object-cover max-sm:hidden"
            priority
          />
          <Image
            src={heroM}
            alt="Dholera blogs mobile hero background"
            fill
            sizes="100vw"
            className="object-cover md:hidden"
            priority
          />
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
            {/* Background Large Text */}
            <h1 
              className="text-5xl sm:text-7xl md:text-9xl font-black uppercase text-white/10 select-none"
              aria-hidden="true"
            >
              Dholera Latest Updates
            </h1>

            {/* Foreground Main Text */}
            <h2 className="absolute text-lg sm:text-2xl md:text-4xl font-bold text-white">
              Dholera Latest Updates
            </h2>
          </div>
        </div>
      </section>

      {/* Blogs Grid Section */}
      <section className="pt-6 sm:pt-10 px-4 relative bg-gradient-to-br from-green-700 via-green-900 pb-4">
        <div className="absolute inset-0"></div>
        
        <div className="relative flex flex-col justify-center items-center">
          <div className="max-w-7xl w-full">
            {blogs?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {blogs.map((blog) => (
                  <BlogCard key={blog._id} blog={blog} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-white text-lg">No blogs available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <CommonForm title="Secure Your Investment In India's First GreenField SmartCity" />
    </>
  );
}

// Separate BlogCard component for better organization and reusability
function BlogCard({ blog }) {
  const imageUrl = blog?.mainImage ? urlFor(blog.mainImage).url() : null;
  const blogSlug = blog?.slug?.current;

  if (!blog || !blogSlug) {
    return null;
  }

  return (
    <article className="bg-white shadow-xl shadow-green-400 dark:shadow-green-900 dark:bg-gray-900 mb-6 rounded-lg overflow-hidden w-full max-w-xs sm:max-w-none transition-transform hover:scale-105 duration-300">
      {/* Blog Image */}
      <div className="relative w-full h-[180px] sm:h-[250px] bg-gray-200 dark:bg-gray-700">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={blog.title || 'Blog post image'}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300 dark:bg-gray-600">
            <span className="text-gray-500 dark:text-gray-400">No Image</span>
          </div>
        )}
      </div>

      {/* Blog Content */}
      <div className="p-3 sm:p-6">
        <h3 className="text-md sm:text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 mb-3">
          {blog.title || 'Untitled Blog Post'}
        </h3>

        {/* Read More Button */}
        <div className="mt-3 sm:mt-4">
          <Link 
            href={`/blogs/${blogSlug}`} 
            className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-sm sm:text-base"
            aria-label={`Read more about ${blog.title}`}
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}