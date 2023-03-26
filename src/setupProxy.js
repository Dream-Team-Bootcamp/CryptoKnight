module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://crypt0knight.netlify.app/.netlify/functions',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
