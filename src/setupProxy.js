const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/posts',
    createProxyMiddleware({
      target: 'http://cryptopanic.com',
      changeOrigin: true,
      onProxyRes: (proxyRes) => {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      },
      pathRewrite: {
        '^/api/posts': '/api/v1/posts',
      },
    })
  );
};
