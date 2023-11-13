
import Teacher from "../models/Teacher.js"


const saveTeacher= async(TeacherModel) => {
    const save = await Teacher.create(TeacherModel);
    return save;
}

const getAllTeachers = async() => { //tira o UserModel pq ele vai trazer todos, e nao apenas um especifico
    return await Teacher.findAll({
        order: [
            ['id','ASC'],
        ]}
    );


}

const getTeacherById = async(id) => { 
    return await Teacher.findByPk(id);

};

const deleteTeacherById = async(id) => { 
    return await Teacher.destroy({where: {id: id}});

};

const updateTeacherById = async (id, TeacherModel) =>{//TeacherModel pq ele precisa atualizar o modelo de acordo com o id que recebe
    try {
        const result = await Teacher.update(TeacherModel, {where: {id: id}})
        if(result[0] == 1){
            return {message: "Teacher updated with sucess"};
        } else {
            return {message: "can not find the user"};
        }
    }catch(error){
        console.error();
    }
};




const factory = {
    saveTeacher,
    getAllTeachers,
    getTeacherById,
    deleteTeacherById,
    updateTeacherById
}

export default factory;