//Numeros
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000
//Precisão para ate 15 digitos

//Operadores Aritmeticos
var soma = 100 + 50; //150
var subtracao = 100 - 50; //50
var multiplicacao = 100 * 2; //200
var divisao = 100 / 2; //50
var expoente = 2 ** 4; //16
var modulo = 14 % 5; //4
//Lembrando que soma + em STINGS serve para concatenar

//Operadores Aritmeticos(STRING)
var soma1 = '100' + 50; //10050
var subtracao1 = '100' - 50; //50
var multiplicacao1 = '100' * '2'; //200
var divisao1 = 'Comprei 10' / 2; //NaN(Not a Number)

//É possivel verificar se uma variavel é NaN ou nao com a funcao isNaN()
var testeNan = 'isso é 100' / 2;
console.log(isNaN(testeNan));

//A ordem importa - Começa por multiplicação e divisao, depois por soma e subtração
var total1 = 20 + 5 * 2; //30
var total2 = (20 + 5) * 2; //50
var total3 = 20 / 2 * 5; //50
var total4 = 10 + 10 * 2 + 20 / 2; //40
//Parentes para priorizar uma expressão

//Operadores Aritmeticos Unarios
var incremento = 5;
console.log(incremento++);//5
console.log(incremento);//6

var incremento2 = 5;
console.log(++incremento2); //6
console.log(incremento2); //6
//Mesma coisa para o decremento --X

//Operadores Aritmeticos Unarios - O + e - tenta transformar o valor seguinte em numero
var frase = 'Isso é um teste';
+frase; //NaN
-frase; //NaN

var idade1 = '28';
+idade; //28 (Numero)
-idade; //-28 (Numero)
console.log(+idade + 5); //33

var possuiFaculdade = true;
console.log(+possuiFaculdade); //1
//O - antes de um numero torna ele num numero negativo

