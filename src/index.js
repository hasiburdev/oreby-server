const express = require("express");

const port = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Success!" });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
