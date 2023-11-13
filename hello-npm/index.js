import inquirer from "inquirer";


//o then() é para ter a estrutura da resposta para a sua pergunta
//then() é a resposta e o prompt() é a pergunta
//e com essa resposta vc faz o tratamento ou retorna o erro pro usuário
inquirer.prompt(
    //o prompt será uma lista separada por chaves
    [
        {
            type: 'input',
            name: 'nome',
            message: 'Qual o seu nome?',
        },{
            type: 'list',
            name: 'idade',
            message: 'Qual a sua idade?',
            choices: [
                '29 a 39',
                '40 a 50',
                '50+'
            ]
        }

    ]
).then((answers) => {
    console.log(
        "Oi " + answers.nome + 
        " com " + answers.idade + " anos de vida"
    );

});//aqui será uma estrutura de respostas que vem de um lambda