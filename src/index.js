const express = require('express');
const { process_params } = require('express/lib/router');
const app = express();

app.get('/', function (request, response) {
    return response.json({
        message: "Olá Dev! Bem vindo ao curso!"
    });
})

app.listen(3000, () => { console.log("Server escutando porta 3000!") });

//GET http://localhost:3000