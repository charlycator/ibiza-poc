/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
  },
  env: {
    MENDABLE: "6ad46006-1b67-4bcb-8266-ef7ce508454c"
  }
}

module.exports = nextConfig
