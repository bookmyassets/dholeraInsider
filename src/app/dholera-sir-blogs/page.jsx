import { getblogs, projectInfo } from "@/sanity/lib/api";
import React from "react";
import BlogCard from "./BlogCard";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import FormComponent from "./FormComponent";
import hero from "@/app/assets/hero/dholerasir.webp";

export default async function page() {
  let posts = [];
  let fetchError = null;

  try {
    const postsData = await getblogs();
    posts = Array.isArray(postsData) ? postsData : [];
    console.log("Posts data fetched:", posts.length);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    fetchError = error;
  }

  const safePosts = posts.map((post) => ({
    ...post,
    author:
      typeof post.author === "object" && post.author?.name
        ? post.author.name
        : typeof post.author === "string"
          ? post.author
          : "Dholera Insider",
    authorImage:
      typeof post.author === "object" && post.author?.image
        ? post.author.image
        : null,
    mainImage: post.mainImage || null,
    slug: post.slug?.current
      ? { current: post.slug.current }
      : { current: "#" },
  }));

  return (
    <>
      <title>Dholera Blog | Investment Tips, News & Smart City Insights</title>
      <meta
        name="description"
        content="Stay ahead in Dholera SIR investments! Read expert blogs on development, market trends, and project reviews, all curated by Dholera Insider for you."
      />
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Enhanced Hero Section - Responsive Height */}
        <div className="relative min-h-[70vh] flex items-center justify-center py-8">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0 ">
            <Image
              src={hero}
              alt="Dholera SIR Development"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 b"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">
            <div className="mb-6 sm:mb-8 pt-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Dholera SIR
                <span className="block bg-teal-500 bg-clip-text text-transparent">
                  Investment Blog
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base  text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
                Uncover market insights, project updates, and early opportunities in India’s most ambitious smart city.
              </p>
            </div>

            {/* Form Component - Responsive */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-2 sm:px-4">
              <div className="transform scale-90 sm:scale-95 md:scale-100">
                <FormComponent />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
            {safePosts.length > 0 ? (
              <>
                {/* All Posts Grid */}
                <div>
                  <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Latest Investment Insights
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                      Stay updated with expert analysis and market trends from
                      Dholera SIR
                    </p>
                    <div className="mt-2 text-sm text-gray-500">
                      {safePosts.length} Article
                      {safePosts.length !== 1 ? "s" : ""} Available
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {safePosts.map((post, index) => (
                      <div
                        key={post._id}
                        className="transform hover:-translate-y-2 transition-all duration-300"
                      >
                        <BlogCard post={post} />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-12 sm:py-20">
                <div className="bg-white/95 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-xl max-w-2xl mx-auto border border-gray-200">
                  {fetchError ? (
                    <>
                      <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">⚠️</div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                        Unable to Load Blogs
                      </h3>
                      <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4">
                        We're experiencing some technical difficulties loading
                        the blog posts. Please try refreshing the page or
                        contact support if the issue persists.
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">📝</div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                        Expert Content Coming Soon!
                      </h3>
                      <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4">
                        We're preparing comprehensive investment guides, market
                        analysis, and expert insights about Dholera SIR
                        opportunities. Stay tuned!
                      </p>
                    </>
                  )}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                    <button className="bg-gradient-to-r from-orange-500 to-green-600 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base">
                      Get Notified
                    </button>
                    <button className="border-2 border-orange-500 text-orange-600 px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm sm:text-base">
                      Explore Projects
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}