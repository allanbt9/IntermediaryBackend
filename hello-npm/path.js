import { basename, dirname } from "path";


let nomeArquivo = basename('./teste.txt');
let filename = basename('/test/something');

let dir = dirname('/test/something');
let diretorio = dirname('/test/something/file.txt');

console.log('nome do arquivo ->' + nomeArquivo);
console.log('filename ->' + filename);

console.log('dir ->' + dir);
console.log('diretório ->' + diretorio);

//rode esse código no terminal com o comando node path.js
//vc verá que ele irá printar de várias formas diferentes, pq ele pega coisas diferentes
// o basename ele tenta pegar só o nome do arquivo, o dirname pega só o nome do diretório