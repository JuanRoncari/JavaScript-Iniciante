//Operadores logicos && - && Compara se uma expressao e a outra é verdadeira.
true && true; //true
true && false; //false
false && true; //false
'gato' && 'cao'; //cao
(5 - 5) && (5 + 5); //0
//Se ambos os valores forem true ele ira retornar o ultimo valor verificando se algum valor false ele nao continua a comparaçao.

if((5 - 5) && (5 + 5)){
    console.log('Bloco Verdadeiro');
}else{
    console.log('Bloco Falso');
};

var condicional = (5 - 10) && (5 + 5)
if(condicional){
    console.log('Bloco Verdadeiro');
}else{
    console.log('Bloco Falso');
};

//Operadores Lógicos || - || compara se uma expressao ou outra é verdadeira
true || true; //true
true || false; //true
false || true; // true
'Gato' || 'cao'; //Gato
(5 - 5) || (5 + 5); //10
'Gato' || false; //Gato
(5 >= 5) || (3 < 6); //true
//Retorna o primeiro valor true que encontrar

var condicional2 = (5 - 5) || (5 + 5) && (10 -5);
console.log(condicional2)

//Switch - voce pode verificar se uma variavel é igual a diferentes valores utilizando case.Caso ela seja igual,
//voce pode fazer alguma coisa e utilizar a palavra-chave break;

var corFavorita = 'Azul';

switch(corFavorita){
    case 'Azul':
        console.log('Olhe para o ceu');
        break;
    case 'Vermelho':
        console.log('Olhe para rosas');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol');
        break;
    default:
        console.log('Feche os Olhos');
}