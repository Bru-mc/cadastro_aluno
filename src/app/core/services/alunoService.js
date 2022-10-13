import AlunoRepository from "../models/aluno.js";


const getAllAlunos = async(request, response)=> {
    let alunos = await AlunoRepository.findAll();
    response.render('pages/listar-alunos', {alunos: alunos, headerTitle: "Alunos", showListar : true})
}

const postAluno = async(request , response) =>{
    let returnMessage = ''
    const nome = request.body.nome;
    const nota1 = Number(request.body.primeiraNota);
    const nota2 = Number(request.body.segundaNota);
    const media = (nota1 + nota2) / 2;
    let situacao = '';
    
        if(media >= 7){
            situacao = "aprovado";
        }
            
        else if(media >= 4){
            situacao = "recuperação";
        }
            
        else if(media < 4){
            situacao = "reprovado";
        }
            
    
    const aluno = {
        nome: nome,
        primeiraNota: nota1,
        segundaNota: nota2,
        media: media,
        situacao: situacao
    };
    let alunoExistente = (await AlunoRepository.findAll())
                            .find((aluno) => aluno.nome === nome)

    if(!alunoExistente){

        await AlunoRepository.create(aluno, (error)=>{
            if(error){
                returnMessage = {
                    title: "Erro",
                    type: "CADASTRO",
                    message: "Não foi possivel cadastrar!"
                };
                console.log(error);
            }
            else{
                returnMessage = {
                    title: "Sucesso",
                    type: "CADASTRO",
                    message: "Aluno cadastrado com sucesso!"
                };
                console.log("Deveria ter cadastrado")
            }     
        });
    } 
    else{
        returnMessage = {
            title: "Erro",
            type: "CADASTRO",
            message: "Aluno já possui cadastro!"
        };
        console.log("ta cadastrado ja")
    }
    response.render('pages/cadastrar-aluno', {headerTitle: "Cadastrar Aluno", showListar : false, showMessage : returnMessage})
}

export default {getAllAlunos, postAluno}