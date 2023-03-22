const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const ExternalRemotesPlugin = require('external-remotes-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new ExternalRemotesPlugin(),
      new NextFederationPlugin({
        name: 'app1',
        remotes: {
          home: `home@http://localhost:3000/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry_home.js`
        },
        filename: 'static/chunks/remoteEntry_app1.js',
        exposes: {},
        extraOptions: {
          exposePages: true
        },
        shared: {
          // whatever else
        }
      })
    );

    return config;
  }
};

// const { FederatedTypesPlugin } = require('@module-federation/typescript');
//
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   webpack(config, options) {
//     const { isServer } = options;
//     config.plugins.push(
//       new FederatedTypesPlugin({
//         federationConfig: {
//           name: 'app1',
//           remotes: {
//             home: `home@http://localhost:3000/_next/static/${
//               isServer ? 'ssr' : 'chunks'
//             }/remoteEntry_home.js`
//           },
//           filename: 'static/chunks/remoteEntry_app1.js',
//           exposes: {},
//           extraOptions: {
//             exposePages: true
//           },
//           shared: {
//             // whatever else
//           }
//         }
//         // ...
//       })
//     );
//     return config;
//   }
// };
module.exports = nextConfig;
