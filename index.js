const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.json({ message: "Token Travel "});
});

app.listen(PORT, () => {
    console.log(`Serve is running. ${PORT}`)
});