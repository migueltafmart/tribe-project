require("cors")({
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200,
});
const app = require("express")(),
  httpServer = require("http").createServer(app);

const PORT = process.env.PORT || 8080;

httpServer.listen(PORT, () =>
  console.info(`Server running at http://localhost:${PORT}`)
);
module.exports = httpServer;
require("./utils/socket");

