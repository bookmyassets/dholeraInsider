"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { getblogs } from "@/sanity/lib/api";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const BrowseBlogsSection = () => {
  const [blogs, setblogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchblogs = async () => {
      try {
        const fetchedblogs = await getblogs();
        console.log("Fetched blogs:", fetchedblogs); // Debug log
        console.log("Number of blogs:", fetchedblogs?.length); // Debug log
        setblogs(fetchedblogs || []); // Ensure it's always an array
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchblogs();
  }, []);

  if (loading) {
    return (
      <section className="py-12 md:py-24 px-6 md:px-36" style={{ minHeight: "60vh" }}>
        <div className="container">
          <div className="flex justify-center items-center" style={{ minHeight: "40vh" }}>
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-teal-200 border-t-teal-700 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-lg text-teal-700">Loading blogs...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Show error state if there's an error
  if (error) {
    return (
      <section className="py-12 md:py-24 px-6 md:px-36 bg-gray-50">
        <div className="container mx-auto text-center">
          <p className="text-red-600">Error loading blogs: {error}</p>
        </div>
      </section>
    );
  }

  // Show only 3 blogs for the featured section
  const featuredblogs = blogs.slice(0, 3);

  return (
    <section className="py-12 md:py-24 px-6 md:px-36 bg-gray-50">
      <div className="container mx-auto">
        <div className="w-full px-2 mb-10 text-center">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3 relative inline-block pb-2 text-teal-950">
            Featured blogs
            <span className="absolute bottom-0 left-1/4 right-1/4 h-1 rounded-full bg-teal-700"></span>
          </h1>
          <p className="text-sm md:text-base max-w-2xl mx-auto text-gray-600 mt-4">
            Handpicked reads to stay ahead with Expert views on Dholera
          </p>
        </div>

        {featuredblogs.length > 0 ? (
          <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredblogs.map((blog) => (
              <div
                key={blog._id}
                className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 bg-white"
              >
                <div className="relative h-64">
                  {blog.mainImage && (
                    <Image
                      src={urlFor(blog.mainImage).width(600).height(400).url()}
                      alt={blog.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 to-transparent flex items-end opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="p-4 text-white w-full">
                      <h3 className="text-xl font-bold mb-1">{blog.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3 text-teal-950">{blog.title}</h3>
                  <div className="text-sm mb-4 line-clamp-2 text-gray-600">
                    <PortableText value={blog.body} />
                  </div>
                  <Link href={`/dholera-sir-blogs/${blog.slug?.current}`} passHref>
                    <button className="w-full px-4 py-2 text-white bg-teal-700 hover:bg-teal-800 transition-colors duration-300 rounded-md">
                      View blog
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No blogs available at the moment.</p>
            <p className="text-gray-500 text-sm mt-2">Check back soon for new content!</p>
          </div>
        )}

        {blogs.length > 3 && (
          <div className="mt-10 flex justify-center">
            <Link href="/post/blogs">
              <button className="px-6 py-3 text-white bg-teal-950 hover:bg-teal-900 rounded-md transition-all hover:scale-105 shadow-lg shadow-teal-700/30">
                Browse More blogs
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseBlogsSection;