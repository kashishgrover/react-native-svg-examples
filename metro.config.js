const { getDefaultConfig } = require('metro-config');

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts, assetExts },
//   } = await getDefaultConfig();

//   return {
//     transformer: {
//       babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     },
//     resolver: {
//       assetExts: assetExts.filter((ext) => ext !== 'svg'),
//       sourceExts: [...sourceExts, 'svg'],
//     },
//   };
// })();

// Uncomment the following for Example 4 - react-native-svg-asset-plugin
module.exports = {
  transformer: {
    assetPlugins: ['react-native-svg-asset-plugin'],
    svgAssetPlugin: {
      pngCacheDir: '.png-cache',
      scales: [1, 2, 3],
      output: {
        compressionLevel: 9,
      },
    },
  },
};
