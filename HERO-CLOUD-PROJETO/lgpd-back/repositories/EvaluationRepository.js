
import Evaluation from "../models/Evaluation.js"


const saveEvaluation= async(EvaluationModel) => {
    const save = await Teacher.create(EvaluationModel);
    return save;
}

const getAllEvaluation = async() => { //tira o UserModel pq ele vai trazer todos, e nao apenas um especifico
    return await Evaluation.findAll({
        order: [
            ['id','ASC'],
        ]}
    );


}

const getEvaluationById = async(id) => { 
    return await Evaluation.findByPk(id);

};

const deleteEvaluationById = async(id) => { 
    return await Evaluation.destroy({where: {id: id}});

};

const updateEvaluationById = async (id, EvaluationModel) =>{//TeacherModel pq ele precisa atualizar o modelo de acordo com o id que recebe
    try {
        const result = await Evaluation.update(EvaluationModel, {where: {id: id}})
        if(result[0] == 1){
            return {message: "Evaluation updated with sucess"};
        } else {
            return {message: "can not find the user"};
        }
    }catch(error){
        console.error();
    }
};


const factory = {
    saveEvaluation,
    getAllEvaluation,
    getEvaluationById,
    deleteEvaluationById,
    updateEvaluationById
}

export default factory;