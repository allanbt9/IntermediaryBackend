import {createServer } from 'http'; //é o padrao pra relacionamento de localhost com web
import {readFile} from 'fs'; 


createServer(function(req,res){//uma função de requisição/resposta
    readFile('demo-readFile.html', function(err, data){ //esse function é pra tratamento de possíveis erros
        //readFile é um método da dependencia FS que irá buscar o arquivo .html
        res.writeHead(200,{"Content-Type": 'text/html'});
        //será escrito na nossa resposta. o status code será 200 e o tipo do contet-type será texto e html
        res.write(data);//ele pegou o data do arquivo que foi passado no readFIle como parâmetro
        return res.end();
    });
}

).listen(8080)//escutar da porta 8080