/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["daniella.blog-s.de"], // Add Instagram CDN here
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/heilpraktikerin-fusgoenheim",
        destination: "/",
        permanent: true,
      },
      {
        source: "/homoopathie-ludwigshafen",
        destination: "/",
        permanent: true,
      },
      { source: "/homoeopathie-mannheim", destination: "/", permanent: true },
      { source: "/homoeopathie-worms", destination: "/", permanent: true },
      { source: "/schmerztherapie-worms", destination: "/", permanent: true },
      {
        source: "/schmerztherapie-mannheim",
        destination: "/",
        permanent: true,
      },
      {
        source: "/schmerztherapie-ludwigshafen",
        destination: "/",
        permanent: true,
      },
      {
        source: "/schmerztherapie-heidelberg",
        destination: "/",
        permanent: true,
      },
      {
        source: "/schmerztherapie-frankenthal",
        destination: "/",
        permanent: true,
      },
      {
        source: "/schmerztherapie-bad-duerkheim",
        destination: "/",
        permanent: true,
      },
      {
        source: "/plasma-pen-behandlung-mannheim",
        destination: "/",
        permanent: true,
      },
      {
        source: "/plasma-pen-behandlung-ludwigshafen",
        destination: "/",
        permanent: true,
      },
      {
        source: "/plasma-pen-behandlung-kosten",
        destination: "/",
        permanent: true,
      },
      {
        source: "/plasma-pen-behandlung-frankenthal",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
