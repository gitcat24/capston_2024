module.exports = {
    resolver: {
        extraNodeModules: {
        express: require('express'),
        },
        sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx', 'html', 'css'],
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
            },
        }),
    },
};
  