import { sources } from 'next/dist/compiled/webpack/webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "*",
            port: "",
            pathname: "/**",
         },
      ],
   },
   redirects: async() => {
      return [
         {
            source : '/about',
            destination: '/post',
            permanent: true
         }
      ]
   }

};

export default nextConfig;
