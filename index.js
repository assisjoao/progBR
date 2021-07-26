const http = require('http');
const url = require('url');
const fs = require('fs');

function handleFile (req, res) {
    let path = url.parse(req.url).pathname;
}

http.createServer((request, response) =>{

    let fileName = "." + path;

    fs.readFile(fileName, (err, data) => {
        if (err){
            response.writeHead(404, {"Content-Type": "text/html;charset=utf-8"});
            response.end("<h1>Página Não Encontrada</h1>")
        } else {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(data);
            response.end();
        }
    })
    response.end();

}).listen(3000, (err)=>{
    if (err){
    console.log(err)
    } else {
        console.log("Servidor Rodando na porta 3000")
    }
})