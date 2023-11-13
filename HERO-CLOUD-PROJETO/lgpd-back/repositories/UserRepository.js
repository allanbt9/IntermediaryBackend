
import User from "../models/User.js"

//agora vamos fazer a estrutura de salvar o nosso usuário

const saveUser = async(UserModel) => {
    const save = await User.create(UserModel);
    return save;
}

const getAllUses = async() => { //tira o UserModel pq ele vai trazer todos, e nao apenas um especifico
    return await User.findAll({
        order: [
            ['id','ASC'],
        ]}
    );


}

const getUserById = async(id) => { 
    return await User.findByPk(id);

};

const deleteUserById = async(id) => { 
    return await User.destroy({where: {id: id}});

};

const updateUserById = async (id, UserModel) =>{//UserModel pq ele precisa atualizar o modelo de acordo com o id que recebe
    try {
        const result = await User.update(UserModel, {where: {id: id}})
        if(result[0] == 1){
            return {message: "user updated with sucess"};
        } else {
            return {message: "can not find the user"};
        }
    }catch(error){
        console.error();
    }
};


const factory = {
    saveUser,
    getAllUses,
    getUserById,
    deleteUserById,
    updateUserById
}

export default factory;