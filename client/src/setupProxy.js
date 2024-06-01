const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    'https://recruit-ranks.vercel.app/api',
    createProxyMiddleware({
      // 👇️ make sure to update your target
      target: 'http://localhost:8080',
      changeOrigin: true,
    }),
  );
};