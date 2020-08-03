const handleHealthCheck = require("../controllers/plantsController");

function router(app) {
  app.get("/", handleHealthCheck);
}

module.exports = router;
