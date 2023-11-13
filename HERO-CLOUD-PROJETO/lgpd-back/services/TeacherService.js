import teacherRepository from "../repositories/TeacherRepository.js"


const saveTeacher = (teacherModel) => {
    return teacherRepository.saveTeacher(teacherModel);
};

const getTeacherById = (id) => {
    return teacherRepository.getTeacherById(id);
};

const getAllTeachers = () => {
    return teacherRepository.getAllTeacher();
};

const deleteTeacherById = (id) => {
    return teacherRepository.deleteTeacherById(id);
};

const updateTeacherById = (id,teacherModel) => {
    return teacherRepository.updateTeacherById(id,teacherModel);
};


const service = {//precisa expor todas as estruturas pra os outros modulos enxergarem
    saveTeacher,
    getTeacherById,
    getAllTeachers,
    deleteTeacherById,
    updateTeacherById
}

export default service; //pra poder ser usado por outros pacotes do projeto