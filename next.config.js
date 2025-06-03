/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // 如果使用静态导出，可能需要禁用图片优化
    },
};

module.exports = nextConfig;