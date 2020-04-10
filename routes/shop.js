const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<p> the midd that handles main app</p>");
});

module.exports = router;
