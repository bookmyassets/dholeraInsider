import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { getblogs, getPostBySlug } from "@/sanity/lib/api";
import Link from "next/link";
import Image from "next/image";
import CommonForm from "@/app/components/CommonForm";

export default async function Post({ params }) {
  const { slug } = await params;

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
      getblogs(0, 4), // Get only 4 blogs
      /* getUpdates(slug, 3), */
    ]);

    if (!post) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Blog post not found</h1>
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

     const components = {
      types: {
        image: ({ value }) => {
          if (!value?.asset) return null;

          // Use the asset URL directly if urlFor is not working
          const imageUrl = value.asset.url || urlFor(value).width(1200).url();

          const imageNode = (
            <img
              src={imageUrl}
              alt={value.alt || ""}
              className="w-full rounded-lg my-6"
              loading="lazy"
            />
          );

          return (
            <figure className="my-6">
              {value.url ? (
                <a
                  href={value.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {imageNode}
                </a>
              ) : (
                imageNode
              )}
              {value.caption && (
                <figcaption className="text-center text-sm text-gray-500 mt-2">
                  {value.caption}
                </figcaption>
              )}
            </figure>
          );
        },

        // Fixed table component
        table: ({ value }) => {
          if (!value?.rows || !Array.isArray(value.rows)) {
            return null;
          }

          return (
            <div className="overflow-x-auto my-8">
              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                <tbody>
                  {value.rows.map((row, i) => {
                    if (!row?.cells || !Array.isArray(row.cells)) {
                      return null;
                    }

                    return (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        {row.cells.map((cell, j) => (
                          <td
                            key={j}
                            className="px-4 py-3 border border-gray-200 text-gray-700"
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
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
            <code className="font-mono text-sm">{value.code}</code>
          </pre>
        ),
      },

      marks: {
        link: ({ children, value }) => {
          return (
            <Link
              href={value.href}
              rel="noopener noreferrer"
              className="text-[#C69C21] hover:text-[#FDB913] underline decoration-[#FDB913]/30 hover:decoration-[#FDB913] transition-colors"
            >
              {children}
            </Link>
          );
        },
        strong: ({ children }) => (
          <strong className="font-semibold text-gray-900">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="italic text-gray-800">{children}</em>
        ),
        underline: ({ children }) => (
          <u className="underline decoration-gray-400">{children}</u>
        ),
        code: ({ children }) => (
          <code className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-sm text-gray-800">
            {children}
          </code>
        ),
        "strike-through": ({ children }) => (
          <del className="line-through text-gray-500">{children}</del>
        ),
        textColor: ({ children, value }) => (
          <span style={{ color: value?.color || "inherit" }}>{children}</span>
        ),
        textBackground: ({ children, value }) => (
          <span style={{ backgroundColor: value?.color || "transparent" }}>
            {children}
          </span>
        ),
        button: ({ children, value }) => {
          const getButtonClasses = () => {
            switch (value.style) {
              case "secondary":
                return "bg-gray-600 hover:bg-gray-700";
              case "outline":
                return "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50";
              default:
                return "bg-blue-600 hover:bg-blue-700";
            }
          };

          return (
            <Link
              href={value.href}
              className={`inline-block px-6 py-2 rounded-lg text-white font-medium transition-colors ${getButtonClasses()}`}
            >
              {value.text || children}
            </Link>
          );
        },
      },

      block: {
        h1: ({ children }) => (
          <h1 className="text-4xl font-bold mt-20 mb-8 text-gray-900 border-b border-gray-200 pb-3">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-800 border-b border-gray-200 pb-2">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-xl font-semibold mt-8 mb-3 text-gray-800">
            {children}
          </h4>
        ),
        h5: ({ children }) => (
          <h5 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
            {children}
          </h5>
        ),
        h6: ({ children }) => (
          <h6 className="text-base font-semibold mt-4 mb-2 text-gray-800">
            {children}
          </h6>
        ),
        normal: ({ children }) => (
          <p className="mb-6 text-gray-700 leading-relaxed text-lg">
            {children}
          </p>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-yellow-500 pl-6 my-8 italic text-gray-700 py-2 bg-gray-50 rounded-r-lg shadow-sm">
            {children}
          </blockquote>
        ),
        leftAlign: ({ children }) => (
          <p className="mb-6 text-gray-700 leading-relaxed text-lg text-left">
            {children}
          </p>
        ),
        centerAlign: ({ children }) => (
          <p className="mb-6 text-gray-700 leading-relaxed text-lg text-center">
            {children}
          </p>
        ),
        rightAlign: ({ children }) => (
          <p className="mb-6 text-gray-700 leading-relaxed text-lg text-right">
            {children}
          </p>
        ),
        justify: ({ children }) => (
          <p className="mb-6 text-gray-700 leading-relaxed text-lg text-justify">
            {children}
          </p>
        ),
        small: ({ children }) => (
          <p className="mb-6 text-gray-700 leading-relaxed text-base">
            {children}
          </p>
        ),
        medium: ({ children }) => (
          <p className="mb-6 text-gray-700 leading-relaxed text-lg">
            {children}
          </p>
        ),
        large: ({ children }) => (
          <p className="mb-6 text-gray-700 leading-relaxed text-xl">
            {children}
          </p>
        ),
        xlarge: ({ children }) => (
          <p className="mb-6 text-gray-700 leading-relaxed text-2xl">
            {children}
          </p>
        ),
      },

      list: {
        bullet: ({ children }) => (
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            {children}
          </ul>
        ),
        number: ({ children }) => (
          <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
            {children}
          </ol>
        ),
      },

      listItem: {
        bullet: ({ children }) => (
          <li className="text-lg leading-relaxed">{children}</li>
        ),
        number: ({ children }) => (
          <li className="text-lg leading-relaxed">{children}</li>
        ),
      },
    };

    const formattedDate = new Date(
      post.publishedAt || post._createdAt
    ).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const wordCount = JSON.stringify(post.body).split(" ").length;
    const readingTime = Math.ceil(wordCount / 200);

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      alternativeHeadline: post.altHeadline || post.title,
      image: post.mainImage?.url,
      author: {
        "@type": "Organization",
        name: "BookMyAssets",
      },
      editor: "BookMyAssets Editorial Team",
      genre: post.genre || "General",
      keywords: post.keywords?.join(", "),
      wordcount: wordCount.toString(),
      publisher: {
        "@type": "Organization",
        name: "BookMyAssets",
        logo: {
          "@type": "ImageObject",
          url: "https://www.bookmyassets.com/assets/images/logo.png",
        },
      },
      url: `https://www.bookmyassets.com/blogs/${post.slug.current}`,
      mainEntityOfPage: `https://www.bookmyassets.com/blogs/${post.slug.current}`,
      datePublished: post.publishedAt,
      dateModified: post._updatedAt || post.publishedAt,
      description: post.metaDescription,
    };

    const canonicalUrl = `https://www.bookmyassets.com/blogs/${post.slug.current}`;

      const renderMainImage = () => {
          if (!post.mainImage) return null;
    
          const imageElement = (
            <div className="relative w-full h-[50vh] md:h-[60vh] group">
              <Image
                src={urlFor(post.mainImage).url() || ""}
                alt={post.mainImage?.alt || post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              {/* Optional overlay for linked images */}
              {post.mainImage?.link && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          );
    
          // If there's a link, wrap the image in a Link component
          if (post.mainImage?.link) {
            return (
              <Link
                href={post.mainImage.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                {imageElement}
              </Link>
            );
          }
    
          // If no link, return the image as is
          return imageElement;
        };

    return (
      <div className="bg-gray-50 min-h-screen">
        {/* <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            /> */}
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Hero Section with Image */}
        <div className="w-full bg-gradient-to-b from-gray-900 to-gray-800 relative">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="max-w-7xl mx-auto pt-32 pb-20 px-4 space-y-4 sm:px-6 lg:px-8 relative z-10">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
          {/* Featured Image Card */}
         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
            {renderMainImage()}
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-2xl shadow-xl">
            <div className="max-w-4xl mx-auto px-6 md:px-12 py-4 md:py-8">
              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <PortableText value={post.body} components={components} />
              </div>
            </div>
          </div>
        </main>

        <div className="bg-black py-12 mt-4">
          <div className="w-full   px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="inline-block p-4 bg-white/20 rounded-full mb-8">
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Ready for More Insights?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Join thousands of readers who trust us for the latest industry
              insights, market analysis, and investment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
              <Link
                href="/insider-dholera"
                className="text-white bg-emerald-900 hover:text-emerald-900 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore Dholera
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-emerald-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {trendingBlogs && trendingBlogs.length > 0 && (
            <div className="py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <span className="inline-block bg-gradient-to-r from-emerald-700 to-emerald-900 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
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
                          <div className="bg-emerald-800 text-white text-sm rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-lg">
                            {index + 1}
                          </div>
                        </div>
                        {blog.mainImage && (
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={urlFor(blog.mainImage)
                                .width(400)
                                .height(200)
                                .url()}
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
        </div>

        <CommonForm title="Choose Best Plot For You" />
      </div>
    );
  } catch (error) {
    console.error("Error loading blog post:", slug, error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Error loading blog post</h1>
          <p className="text-gray-600">Please try again later</p>
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
