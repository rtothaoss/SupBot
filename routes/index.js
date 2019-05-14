const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const botRoutes = require("../bot/botRoutes");
const googleAuth = require('../passport/index')


//Bot
router.use('/bot', botRoutes)

// //Google Auth
router.use('/auth', googleAuth)

// API Routes
router.use("/api", apiRoutes);


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

