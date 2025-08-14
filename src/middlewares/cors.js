const cors = require("cors");

const corsMiddleware = require("cors")({
  origin: "*",
});

module.exports = corsMiddleware;