module.exports = function override(config) {
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

  return config;
};

