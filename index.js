const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const aluno = require("./routes/aluno")


app.use(bodyParser.urlencoded());

app.use("/aluno", aluno);

app.get("/", (req, res) => {

   res.send("Hello W")
});



app.listen(3000, () => console.log('Server Running...'));