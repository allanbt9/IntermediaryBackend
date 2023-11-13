import express from "express"
let router = express.Router() //esse método Router é para roteamento



import evaluationService from "../services/EvaluationService.js"


router.post("/addEvaluation", async function(req,res) {//o posto é o método para adicionar o usuário
    //aqui dentro é a função callback que precisa ter o nosso modelo
    const evaluationModel = {
         first_name: req.body.first_name, //buscando da requisição que vc ta fazendo, o corpo desse modelo pra passar pro BD
         last_name: req.body.last_name,
         email: req.body.email,
         gender: req.body.gender
    }

    const evaluation = await evaluationService.saveEvaluation(evaluationModel);
    return res.status(200).json(evaluation);
});


router.get("/getAllEvaluation", async function(req,res){//aqui vai o mapeamento que vai ficar pronto pra ficar compativel com a aplicaçao frontend
    const allEvaluation = await evaluationService.getAllEvaluation();//
    return res.status(200).json(allEvaluation);
});


router.get("/evaluation/:id", async function(req,res){
    const evaluation = await evaluationService.getEvaluationById(req.params.id);//
    return res.status(200).json(evaluation);
});


router.delete("/deleteEvaluation/:id", async function(req,res){
    const evaluation = await evaluationService.deleteEvaluationById(req.params.id);//
    return res.status(200).json(evaluation);
});

router.put("/updateEvaluation/:id", async function(req,res){

    const evaluationModel = {
        first_name: req.body.first_name, 
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender
   }

    const evaluation = await evaluationService.updateEvaluationById(req.params.id,evaluationModel);//
    return res.status(200).json(evaluation);
});


export default router;