const express = require('express');
const app = express();
const projects = require("./projects")

app.use('/projects', projects)


const porta = 3333;
app.listen(porta, ()=>{
    console.log('Servidor rodando na porta ' + porta)
});


