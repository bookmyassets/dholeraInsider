import { defineQuery } from "next-sanity";
import { PortableText } from "next-sanity";


export const projectQuery = defineQuery(
    `
    *[_type == "post" && "Project" in categories[]-> title  && author-> name == "Dholera Insider" ]{
    _id,
    title,
    body,
    "categories": categories[]->{ 
      _id,
      title
    },
    slug,
    "imageUrl" : mainImage.asset->url
    }
    `
)

  // You can also add this query for single projects
  export const singleProjectQuery = `*[_type == "post" && slug.current == $slug && author-> name == "Dholera Insider"][0]{
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


export const blogQuery = defineQuery(
    `
    *[_type == "post" && "Blog" in categories[] -> title && author-> name == "Dholera Insider"]{
    _id,
    title,
    body,
    "categories": categories[]->{ 
      _id,
      title
    },
    slug,
    "imageUrl" : mainImage.asset->url
    }
    `
)

  // You can also add this query for single projects
  export const singleBlogQuery = `*[_type == "post" && slug.current == $slug] && author-> name == "Dholera Insider"[0]{
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

  export async function getProjectSOBySlug(slug) {
  const query = `
    *[_type == "post" && slug.current == $slug][0]  {
      title,
      metaTitle,
      metaDescription,
      keywords,
      description,
      body,
      categories[]->{title},
      mainImage,
      location,
      investment,
      returns,
      "relatedProjects": *[
        _type == "post" && 
        author->name == "BookMyAssets" && 
        "Sub-Project" in categories[]->title && 
        "Sold Out" in categories[]->title &&
        slug.current != $slug
      ]{
        title,
        "slug": slug.current,
        mainImage
      }
    }
  `;

  const post = await client.fetch(query, { slug }, { cache: 'no-store' });
  return post;
}