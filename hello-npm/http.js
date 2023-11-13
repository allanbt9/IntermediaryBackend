import {createServer } from 'http'; //é o padrao pra relacionamento de localhost com web
import {readFile} from 'fs'; 


createServer(function(req,res){//uma função de requisição/resposta
    
    res.write("Hello World Descomplica"); //apenas pra printar na tela
    res.end();
  
}).listen(8080)//escutar da porta 8080



//sempre que quiser usar um server, só criar um arquivo e usar o createServer desse jeito