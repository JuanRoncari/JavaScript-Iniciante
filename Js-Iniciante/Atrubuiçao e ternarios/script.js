//Operadores de atribuiçaos - podem funcionar como formas abreviadas
x += y;
x -= y;
x *= y;
x /= y;
x %= y;
x **= y;

//Operador Ternario - abreviaçao de if else
var idade = 19;
var naoPossuiDiabetes = false;

var podeBeber = (idade >= 19 && naoPossuiDiabetes) ? 'Pode Beber' : 'Nao pode beber';
console.log(podeBeber);
//Condiçao ? true : false
//Geralmente utilizamos quando precisamos atribuir um valor para variavel, dependendo de uma condiçao