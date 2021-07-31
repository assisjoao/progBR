const express = require('express');
const app = express();
const bodyParser = require("body-parser");

let alunos = [{id: 0, nome: "Jose"},
    {id: 1, nome: "Maria"},
    {id: 2, nome: "Joao"},
    {id: 3, nome: "Marcos"}]

app.use(bodyParser.urlencoded());

app.get("/", (req, res) => {

   res.send("Hello W")
});


app.get("/aluno", (req, res, next) => {
    console.log(req.body);

    let aluno = alunos[req.body.id];
    if (aluno) {
        res.json(aluno);
    } else {
        next();
    }
});

app.get("/aluno", (req, res, next) => {
    console.log(req.query);

    let aluno = alunos[req.query.id];
    if (aluno) {
        res.json(aluno);
    } else {
        res.send("Not finded");
    }
});


app.get("/alunos/all", (req, res) => {
    res.json(JSON.stringify(alunos))
});

app.get("/aluno/:id", (req, res) => {
    console.log(req.params.id);
    let aluno = alunos[req.params.id]
    res.json(aluno);
});

app.listen(3000, () => console.log('Server Running...'));