/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com"],
  },
  typescript: {
    // !! تعطيل فحص الأنواع في الإنتاج (استخدم هذا كحل مؤقت)
    ignoreBuildErrors: true,
  },
  // experimental: {
  //   missingSuspenseWithCSRBailout: false,
  // },
};

export default nextConfig;
