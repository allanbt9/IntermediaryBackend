import userRepository from "../repositories/UserRepository.js"


//o service sempre vai chamar o repository

//vamos fazer as nossas ações do CRUD
const saveUser = (userModel) => {
    return userRepository.saveUser(userModel);
};

const getUserById = (id) => {
    return userRepository.getUserById(id);
};

const getAllUsers = () => {
    return userRepository.getAllUsers();
};

const deleteUserById = (id) => {
    return userRepository.deleteUserById(id);
};

const updateUserById = (id,userModel) => {
    return userRepository.updateUserById(id,userModel);
};


const service = { //aqui vamos expor a nossa estrutura ao nosso método
    saveUser,
    getUserById,
    getAllUsers,
    deleteUserById,
    updateUserById
    
}

export default service; //pra poder ser usado por outros pacotes do projeto