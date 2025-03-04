import React from "react";
import building from "@/assets/images/land.webp";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { blogQuery } from "@/sanity/lib/query";
import { PortableText } from "next-sanity";
import imgbg from "@/assets/bg3.svg";

function truncateText(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

export default function Blogs({ blogs }) {
  return (
    <>
      <div className="space-y-10">
        <section className="flex flex-col w-full h-[40vh] sm:h-[50vh] md:h-[70vh] relative">
          <Image
            src={building}
            alt="bg image"
            fill
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            {/* Background Large Text */}
            <p className="text-5xl sm:text-7xl md:text-9xl font-black uppercase text-white/5">
              Blogs
            </p>

            {/* Foreground Main Text */}
            <p className="absolute text-lg sm:text-2xl md:text-4xl font-bold text-white">
              Blogs
            </p>
          </div>
        </section>
      </div>
      <div className="pt-6 sm:pt-10 px-4 relative bg-gradient-to-br from-green-700 via-green-900">
        <div className="absolute inset-0 "></div>
        <section className="relative flex flex-col justify-center items-center">
          <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white shadow-xl shadow-green-400 dark:shadow-green-900 dark:bg-gray-900 mb-6 rounded-lg overflow-hidden w-full max-w-xs sm:max-w-none"
              >
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="block object-cover w-full h-[180px] sm:h-[250px]"
                />
                <div className="p-3 sm:p-6">
                  <h3 className="text-md sm:text-lg font-semibold text-gray-900 dark:text-white">
                    {blog.title}
                  </h3>
                  <div className="mt-2 text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                    <div
                      className="whitespace-nowrap overflow-hidden text-ellipsis"
                      style={{ maxWidth: "100%" }}
                    >
                      {truncateText(
                        blog.body?.[0]?.children?.[0]?.text || "",
                        50
                      )}
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4">
                    <Link href={`/post/${blog.slug?.current}`} passHref>
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
    </>
  );
}

export async function getServerSideProps() {
  const blogs = await client.fetch(blogQuery);
  return { props: { blogs } };
}
