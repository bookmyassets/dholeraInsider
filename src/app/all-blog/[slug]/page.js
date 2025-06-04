import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { getblogs, getUpdates, getPostBySlug } from "@/sanity/lib/api";
import Link from "next/link";
import Image from "next/image";

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
      /* getblogs(0, 4), // Get only 4 blogs
      getUpdates(slug, 3), */
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

    return (

    <>
    {/* Hero Section */}
    <div className="flex flex-col w-full h-[50vh] sm:h-screen relative">
      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).width(800).url()}
          alt={post.mainImage.alt || post.title}
          width={500}
          height={600}
          
          className="w-full h-full bg-no-repeat object-cover object-center brightness-50"
        />
      )}

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <div className="relative">
          <div className="flex flex-col justify-center items-center pb-3 sm:pb-5">
            <p className="text-6xl sm:text-9xl text-white opacity-5 font-black uppercase dark:text-white">
              {post.title}
            </p>
            <h1 className="text-2xl sm:text-4xl text-white font-bold capitalize mt-4 sm:mt-14 dark:text-gray-300">
              {post.title}
            </h1>
          </div>
        </div>
      </div>
    </div>

    {/* Categories */}
    {post.categories?.length > 0 && (
      <div className="mb-6 flex flex-wrap justify-center gap-2 px-4 sm:px-0">
        {post.categories.map((category) => (
          <span 
            key={category._id}
            className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
          >
            {category.title}
          </span>
        ))}
      </div>
    )} 

    {/* Blog Body */}
    <div className="prose max-w-4xl mx-auto pt-16 sm:pt-28 text-base sm:text-lg px-4 sm:px-0 dark:text-gray-200">
      <PortableText value={post.body} components={components}/>
    </div>
  </>
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