// //@ts-check

// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const { composePlugins, withNx } = require('@nx/next');
// const withPWA = require('next-pwa')({
//   dest: 'public',
//   register: true,
//   skipWaiting: true,
// });
// /**
//  * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
//  * @type {import('next').NextConfig}
//  **/
// const nextConfig = {
//   nx: {
//     // Set this to true if you would like to use SVGR
//     // See: https://github.com/gregberge/svgr
//     svgr: false,
//   },
// };

// const plugins = [
//   // Add more Next.js plugins to this list if needed.
//   withNx,
// ];

// module.exports = composePlugins(...plugins)(nextConfig);


// // /** @type {import('next').NextConfig} */



// // // module.exports = withPWA({
// // //   reactStrictMode: true,
// // // });
//@ts-check
//  * @type {import('next').NextConfig}


// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withPWA,
];

module.exports = composePlugins(...plugins)(nextConfig);
