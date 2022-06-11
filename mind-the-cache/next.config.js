/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            // {
            //     source: '/home',
            //     destination: '/pageB',
            //     permanent: true
            // }
        ];
    }
}

module.exports = nextConfig
