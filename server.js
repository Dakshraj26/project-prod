const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("App Running 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});