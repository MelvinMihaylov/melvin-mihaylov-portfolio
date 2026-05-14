/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/images/EnglishLogoWithDescription.png",
        destination: "/icon.png",
        permanent: true,
      },
      {
        source: "/images/EnglishLogoWithDescriptionStretched.png",
        destination: "/images/mmlogo.png",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
