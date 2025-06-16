import React from "react";
import Image from "next/image";
import Link from "next/link";

import { PortableText } from "next-sanity";
import heroD from "../assets/hero/diBlogs.webp"
import { getblogs } from "@/sanity/lib/api";
import { urlFor } from "@/sanity/lib/image";
import CommonForm from "../components/CommonForm";

export default async function Blogs() {

    const blogs = await getblogs();

  return (
    <>
<div>
        {/* Hero Section */}
        <section className="flex flex-col w-full sm:h-[50vh] h-[50vh] relative">
          <Image
            src={heroD}
            alt="bg image"
            width={1800}
            height={700}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            {/* Background Large Text */}
            <p className="text-5xl sm:text-7xl md:text-9xl font-black uppercase text-white/10">
              Dholera Blogs
            </p>

            {/* Foreground Main Text */}
            <p className="absolute text-lg sm:text-2xl md:text-4xl font-bold text-white">
              Dholera Blogs
            </p>
          </div>
        </section>
      </div>
      <div className="pt-6 sm:pt-10 px-4 relative bg-gradient-to-br from-green-700 via-green-900 pb-4">
        <div className="absolute inset-0 "></div>
        <section className="relative flex flex-col justify-center items-center">
          <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white shadow-xl shadow-green-400 dark:shadow-green-900 dark:bg-gray-900 mb-6 rounded-lg overflow-hidden w-full max-w-xs sm:max-w-none"
              >
                <Image
                  src={urlFor(blog.mainImage).url()}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="block object-cover w-full h-[180px] sm:h-[250px]"
                />
                <div className="p-3 sm:p-6">
                  <h3 className="text-md sm:text-lg font-semibold text-gray-900 dark:text-white">
                    {blog.title}
                  </h3>
                  {/* <div className="mt-2 text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                    <div
                      className="whitespace-nowrap overflow-hidden text-ellipsis"
                      style={{ maxWidth: "100%" }}
                    >
                      {truncateText(
                        blog.body?.[0]?.children?.[0]?.text || "",
                        50
                      )}
                    </div>
                  </div> */}
                  <div className="mt-3 sm:mt-4">
                    <Link href={`/blogs/${blog.slug?.current}`} passHref>
                      <button className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
        <CommonForm title="Secure Your Investment In India's First GreenField SmartCity"/>
    </>
  );
}
