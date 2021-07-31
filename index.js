const express = require('express');
const app = express();

let consoleMethod = (req, res, next) => {
    
    console.log(req.method);
    next();
}

let hello = (req, res) => {
    
    res.send("Hello World");
}

app.use("/", consoleMethod);
app.get("/", hello);

app.post("/", consoleMethod, hello);

app.listen(3000, () => console.log('Server Running...'));