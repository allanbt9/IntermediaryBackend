import evaluationRepository from "../repositories/EvaluationRepository.js"



const saveEvaluation = (evaluationModel) => {
    return evaluationRepository.saveEvaluation(evaluationModel);
};

const getEvaluationById = (id) => {
    return evaluationRepository.getEvaluationById(id);
};

const getAllEvaluation = () => {
    return evaluationRepository.getAllEvaluation();
};

const deleteEvaluationById = (id) => {
    return evaluationRepository.deleteEvaluationById(id);
};

const updateEvaluationById = (id,evaluationModel) => {
    return evaluationRepository.updateEvaluationById(id,evaluationModel);
};



const service = {
    saveEvaluation,
    getEvaluationById,
    getAllEvaluation,
    deleteEvaluationById,
    updateEvaluationById
}

export default service; //pra poder ser usado por outros pacotes do projeto