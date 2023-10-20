const http = require('http'); //é uma contante que recebe o objeto http para subir no server
 
const hostname = '127.0.0.1';//é a configuração para definir onde o server estará localizado (nesse ip ai definido)
const port = 3000; //a definição da porta do localhost
 
const server = http.createServer((req, res) => { //essa constante configura o server que vc está subindo na sua máquina
  //o método createServer é do módulo require armazenado no objeto chamado de http
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain'); //o header da página
  res.end('Hello World'); //e o texto em si
});
 
server.listen(port, hostname, () => {//o server.listen serve para ficar escutando oq está sendo enviado pelo server criado acima

  console.log(`Server running at http://${hostname}:${port}/`); //a mensagem escrita no terminal
});


/**
 * Once we have installed Node.js,
 *  let's build our first web server. 
 * Create a file named app.js containing the following contents:
 * 
 * Now,run your web server using node app.js. 
 * Visit http://localhost:3000 and you will see a message saying "Hello World".
 */