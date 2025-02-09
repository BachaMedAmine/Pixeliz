module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: "pre",
          loader: "source-map-loader",
          options: {
            filterSourceMappingUrl: () => false, // Ignore missing source maps
          },
        },
      ],
    },
    ignoreWarnings: [/Failed to parse source map/], // Ignore warnings
  };