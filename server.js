const express = require("express");
const path = require("path");

const app = express();

// Serve static files (HTML, JS, CSS)
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});