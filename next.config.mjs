/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"cdn.pixabay.com",
      },
    ]
  }
  /* config options here */
};

export default nextConfig;
