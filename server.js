import express from "express";
import bodyParser from "body-parser";
import database from "./database/db.js";
import alunosRotas from "./src/app/routes/alunosRotas.js";

const server = express();
server.use(express.static('./src/assets'));
// server.use(express.static("./src/assets/styles"));

server.set('view engine', 'ejs');
server.set("views", "./src/app/views");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));
server.use(alunosRotas);

(async () => {
    try {
        const resultado = await database.sync();
        console.log(resultado);
        server.listen(3000, 
            console.log(`Servidor rodando na porta ${3000}`)
        );
    } catch (error) {
        console.log(error);
    }
})();


// db.sync().then(()=>{
//     server.listen(
//         process.env.PORT),
//         ()=>{
//             console.log(`Servidor rodando na porta ${process.env.PORT}`);
//         }
// }).catch((error)=>{
//     console.log(`Erro de conexão com o banco: ${error}`);
// })
