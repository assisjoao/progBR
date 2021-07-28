const express = require('express');
const path = require('path');

const app = express();

app.use("/meusite", express.static(path.join(__dirname, 'client')));

app.get("/", (req, res) => {
    // res.set("Content-Type", "text/plain")
    res.type("txt");
    res.send("<h1>Hello Hello GET</h1>");
});

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server Running on Port:${PORT}`)
});