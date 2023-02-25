const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hi, It's MVTime; This is root of project");
});

app.listen(4000, () => {
    console.log("Application is running...");
});