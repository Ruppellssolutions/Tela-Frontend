/** @type {import('next').NextConfig} */
const nextConfig = {
    // distDir: "dist",
    // output: "export",
    compiler: {
        styledComponents: {
            displayName: true,
            ssr: true,
            fileName: true,
            cssProp: true,
            minify: true,
        },
    },
};

export default nextConfig;
