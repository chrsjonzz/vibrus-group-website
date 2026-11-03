/** @type {import('next').NextConfig} */
const isProduction =
  process.env.VERCEL_ENV === "production" ||
  process.env.NEXT_PUBLIC_APP_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/vibrus-difference',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/divisions/healthcare-solutions',
        destination: '/divisions/healthcare',
        permanent: true,
      },
      {
        source: '/divisions/healthcare-solutions/medical-staffing-services',
        destination: '/divisions/healthcare',
        permanent: true,
      },
      {
        source: '/divisions/healthcare-solutions/private-duty-services',
        destination: '/divisions/healthcare',
        permanent: true,
      },
      {
        source: '/divisions/healthcare-solutions/living-assistance-services',
        destination: '/divisions/healthcare',
        permanent: true,
      },
      {
        source: '/divisions/healthcare-solutions/job-classifications',
        destination: '/divisions/healthcare#job-classifications',
        permanent: true,
      },
      {
        source: '/apply-here',
        destination: '/apply',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/sitemap',
        destination: '/sitemap.xml',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Robots-Tag',
            value: isProduction
              ? 'index, follow'
              : 'noindex, nofollow, noarchive, nosnippet',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
