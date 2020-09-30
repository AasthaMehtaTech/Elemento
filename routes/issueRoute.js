const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const token = req.body.gitToken;
    const url = "https://api.github.com/repos/AasthaGithub/Elemento/issues";
    const headers = {
        "Authorization": `Token ${token}`,
    };
    const payLoad = {
      title: req.body.title,
      body: req.body.body,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payLoad),
    });
    const result = await response.json();
    res.json({ message: "Issue created." });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;