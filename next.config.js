/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                hostname: "127.0.0.1",
            },
        ]
    }
};

module.exports = nextConfig
