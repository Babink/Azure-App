const express = require("express");
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("HELLO WORLD");
})

app.listen(port, () => {
    console.log(`Application is running on port: ${port}`);
})