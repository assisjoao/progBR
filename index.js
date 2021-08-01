const PORT = 3001;
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let posts = [
   {id: "asdsad",
   title: "Teste do Mutal",
   description: "Descrição teste"
   },
]

app.get("/all", (req,res)=>{

   res.json(JSON.stringify(posts))
});

app.post("/new", (req,res)=>{ });



app.listen(PORT, () => {
   console.log('Server running on port', PORT)
});