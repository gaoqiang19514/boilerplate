const proxy = require('http-proxy-middleware');

module.exports = app => {
  // 代理到本地mock
  app.use(
    proxy("/api/**", {
      target: "http://localhost:3000",
      changeOrigin: true
    })
  );
};
