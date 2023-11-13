import {express} from "express";
import {pkg} from "body-parser"
import {router} from "./routes/router.js" //vai disponibilizar as rotas pro frontend usar

import sequelize from "./utils/database.js"
import association from "./models/Association.js"

//agora vamos ter uma função assincrona que cria e popula o BD com tabelas vazias
const app = express(); //a nossa aplicação é gerada pelo express
const {json, urlendcoded} = pkg;


app.use(json());
app.use(urlendcoded({extended: true}))


//vamos ter a inicialização do sequelize antes de disponibilizarmos a nossa aplicação
(async () => {
    try {
        association.associations();//
        await sequelize.sync();//vamos esperar o sequelize sincronizar

        app.listen(3000, function(){ //porta 3000 é o padrao pra aplicações express
            //não precisa de todo aquele código feito antes
            console.log("Listening from 3000");
        
        });

    } catch (error) {
       console.log(error); 
    }
})();





app.use("/", router);