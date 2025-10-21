/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },

  async redirects() {
    return [
      /* REDIRECTIONS AFTER RESTRUCTURE */

      {
        source: "/blogs/:slug*",
        destination: "/dholera-sir-updates/:slug*",
        permanent: true,
      },
      {
        source: "/inside-dholera/:slug*",
        destination: "/about-dholera-sir/:slug*",
        permanent: true,
      },
      {
        source: "/inside-dholera/abcd-building-dholera-sir",
        destination: "/about-dholera-sir/why-abcd-building-makes-dholera-sir-smartest-investment-destination",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;