import express from "express"
let router = express.Router() //esse método Router é para roteamento



import courseService from "../services/CourseService.js"



router.post("/addCourse", async function(req,res) {//o posto é o método para adicionar o usuário
    //aqui dentro é a função callback que precisa ter o nosso modelo
    const courseModel = {
         first_name: req.body.first_name, //buscando da requisição que vc ta fazendo, o corpo desse modelo pra passar pro BD
         last_name: req.body.last_name,
         email: req.body.email,
         gender: req.body.gender
    }

    const course = await courseService.saveCourse(courseModel);
    return res.status(200).json(course);
});


router.get("/getAllCourse", async function(req,res){//aqui vai o mapeamento que vai ficar pronto pra ficar compativel com a aplicaçao frontend
    const allCourse = await courseService.getAllCourse();//
    return res.status(200).json(allCourse);
});


router.get("/course/:id", async function(req,res){
    const course = await courseService.getCourseById(req.params.id);//
    return res.status(200).json(course);
});


router.delete("/deleteCourse/:id", async function(req,res){
    const course = await courseService.deleteCourseById(req.params.id);//
    return res.status(200).json(course);
});

router.put("/updateCourse/:id", async function(req,res){

    const courseModel = {
        first_name: req.body.first_name, 
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender
   }

    const course = await courseService.updateCourseById(req.params.id,courseModel);//
    return res.status(200).json(course);
});


export default router;