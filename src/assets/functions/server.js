const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/api/posts', createProxyMiddleware({
  target: 'https://cryptopanic.com/api/v1/posts',
  changeOrigin: true,
}));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
