// 7 tipos de Dados - Todos são primitivos exceto os objetos.
var nome = 'Juan' //String
var idade = 22; //Number
var possuiFaculdade = true; //Boolean
var time; //Undefined
var comida = null; //Null
var simbolo = Symbol(); //Symbol
var novoObjeto = {}; //Objeto

//Verificar tipo de Dado
var nome1 = 'Juan';
var idade1 = 28;
console.log(typeof nome1);
console.log(typeof idade1);

//String - Voce pode somar uma string e assim concatenar as palavras.
var nome2 = 'Cesar';
var sobrenome = 'Roncari';
var nomeCompleto = nome2 + ' ' +sobrenome;
console.log(nomeCompleto);

//String - Voce pode somar números com strings, o resultado final é sempre uma string.
var gols = 1000;
var frase = 'Romario fez ' + gols + ' Gols';
console.log(frase);

//Template String
var gols1 = 1500;
var frase1 = 'Romario fez ' + gols1 + ' Gols';
var frase2 = `Romario fez ${gols1 * 2} Gols`; //Utilizando Template String
console.log(frase2);