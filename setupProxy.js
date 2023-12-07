const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:3001", // Specify the URL of your API server
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // Remove the '/api' prefix when forwarding requests
      },
    })
  );
};
