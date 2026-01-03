import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroD from "../assets/hero/latest-updates-dholera-insider.webp";
import heroM from "../assets/hero/blogMhero.webp";
import { getUpdates, projectInfo } from "@/sanity/lib/api";
import { urlFor } from "@/sanity/lib/image";
import CommonForm from "../components/CommonForm";
import LeadForm from "../about-dholera-sir/LeadForm";
import TrendingBlogItem from "./TrendingBlog";
import BlogCard from "./BlogCard";

export default async function Blogs() {
  let fetchError = null;
  let trendingBlogs = [];
  
  try {
    const newsData = await projectInfo();
    trendingBlogs = Array.isArray(newsData) ? newsData.slice(0, 3) : [];
    console.log("News data fetched:", trendingBlogs.length);
  } catch (error) {
    console.error("Error fetching news:", error);
    fetchError = error;
  }

  let blogs = [];
  try {
    const blogsData = await getUpdates();
    blogs = Array.isArray(blogsData) ? blogsData : [];
    console.log("Blogs data fetched:", blogs.length);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    fetchError = error;
  }

  // Add error handling for blog data
  const safeBlogs = blogs.map((blog) => ({
    ...blog,
    author: blog.author || "Dholera Insider",
    mainImage: blog.mainImage || null,
    slug: blog.slug?.current
      ? { current: blog.slug.current }
      : { current: "#" },
  }));

  return (
    <>
      <title>
        Dholera Latest Updates - News & Insights on Dholera SIR
      </title>
      <meta
        name="title"
        content="Dholera Latest Updates - News & Insights on Dholera SIR"
      />
      <meta
        name="description"
        content="Stay updated with the latest Dholera news and smart city updates covering Dholera real estate and Dholera investment trends."
      />
      <meta
        name="keywords"
        content="Dholera updates, Dholera news, Dholera real estate, smart city updates, Dholera investment"
      />
      <link
        rel="canonical"
        href="https://www.dholerainsider.com/dholera-sir-updates"
      />
      
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Enhanced Hero Section - Responsive Height */}
        <div className="relative min-h-[78vh] flex items-center justify-center py-8">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src={heroD}
              alt="Dholera Latest Updates"
              fill
              className="object-cover max-sm:hidden"
              priority
            />
            <Image
              src={heroM}
              alt="Dholera Latest Updates Mobile"
              fill
              className="object-cover sm:hidden"
              priority
            />
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">
            <div className="mb-6 sm:mb-8 pt-20 sm:pt-24 md:pt-12 flex flex-col justify-center items-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Dholera SIR
                <span className="block bg-teal-500 bg-clip-text text-transparent">
                  Latest Updates
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
                Stay informed with the latest developments, project updates, and news from India's most ambitious smart city.
              </p>
            </div>

            {/* Form Component - Responsive */}
            
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="relative z-10">
          <div className="px-4 py-12">
            {safeBlogs.length > 0 ? (
              <>
                {/* All Posts Grid */}
                <div>
                  <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Latest News & Updates
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                      Stay updated with the latest developments and news from Dholera SIR
                    </p>
                    <div className="mt-2 text-sm text-gray-500">
                      {safeBlogs.length} Update
                      {safeBlogs.length !== 1 ? "s" : ""} Available
                    </div>
                  </div>
                  
                  <div className="px-4">
                    <div className="flex flex-col max-sm:flex-col-reverse lg:flex-row gap-8">
                      {/* Trending Section - Left Sidebar */}
                      <div className="lg:w-1/4">
                        <div className="sticky top-24 space-y-8">
                          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-950">
                            <LeadForm
                              title="Own Registry-Ready Plot under ₹10 Lakhs"
                              buttonName="Get A Call Back"
                            />
                          </div>
                          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-950">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                              Latest News on Dholera
                            </h2>
                            {trendingBlogs.length > 0 ? (
                              <div className="space-y-6">
                                {trendingBlogs.map((blog) => (
                                  <TrendingBlogItem
                                    key={blog._id}
                                    post={blog}
                                  />
                                ))}
                              </div>
                            ) : (
                              <p className="text-gray-500">
                                No news available at the moment.
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Blog Grid */}
                      <div className="lg:w-3/4">
                        {safeBlogs.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {safeBlogs.map((blog) => (
                              <BlogCard key={blog._id} blog={blog} />
                            ))}
                          </div>
                        ) : (
                          <div className="bg-white p-8 rounded-xl shadow-md text-center">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                              No Updates Available
                            </h3>
                            <p className="text-gray-600">
                              Check back soon for the latest information about Dholera SIR.
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
                        Unable to Load Updates
                      </h3>
                      <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4">
                        We're experiencing some technical difficulties loading
                        the updates. Please try refreshing the page or contact
                        support if the issue persists.
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">
                        📰
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                        Latest Updates Coming Soon!
                      </h3>
                      <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4">
                        We're preparing the latest news and updates about
                        Dholera SIR developments. Stay tuned!
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

      {/* Common Form at the bottom */}
      <CommonForm title="Secure Your Investment In India's First GreenField SmartCity" />
    </>
  );
}
