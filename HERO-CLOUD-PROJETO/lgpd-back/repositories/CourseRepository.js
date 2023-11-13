//aqui a gente começa a preparar a nossa aplicação para ter um tratamento de dados e poder criar um CRUD

const saveCourse= async(CourseModel) => {
    const save = await Course.create(CourseModel);
    return save;
}

const getAllCourse = async() => { //tira o UserModel pq ele vai trazer todos, e nao apenas um especifico
    return await Evaluation.findAll({
        order: [
            ['id','ASC'],
        ]}
    );


}

const getCourseById = async(id) => { 
    return await Course.findByPk(id);

};

const deleteCourseById = async(id) => { 
    return await Course.destroy({where: {id: id}});

};

const updateCourseById = async (id, CourseModel) =>{//TeacherModel pq ele precisa atualizar o modelo de acordo com o id que recebe
    try {
        const result = await Course.update(CourseModel, {where: {id: id}})
        if(result[0] == 1){
            return {message: "Course updated with sucess"};
        } else {
            return {message: "can not find the user"};
        }
    }catch(error){
        console.error();
    }
};


import User from "../models/User.js"


const factory = {
    saveCourse,
    getAllCourse,
    getCourseById,
    deleteCourseById,
    updateCourseById
}

export default factory;