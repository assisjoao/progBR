const express = require('express');
const app = express();


app.get("/", (req, res) => {
    console.log(req);
    res.send("<h1>Hello W GET</h1>");
});

app.listen(3000, () => console.log('Server Running...'));