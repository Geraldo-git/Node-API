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

function logRoutes(request, response, next) {
    const { method, url } = request;
    const route = `[${method.toUpperCase()}] ${url}`;
    console.log(route);
    return next();
}


//app.use(logRoutes);

app.get('/projects', logRoutes, function (request, response) {
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

    const projectIndex = projects.findIndex(p => p.id === id);
    if (projectIndex < 0) {
        return response.status(404).json({ Error: 'Projeto não encontrado!' });
    }

    if (!nome && !owner) {
        return response.status(400).json({ Error: 'Nome e owner são requeridos!' });
    }

    const project = { id, nome, owner };
    projects[projectIndex] = project;

    return response.json(project);
})

app.delete('/projects/:id', function (request, response) {
    const { id } = request.params;
    const projectIndex = projects.findIndex(p => p.id === id);
    if (projectIndex < 0) {
        return response.status(404).json({ Error: 'Projeto não encontrado!' });
    }
    projects.splice(projectIndex, 1);
    return response.status(204).send();
})

app.listen(3000, () => { console.log("Server escutando porta 3000!") });

//GET http://localhost:3000