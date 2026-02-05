import { getblogs, getUpdates, projectInfo } from "@/sanity/lib/api";
import React from "react";
import BlogCard from "./BlogCard";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import FormComponent from "./FormComponent";
import hero from "@/app/assets/hero/dholerasir.webp";
import LeadForm from "../about-dholera-sir/LeadForm";
import TrendingBlogItem from "./TrendingBlog";

export default async function page() {
  let fetchError = null;

  let trendingBlogs = [];
  try {
    const newsData = await getUpdates();
    trendingBlogs = Array.isArray(newsData) ? newsData.slice(0, 3) : [];
    console.log("News data fetched:", trendingBlogs.length);
  } catch (error) {
    console.error("Error fetching news:", error);
    // Fallback to getUpdates if getnews fails
    try {
      const updatesData = await getUpdates();
      trendingBlogs = Array.isArray(updatesData) ? updatesData.slice(0, 5) : [];
      console.log("Fallback to updates data:", trendingBlogs.length);
    } catch (fallbackError) {
      console.error("Error fetching updates as fallback:", fallbackError);
    }
  }

  let posts = [];
  try {
    const postsData = await getblogs();
    // Check if postsData is an array
    posts = Array.isArray(postsData) ? postsData : [];
    console.log("Posts data fetched:", posts.length);
  } catch (error) {
    console.error("Error fetching project info:", error);
  }

  // Add error handling for post data
  const safePosts = posts.map((post) => ({
    ...post,
    author: post.author || "Dholera Insider",
    mainImage: post.mainImage || null,
    slug: post.slug?.current
      ? { current: post.slug.current }
      : { current: "#" },
  }));

  return (
    <>
      <title>
        Dholera Insider Blog – News & Insights on Dholera Real Estate
      </title>
      <meta
        name="title"
        content="Dholera Insider Blog – News & Insights on Dholera Real Estate"
      />
      <meta
        name="description"
        content="Stay updated with the latest Dholera news and smart city updates covering Dholera real estate and Dholera investment trends."
      />
      <meta
        name="keywords"
        content="Dholera blog, Dholera news, Dholera real estate, smart city updates, Dholera investment"
      />
      <link
        rel="canonical"
        href="https://www.dholerainsider.com/dholera-sir-blogs"
      />
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Enhanced Hero Section - Responsive Height */}
        <div className="relative min-h-[50vh] md:min-h-[55vh] flex items-center justify-center py-8 sm:py-12">
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
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">
            <div className="mb-6 sm:mb-8 ">
              <h1 className="text-2xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Dholera SIR
                <span className="block bg-white bg-clip-text text-transparent">
                  Investment Blog
                </span>
              </h1>
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
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                      Latest Investment Insights
                    </h2>
                    <div className="mt-2 text-sm text-gray-500">
                      {safePosts.length} Article
                      {safePosts.length !== 1 ? "s" : ""} Available
                    </div>
                  </div>
                  <div className="px-4 ">
                    <div className="flex flex-col max-sm:flex-col-reverse lg:flex-row gap-8">
                      {/* Blog Grid */}
                      <div className=" max-w-7xl mx-auto">
                        {safePosts.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {safePosts.map((post) => (
                              <BlogCard key={post._id} post={post} />
                            ))}
                          </div>
                        ) : (
                          <div className="bg-white p-8 rounded-xl shadow-md text-center">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                              No Blog Posts Available
                            </h3>
                            <p className="text-gray-600">
                              Check back soon for information about Dholera SIR
                              investment opportunities.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-12 sm:py-20">
                <div className="bg-white/95 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-xl max-w-2xl mx-auto border border-gray-200">
                  {fetchError ? (
                    <>
                      <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">
                        ⚠️
                      </div>
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
                      <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">
                        📝
                      </div>
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
