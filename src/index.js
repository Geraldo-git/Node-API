const express = require('express');
const { json } = require('express/lib/response');
const { process_params } = require('express/lib/router');
const app = express();
const { v4: uuidv4 } = require('uuid');
app.use(express.json());

//GET http://localhost:3000
//GET http://localhost:3000/projects?title=Node&owner=Aluizio&page=1

const id = uuidv4();
const projects = [];

app.get('/projects', function (request, response) {
    return response.json(projects);
})

app.post('/projects', function (request, response) {

    const { nome, owner } = request.body;
    const project = {
        id: uuidv4(),
        nome,
        owner
    }
    projects.push(project);
    return response.status(201).json(project);
})

app.put('/projects/:id', function (request, response) {

    const { id } = request.params;
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