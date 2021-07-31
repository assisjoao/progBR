const express = require('express');
const app = express();


app.get("/", (req, res) => {
    console.log(req);
    res.json({ name: "Joao"});
});

app.listen(3000, () => console.log('Server Running...'));