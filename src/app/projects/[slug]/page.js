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
      getblogs(0, 4),
      getUpdates(slug, 3),
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
            <figure className="my-8">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  alt={value.alt || " "}
                  src={urlFor(value).width(800).url()}
                  width={800}
                  height={500}
                  className="w-full rounded-2xl hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              {value.caption && (
                <figcaption className="mt-3 text-center text-sm italic text-gray-500 dark:text-gray-400">
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
            <div className="overflow-x-auto my-8">
              <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <tbody>
                  {value.rows.map((row, i) => {
                    if (!row?.cells || !Array.isArray(row.cells)) {
                      return null;
                    }
                    return (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}
                      >
                        {row.cells.map((cell, j) => (
                          <td
                            key={j}
                            className="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
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
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
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
          <strong className="font-semibold text-gray-900 dark:text-white">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="italic text-gray-800 dark:text-gray-200">{children}</em>
        ),
        underline: ({ children }) => (
          <u className="underline decoration-gray-400 dark:decoration-gray-600">{children}</u>
        ),
        code: ({ children }) => (
          <code className="font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm text-gray-800 dark:text-gray-200">
            {children}
          </code>
        ),
        "strike-through": ({ children }) => (
          <del className="line-through text-gray-500 dark:text-gray-400">{children}</del>
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
          <h1 className="text-4xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-3xl font-bold mt-10 mb-5 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-white">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-white">
            {children}
          </h4>
        ),
        h5: ({ children }) => (
          <h5 className="text-lg font-semibold mt-5 mb-2 text-gray-800 dark:text-white">
            {children}
          </h5>
        ),
        h6: ({ children }) => (
          <h6 className="text-base font-semibold mt-4 mb-2 text-gray-800 dark:text-white">
            {children}
          </h6>
        ),
        normal: ({ children }) => (
          <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            {children}
          </p>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-[#C69C21] pl-6 my-8 italic text-gray-700 dark:text-gray-300 py-2 bg-gray-50 dark:bg-gray-800 rounded-r-lg">
            {children}
          </blockquote>
        ),
        small: ({ children }) => (
          <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            {children}
          </p>
        ),
      },
      list: {
        bullet: ({ children }) => (
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
            {children}
          </ul>
        ),
        number: ({ children }) => (
          <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
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

    return (
      <div className=" px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="relative h-96 w-full mb-12 overflow-hidden rounded-2xl shadow-xl">
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).width(800).url()}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover object-center brightness-75"
              priority
            />
          )}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                {post.title}
              </h1>
              <div className="flex justify-center items-center space-x-4 text-white text-sm md:text-base">
                <span>{formattedDate}</span>
                <span>•</span>
                <span>{readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Article Content */}
          <article className="lg:w-2/3">
            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-a:text-[#C69C21] prose-blockquote:border-[#C69C21] prose-img:rounded-2xl">
              <PortableText value={post.body} components={components} />
            </div>

            {/* Author and Tags */}
            <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0">

                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {post.author?.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {post.author?.bio}
                  </p>
                </div>
              </div>
              {post.categories && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.categories.map((category) => (
                    <span
                      key={category._id}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* About Widget */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                About the Author
              </h3>
              <div className="flex items-center space-x-4">
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {post.author?.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {post.author?.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedBlogs && relatedBlogs.length > 0 && (
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedBlogs.map((blog) => (
                    <Link
                      key={blog._id}
                      href={`/blogs/${blog.slug.current}`}
                      className="block group"
                    >
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <Image
                            src={urlFor(blog.mainImage).width(80).height(80).url()}
                            alt={blog.title}
                            width={80}
                            height={80}
                            className="rounded-lg object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-[#C69C21] transition-colors">
                            {blog.title}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {new Date(blog.publishedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Trending Posts */}
            {trendingBlogs && trendingBlogs.length > 0 && (
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Trending Now
                </h3>
                <div className="space-y-4">
                  {trendingBlogs.map((blog) => (
                    <Link
                      key={blog._id}
                      href={`/blogs/${blog.slug.current}`}
                      className="block group"
                    >
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <Image
                            src={urlFor(blog.mainImage).width(80).height(80).url()}
                            alt={blog.title}
                            width={80}
                            height={80}
                            className="rounded-lg object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-[#C69C21] transition-colors">
                            {blog.title}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {new Date(blog.publishedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading blog post:", slug, error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Error loading blog post</h1>
          <p className="text-gray-600 dark:text-gray-400">Please try again later</p>
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