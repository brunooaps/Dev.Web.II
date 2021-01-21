'use strict'

//declarar as dependencias do arquivo
const express = require('express');
const app = express();



//definir que o servidor vai escutar
const port = 1234;

//configurando o servidor para escutar a porta definida
app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`);
});