const { override, addReactSvgLoader } = require("customize-cra");

module.exports = override(
  addReactSvgLoader({
    svgrOptions: {
      // Set throwIfNamespace to false to bypass the namespace warning
      svgoConfig: {
        plugins: [{ removeViewBox: false }],
      },
      throwIfNamespace: false,
    },
  })
);
