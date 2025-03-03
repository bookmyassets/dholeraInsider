import React from "react";
import building from "@/assets/images/land.webp";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { projectQuery } from "@/sanity/lib/query";
import { PortableText } from "next-sanity";

export default function Projects({ projects }) {
  return (
    <>
      <div className="">
        <section className="flex flex-col w-full h-[40vh] sm:h-[50vh] md:h-[70] relative">
          <Image
            src={building}
            alt="bg image"
            fill
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            {/* Background Large Text */}
            <p className="text-5xl sm:text-7xl md:text-9xl font-black uppercase text-white/5">
              Projects
            </p>

            {/* Foreground Main Text */}
            <p className="absolute text-lg sm:text-2xl md:text-4xl font-bold text-white">
              Projects
            </p>
          </div>
        </section>
      </div>
      <div className="pt-6 sm:pt-10 px-4 relative bg-gradient-to-br from-green-700 via-green-900">
        {/* Overlay (optional for better contrast) */}
        <div className="absolute inset-0"></div>

        <section className="relative flex flex-col justify-center items-center">
          <div className="max-w-7xl grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project) => (
              <div
                key={project._id}
                className="bg-white mb-6 shadow-xl shadow-green-400 dark:shadow-green-900 dark:bg-gray-900 rounded-lg overflow-hidden w-full max-w-xs sm:max-w-none relative z-10"
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="block object-cover w-full h-[180px] sm:h-[250px]"
                />
                <div className="p-3 sm:p-6 ">
                  <h3 className="text-md sm:text-lg font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm mt-2 line-clamp-3">
                    <PortableText value={project.body} />
                  </div>
                  <div className="mt-3 sm:mt-4">
                    <Link href={`/post/${project.slug?.current}`} passHref>
                      <button className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const projects = await client.fetch(projectQuery);
  return { props: { projects } };
}
