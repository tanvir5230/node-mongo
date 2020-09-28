const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("thank you");
});

app.listen(3000, () => {
  console.log("port at 3000");
});
