const express = require('express');
const { process_params } = require('express/lib/router');
const app = express();
app.use(express.json());

//GET http://localhost:3000
//GET http://localhost:3000/projects?title=Node&owner=Aluizio&page=1

app.get('/projects', function (request, response) {

    const { title, owner, page } = request.query;
    console.log(`Return data: ${title} ${owner} ${page} `);
    return response.json([
        'Projeto 1',
        'Projeto 2'
    ]);
})

app.post('/projects/:id/:nome', function (request, response) {

    const { nome, owner } = request.body;
    console.log(`Request body => ${nome} ${owner}`);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
})

app.put('/projects/:id', function (request, response) {

    const { id} = request.params;
    const { nome, owner } = request.body;
    console.log(`Dados: ${id} ${nome} ${owner}`);

    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ]);
})

app.delete('/projects/:id/:nome', function (request, response) {

    const id = request.params;
    console.log(id);

    return response.json([
        'Projeto 2',
        'Projeto 3'
    ]);
})

app.listen(3000, () => { console.log("Server escutando porta 3000!") });

//GET http://localhost:3000