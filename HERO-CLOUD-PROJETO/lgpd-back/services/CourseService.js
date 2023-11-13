import courseRepository from "../repositories/CourseRepository.js"


const saveCourse = (courseModel) => {
    return courseRepository.saveCourse(courseModel);
};

const getCourseById = (id) => {
    return courseRepository.getCourseById(id);
};

const getAllCourse = () => {
    return courseRepository.getAllCourse();
};

const deleteCourseById = (id) => {
    return courseRepository.deleteCourseById(id);
};

const updateCourseById = (id,courseModel) => {
    return courseRepository.updateCourseById(id,courseModel);
};


const service = {
    saveCourse,
    getCourseById,
    getAllCourse,
    deleteCourseById,
    updateCourseById
}

export default service; //pra poder ser usado por outros pacotes do projeto