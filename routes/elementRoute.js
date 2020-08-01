const multer = require("multer");
const express = require("express");

const router = express.Router();

const Element = require("../models/element");

// Screenshot upload constraints
const upload = multer({
  limits: {
    fileSize: 1024 * 1024,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(JPG|jpeg|png)$/)) {
      return cb(new Error("Please upload an image in JPG, JPEG or PNG format"));
    } else if (file.size > 1024 * 1024) {
      return cb(new Error("Please upload a screenshot under 1 MB"));
    }
    cb(null, true);
  },
});

// Get all elements
router.get("/", async (req, res) => {
  var elements = [];
  elements = await Element.find();
  res.json({elements: elements});
});

// Get all the elements of specific type
// Not working
router.get("/:name", async (req, res) => {
  var elements = [];
  elements = await Element.find({ name: req.params.name });
  res.send(elements);
});

// Save a new element to DB
router.post("/", upload.single("screenshot"), async (req, res) => {
  try {
    const newElement = new Element({
      name: req.body.name,
      JSCode: req.body.JSCode,
      HTMLCode: req.body.HTMLCode,
      CSSCode: req.body.CSSCode,
      screenshot: req.file.buffer,
    });

    await newElement.save();
    res.send("Data uploaded successfully!");
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
