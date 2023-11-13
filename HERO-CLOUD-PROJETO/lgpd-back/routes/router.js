import express from "express";
let router = express.Router();//ele vai fazer o mapeamento das nossas rotas que estão no nosso Controller


import userController from "./UserController";
import courseController from "./CourseController";
import teacherController from "./TeacherController";
import evaluationController from "./EvaluationController";

/*
Esse router é o arquivo que vai disponibilizar pro nosso frontend, as rotas que o backend possue
para acontecer o relacionamento na web
*/

router.get("/", function(req,res){///router.get espera uma função que tenha requisição e resposta (pq estamos falando de uma aplicação web)
    console.log("oi!");
    res.status(200).json({message: "oi"})//setar um status de 200 e um json com uma mensagem para saber que funcionou
});

router.use('/',userController);
router.use('/',teacherController);
router.use('/',courseController);
router.use('/',userController);



export default router;
