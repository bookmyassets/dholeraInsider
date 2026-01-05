import {
  getblogs,
  projectInfo,

} from "@/sanity/lib/api";
import hero from "@/app/assets/hero/sir.webp";

import Image from "next/image";
import BlogCard from "./BlogCard";
import TrendingBlogItem from "./TrendingBlog";
import Link from "next/link";
import LeadForm from "./LeadForm";


export default async function BlogsPage() {
  // Fetch data and handle potential errors
  let posts = [];
  try {
    const postsData = await projectInfo();
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

  // Fetch news for sidebar (changed from getUpdates to getnews)
  let trendingBlogs = [];
  try {
    const newsData = await getblogs();
    trendingBlogs = Array.isArray(newsData) ? newsData.slice(0, 3) : [];
    console.log("News data fetched:", trendingBlogs.length);
  } catch (error) {
    console.error("Error fetching news:", error);

  }

  return (
    <>
      {/* Hero Section with Black Background */}
      <title>About Dholera SIR – Dholera Special Investment Region in Gujarat</title>
      <meta name="title" content="" />
      <meta name="description" content="Learn about Dholera SIR and Dholera Special Investment Region—India’s smart city Gujarat project offering prime Dholera investment opportunities." />
      <meta name="keywords" content="Dholera SIR, Dholera Special Investment Region, smart city Gujarat, Dholera Smart City, Dholera investment" />
      <link rel="canonical" href="https://www.dholerainsider.com/about-dholera-sir" />
      <meta name="robots" content="index, dofollow" />

      <div className="bg-black text-white">
        <section className="relative h-[70vh]  flex items-center justify-center text-center">
          <div className="absolute inset-0">
            <Image
              src={hero}
              alt="Dholera SIR"
              className="w-full h-[70vh] object-cover "
              priority
            />
            {/* <Image
              src={herom}
              alt="Dholera SIR Aerial View"
              className="w-full h-full object-cover md:hidden"
              priority
            /> */}
            <div className="absolute inset-0 "></div>
          </div>
          
        </section>
      </div>

      {/* Main Content */}
      <div className="px-4 py-12 ">
        <div className="flex flex-col max-sm:flex-col-reverse lg:flex-row gap-8">
          
          {/* Blog Grid */}
          <div className="max-w-7xl mx-auto">
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
                  Check back soon for information about Dholera SIR investment
                  opportunities.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-[#151f28] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Dholera SIR
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to our newsletter for the latest investment opportunities
            and updates.
          </p>
          <Link
            href="/contact"
            className="bg-teal-700 hover:bg-teal-500 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
