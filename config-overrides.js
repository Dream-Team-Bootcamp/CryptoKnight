const webpack = require('webpack');

module.exports = function override(config, env) {
  // Locate the Webpack Dev Server options
  const devServerOptions = config.devServer;

  // Replace 'onAfterSetupMiddleware' and 'onBeforeSetupMiddleware' with 'setupMiddlewares'
  if (devServerOptions) {
    const { onAfterSetupMiddleware, onBeforeSetupMiddleware } = devServerOptions;

    if (onAfterSetupMiddleware || onBeforeSetupMiddleware) {
      devServerOptions.setupMiddlewares = (middlewares, server) => {
        if (onBeforeSetupMiddleware) {
          onBeforeSetupMiddleware(server);
        }

        if (onAfterSetupMiddleware) {
          onAfterSetupMiddleware(server);
        }

        return middlewares;
      };

      delete devServerOptions.onAfterSetupMiddleware;
      delete devServerOptions.onBeforeSetupMiddleware;
    }
  }

  config.resolve.fallback = {
    url: require.resolve('url'),
    assert: require.resolve('assert'),
    buffer: require.resolve('buffer'),
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  );

  return config;
};







