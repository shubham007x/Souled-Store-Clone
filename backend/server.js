const express = require("express");
const { connection } = require("./Connection/connection");
require("dotenv").config();
const app = express();

app.post("/signup", async (req, res) => {});
app.get("/", async (req, res) => {
  res.send("hello");
});
app.listen(8000, async () => {
  try {
    await connection;

    console.log("Server Started at 8000");
  } catch (error) {
    console.log("Server Failed to start", error);
  }
});
