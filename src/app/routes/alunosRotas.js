import { Router } from "express";
import alunoService from "../core/services/alunoService.js";

const rotas = Router();

rotas.get('/', (request, response) => {
    response.redirect('/alunos');
});
rotas.get('/cadastrar', (request, response) =>{
    response.render('pages/cadastrar-aluno', {headerTitle: "Cadastrar Aluno", showListar : false, showMessage : null})
});
rotas.post('/cadastrar', alunoService.postAluno)
rotas.get('/alunos', alunoService.getAllAlunos);

export default rotas;