import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { getblogs, getPostBySlug } from "@/sanity/lib/api";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import CommonForm from "@/app/components/CommonForm";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: post.title,
    description: post.metaDescription,
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const [trendingBlogs] = await Promise.all([getblogs(0, 6)]);

  // Calculate read time (rough estimate)
  const wordCount = JSON.stringify(post.body).split(" ").length;
  const readTime = Math.ceil(wordCount / 200); // Assuming 200 words per minute
  const isProject = post.categories?.some(
    (category) => category.title.toLowerCase() === "project"
  );

  // Format the publication date if available
  const formattedDate = post.publishedAt
    ? format(new Date(post.publishedAt), "MMMM dd, yyyy")
    : null;

  const components = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <figure className="my-12">
            <div className="overflow-hidden rounded-xl shadow-xl">
              <img
                alt={value.alt || " "}
                src={urlFor(value).width(1200).url()}
                width={1200}
                height={800}
                className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            {value.caption && (
              <figcaption className="mt-3 text-center text-sm italic text-gray-500">
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
        <p className="mb-6 text-gray-700 leading-relaxed text-lg">{children}</p>
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
        <p className="mb-6 text-gray-700 leading-relaxed text-lg">{children}</p>
      ),
      large: ({ children }) => (
        <p className="mb-6 text-gray-700 leading-relaxed text-xl">{children}</p>
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
  /* 
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
    wordcount: post.wordCount?.toString() || "1000",
    publisher: {
      "@type": "Organization",
      name: "BookMyAssets",
      logo: {
        "@type": "ImageObject",
        url: "https://www.bookmyassets.com/assets/images/logo.png",
      },
    },
    url: `https://www.bookmyassets.com/dholera-sir/${post.slug.current}`,
    mainEntityOfPage: `https://www.bookmyassets.com/dholera-sir/${post.slug.current}`,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    description: post.metaDescription,
  }; */

  const canonicalUrl = `https://www.bookmyassets.com/dholera-sir/${post.slug.current}`;

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
          <p className="text-white text-lg">{post.metaDescription}</p>

          {/* Metadata row */}
          <div className="flex items-center text-gray-300 text-sm md:text-base mb-8">
            {formattedDate && (
              <div className="flex items-center pb-4 mr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{formattedDate}</span>
              </div>
            )}
            <div className="flex items-center pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{readTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        {/* Featured Image Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
          {post.mainImage && (
            <div className="relative w-full h-[50vh] md:h-[60vh]">
              <Image
                src={urlFor(post.mainImage)?.url() || ""}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-xl">
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16">
            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <PortableText value={post.body} components={components} />
            </div>
          </div>
        </div>
        {/* Trending Posts Section */}
       

        {/* Final CTA Section */}
        
      </main>


      <div className="bg-black py-20">
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

        <div className="max-w-7xl mx-auto">
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
}
