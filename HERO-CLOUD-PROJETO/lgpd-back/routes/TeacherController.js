import express from "express"
let router = express.Router() //esse método Router é para roteamento



import teacherService from "../services/TeacherService.js"

router.post("/addTeacher", async function(req,res) {//o posto é o método para adicionar o usuário
    //aqui dentro é a função callback que precisa ter o nosso modelo
    const teacherModel = {
         first_name: req.body.first_name, //buscando da requisição que vc ta fazendo, o corpo desse modelo pra passar pro BD
         last_name: req.body.last_name,
         email: req.body.email,
         gender: req.body.gender
    }

    const teacher = await teacherService.saveTeacher(teacherModel);
    return res.status(200).json(teacher);
});


router.get("/getAllTeachers", async function(req,res){//aqui vai o mapeamento que vai ficar pronto pra ficar compativel com a aplicaçao frontend
    const allTeacher = await teacherService.getAllTeachers();//
    return res.status(200).json(allTeacher);
});


router.get("/teacher/:id", async function(req,res){
    const teacher = await teacherService.getTeacherById(req.params.id);//
    return res.status(200).json(teacher);
});


router.delete("/deleteTeacher/:id", async function(req,res){
    const teacher = await teacherService.deleteTeacherById(req.params.id);//
    return res.status(200).json(teacher);
});

router.put("/updateTeacher/:id", async function(req,res){

    const teacherModel = {
        first_name: req.body.first_name, 
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender
   }

    const teacher = await teacherService.updateTeacherById(req.params.id,teacherModel);//
    return res.status(200).json(teacher);
});




export default router;