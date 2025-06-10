import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { getblogs, getUpdates, getPostBySlug } from "@/sanity/lib/api";
import Link from "next/link";
import Image from "next/image";
import CostSheet from "@/app/components/costSheet";

export default async function Post({ params }) {
  const { slug } = params;

  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  try {
    const [post, trendingBlogs, relatedBlogs] = await Promise.all([
      getPostBySlug(slug),
      getblogs(0, 6),
      getUpdates(slug, 4),
    ]);

    if (!post) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Blog post not found</h1>
            <Link
              href="/all-projects"
              className="mt-4 inline-block text-[#C69C21] hover:text-[#FDB913]"
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      );
    }

    const components = {
      types: {
        
        image: ({ value }) => {
          if (!value?.asset?._ref) {
            return null;
          }
          return (
            <figure className="my-12">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  alt={value.alt || "Blog image"}
                  src={urlFor(value).width(1200).url()}
                  width={1200}
                  height={600}
                  className="w-full md:h-[55vh] rounded-2xl hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              {value.caption && (
                <figcaption className="mt-4 text-center text-sm italic text-gray-500 dark:text-gray-400">
                  {value.caption}
                </figcaption>
              )}
            </figure>
          );
        },
        table: ({ value }) => {
          if (!value?.rows || !Array.isArray(value.rows)) {
            return null;
          }
          return (
            <div className="overflow-x-auto my-12 rounded-2xl shadow-lg">
              <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
                <tbody>
                  {value.rows.map((row, i) => {
                    if (!row?.cells || !Array.isArray(row.cells)) {
                      return null;
                    }
                    return (
                      <tr
                        key={i}
                        className={
                          i % 2 === 0
                            ? "bg-gray-50 dark:bg-gray-800"
                            : "bg-white dark:bg-gray-900"
                        }
                      >
                        {row.cells.map((cell, j) => (
                          <td
                            key={j}
                            className="px-6 py-4 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                          >
                            {cell || ""}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        },
        code: ({ value }) => (
          <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-6 overflow-x-auto">
              <code className="font-mono text-sm leading-relaxed">{value.code}</code>
            </pre>
          </div>
        ),
      },
      marks: {
        link: ({ children, value }) => {
          return (
            <Link
              href={value.href}
              rel="noopener noreferrer"
              className="text-[#C69C21] hover:text-[#FDB913] underline decoration-[#FDB913]/30 hover:decoration-[#FDB913] transition-all duration-200 font-medium"
            >
              {children}
            </Link>
          );
        },
        strong: ({ children }) => (
          <strong className="font-bold text-gray-900 dark:text-white">
            {children}
          </strong>
        ),
        em: ({ children }) => (
          <em className="italic text-gray-800 dark:text-gray-200">
            {children}
          </em>
        ),
        underline: ({ children }) => (
          <u className="underline decoration-gray-400 dark:decoration-gray-600">
            {children}
          </u>
        ),
        code: ({ children }) => (
          <code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md text-sm text-gray-800 dark:text-gray-200">
            {children}
          </code>
        ),
        "strike-through": ({ children }) => (
          <del className="line-through text-gray-500 dark:text-gray-400">
            {children}
          </del>
        ),
        textColor: ({ children, value }) => (
          <span style={{ color: value?.color || "inherit" }}>{children}</span>
        ),
        textBackground: ({ children, value }) => (
          <span 
            style={{ backgroundColor: value?.color || "transparent" }}
            className="px-1 py-0.5 rounded"
          >
            {children}
          </span>
        ),
        button: ({ children, value }) => {
          const getButtonClasses = () => {
            switch (value.style) {
              case "secondary":
                return "bg-gray-600 hover:bg-gray-700 text-white";
              case "outline":
                return "bg-transparent border-2 border-[#C69C21] text-[#C69C21] hover:bg-[#C69C21] hover:text-white";
              default:
                return "bg-[#C69C21] hover:bg-[#FDB913] text-white";
            }
          };
          return (
            <Link
              href={value.href}
              className={`inline-block px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${getButtonClasses()}`}
            >
              {value.text || children}
            </Link>
          );
        },
      },
      block: {
        h1: ({ children }) => (
          <h1 className="text-5xl font-bold mt-16 mb-8 text-gray-900 dark:text-white leading-tight">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-4xl font-bold mt-14 mb-6 text-gray-800 dark:text-white border-b-2 border-[#C69C21] pb-3 leading-tight">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-3xl font-bold mt-12 mb-5 text-gray-800 dark:text-white leading-tight">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-white leading-tight">
            {children}
          </h4>
        ),
        h5: ({ children }) => (
          <h5 className="text-xl font-semibold mt-8 mb-3 text-gray-800 dark:text-white leading-tight">
            {children}
          </h5>
        ),
        h6: ({ children }) => (
          <h6 className="text-lg font-semibold mt-6 mb-2 text-gray-800 dark:text-white leading-tight">
            {children}
          </h6>
        ),
        normal: ({ children }) => (
          <p className="mb-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            {children}
          </p>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-[#C69C21] pl-8 my-12 italic text-xl text-gray-700 dark:text-gray-300 py-6 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent rounded-r-2xl">
            {children}
          </blockquote>
        ),
        small: ({ children }) => (
          <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed text-base">
            {children}
          </p>
        ),
      },
      list: {
        bullet: ({ children }) => (
          <ul className="list-none pl-0 mb-8 space-y-3 text-gray-700 dark:text-gray-300">
            {children}
          </ul>
        ),
        number: ({ children }) => (
          <ol className="list-none pl-0 mb-8 space-y-3 text-gray-700 dark:text-gray-300 counter-reset-list">
            {children}
          </ol>
        ),
      },
      listItem: {
        bullet: ({ children }) => (
          <li className="text-lg leading-relaxed flex items-start">
            <span className="inline-block w-2 h-2 bg-[#C69C21] rounded-full mt-3 mr-4 flex-shrink-0"></span>
            <span>{children}</span>
          </li>
        ),
        number: ({ children }) => (
          <li className="text-lg leading-relaxed flex items-start counter-increment-list">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-[#C69C21] text-white rounded-full text-sm font-bold mr-4 flex-shrink-0 mt-1">
              <span className="counter-content"></span>
            </span>
            <span>{children}</span>
          </li>
        ),
      },
    };

    return (
      <>
        {/* Enhanced Hero Header */}
        <div className="relative h-[70vh] w-full shadow-2xl mb-16 overflow-hidden">
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).width(1920).url()}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover border-b-4 object-center"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 pb-20">
            <div className="max-w-4xl">
              <div className="mb-6">
                <span className="inline-block bg-[#C69C21] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Featured Article
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
                {post.title}
              </h1>
              {post.publishedAt && (
                <div className="flex items-center justify-center gap-4 text-gray-200 text-lg">
                  <time className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                  <span>•</span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    5 min read
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
              
        {/* Main Content Container */}
        <div className="max-w-6xl  shadow-2xl rounded-2xl pb-4 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Content */}
          <article className="prose prose-xl max-w-none dark:prose-invert prose-headings:font-serif prose-a:text-[#C69C21] prose-blockquote:border-[#C69C21]">
            <PortableText value={post.body} components={components} />
          </article>
          <CostSheet />
        </div>

        {/* Related Posts Section */}
        {relatedBlogs && relatedBlogs.length > 0 && (
          <div className="bg-gray-50 dark:bg-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="inline-block bg-[#C69C21] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
                  Keep Reading
                </span>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  You Might Also Like
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Discover more insights and stories that complement your interests
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {relatedBlogs.map((blog) => (
                  <Link
                    key={blog._id}
                    href={`/blogs/${blog.slug.current}`}
                    className="group block"
                  >
                    <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform group-hover:-translate-y-2">
                      {blog.mainImage && (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={urlFor(blog.mainImage).width(400).height(200).url()}
                            alt={blog.title}
                            width={400}
                            height={200}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      )}
                      <div className="p-6">
                        <time className="text-sm text-[#C69C21] font-semibold uppercase tracking-wide">
                          {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                        <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-[#C69C21] transition-colors duration-200 line-clamp-2 text-lg mt-2 leading-tight">
                          {blog.title}
                        </h3>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Trending Posts Section */}
        {trendingBlogs && trendingBlogs.length > 0 && (
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="inline-block bg-gradient-to-r from-[#C69C21] to-[#FDB913] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
                  Trending Now
                </span>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Most Popular Articles
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  See what everyone's reading this week
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trendingBlogs.slice(0, 6).map((blog, index) => (
                  <Link
                    key={blog._id}
                    href={`/blogs/${blog.slug.current}`}
                    className="group block"
                  >
                    <article className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform group-hover:-translate-y-1">
                      <div className="absolute top-4 left-4 z-10">
                        <div className="bg-[#C69C21] text-white text-sm rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                      {blog.mainImage && (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={urlFor(blog.mainImage).width(400).height(200).url()}
                            alt={blog.title}
                            width={400}
                            height={200}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-[#C69C21] transition-colors duration-200 line-clamp-2 text-lg leading-tight">
                          {blog.title}
                        </h3>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Final CTA Section */}
        <div className="bg-[#ad975e] py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="inline-block p-4 bg-white/20 rounded-full mb-8">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Ready for More Insights?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Join thousands of readers who trust us for the latest industry insights, market analysis, and investment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
              <Link
                href="/insider-dholera"
                className="bg-white text-[#C69C21] font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore Dholera
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-[#C69C21] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Error loading blog post</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Please try again later
          </p>
          <Link
            href="/blogs"
            className="mt-4 inline-block text-[#C69C21] hover:text-[#FDB913]"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }
}