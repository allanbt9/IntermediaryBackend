import {createServer } from 'http'; //é o padrao pra relacionamento de localhost com web
import { parse } from 'url';
import {readFile} from 'fs'; 


createServer(function(req,res){
    const q = parse(req.url, true); //essa constante é uma parte da minha url, e vai receber uma requisição, e 
    //acessar a url da minha pág
    const filename = "." + q.pathname; //esse filname são os arq html que eu peguei, q.pathname é 

    //console.log("pathname: " + q.pathname);

    readFile(filename, function(err, data){ //ele vai pegar, pela url da requisição, o nome do arquivo que será exibido na tela do localhost
        if(err){
            res.writeHead(404,{"Content-Type": "text/html"});
          
            return res.end("404 not found!");
        }

        //readFile é um método da dependencia FS que irá buscar o arquivo .html
        res.writeHead(200,{"Content-Type": 'text/html'});
        res.write(data);
        return res.end();
    });
  
}).listen(8080)//escutar da porta 8080




/*
aqui eu criei um servidor e fiz um tratamento de URL,
assim consigo, através deste server, puxar os arquivos verao.html e inverno.html

o parse do pacote url serve pra fazer esse tratamento da url do navegador

se for colocado apenas localhost:8080 ele irá retornar um 404 not found, pq?
pq nao foi dado um caminho para ele encontrar, ai ele cai no primeiro if

*/