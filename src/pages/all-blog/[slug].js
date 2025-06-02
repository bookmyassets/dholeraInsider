// pages/projects/[slug].js
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; // Make sure you have this utility
import CostSheet from "@/components/costSheet";

const PostDetail = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>;
  }

  const isProject = post.categories?.some(
    (category) => category.title.toLowerCase() === "project"
  );
  const components = {
    types: {
      image: ({ value }) => {
        if (!value || !value.asset) {
          return <p>Image not found</p>;
        }
        return (
          <Image
            src={value.asset._ref ? urlFor(value).url() : value.asset.url}
            alt={value.alt || "Image"}
            width={500}
            height={600}
            className="my-4 w-full rounded-lg"
          />
        );
      },
    },
  };

  return (
    <>
      <div className="h-screen ">
        {/* Hero Section */}
        <div className="flex w-full relative">
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.mainImage.alt || post.title}
              width={1800}
              height={1200}
              className="w-full h-[50vh] bg-no-repeat object-cover brightness-50"
            />
          )}

          <div className="absolute inset-0 flex justify-center items-center text-center">
            <div className="relative">
              
              <p className="text-8xl sm:text-10xl text-black opacity-5 font-black text-center uppercase dark:text-white">
                {post.title}
              </p>
              {/* Foreground text - smaller and prominent, positioned over the background text */}
              <p className="absolute inset-0 flex items-center justify-center text-4xl text-black font-bold text-center dark:text-gray-300">
                {post.title}
              </p>
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
          <PortableText value={post.body} components={components} />
          {isProject && <CostSheet />}
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    body,
    mainImage,
    "author": author->{
      name,
      _id
    },
    "categories": categories[]->{ 
      _id,
      title
    },
    publishedAt,
    slug
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

export default PostDetail;
