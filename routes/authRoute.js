const express = require("express");
const router = express.Router();
const passport = require("passport");

// Auth using google GET /auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// Auth callback GET /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.send("Hello logged in user!");
  }
);

module.exports = router;
