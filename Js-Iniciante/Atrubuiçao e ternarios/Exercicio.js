//some 500 ao valor de scroll abaixo,atribuindo o novo valor a scroll
var scroll = 1000 
scroll += 500;
console.log(scroll);

//Atribua true para a variavel dar credito, caso o cliente possua carro e casa. e false caso o contrario
var possuiCarro = true;
var possuiCasa = true;

var darCredito = (possuiCarro && possuiCasa) ? 'Dar Credito' : 'Nao dar credito';
console.log(darCredito);