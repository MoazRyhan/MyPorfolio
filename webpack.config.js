// إذا كان عندك Next.js
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // استبدال three بالـ polyfill اللي عملناه
    config.resolve.alias = {
      ...config.resolve.alias,
      'three$': require.resolve('./three-polyfill.js'),
    };

    // تجاهل المكتبات المشكلة
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /three-mesh-bvh/,
        contextRegExp: /@react-three\/drei/,
      })
    );

    // تجاهل gainmap
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /@monogrid\/gainmap-js/,
        contextRegExp: /@react-three\/drei/,
      })
    );

    return config;
  },
  experimental: {
    esmExternals: false
  }
};

// أو إذا كان Create React App عادي
// اعمل ملف craco.config.js
module.exports = {
  webpack: {
    alias: {
      'three': require.resolve('./three-polyfill.js'),
    },
    plugins: {
      add: [
        new (require('webpack')).IgnorePlugin({
          resourceRegExp: /three-mesh-bvh|@monogrid\/gainmap-js/,
        }),
      ],
    },
  },
};