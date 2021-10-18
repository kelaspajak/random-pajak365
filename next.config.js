// @ts-check

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/

// @ts-ignore
module.exports = {
  async rewrites() {
    return [
      {
        source: '/space',
        destination: 'https://space.pajak365.com/',
      },
      {
        source: '/resumepajak',
        destination: 'https://resumepajak.pajak365.com/',
      },
    ];
  },
};
