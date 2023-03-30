//Boolean - Existem dois valores booleanos TRUE e False
var possuiGraduação = true;
var possuiFaculdade = false;

//Condicionais IF e Else - Verificar se uma expressao é verdadeira com if, caso contrario o Else sera ativado.
var possuiGraduação = true;

if(possuiGraduação){
    console.log('Possui Graduação');
}else {
    console.log('Nao possui Graduação');
};
//Retorna possui Graduacao e nao executa o else.
//O valor dentro dos parenteses sempre sera avaliado em FALSE ou TRUE.

//Condicionais Else if - Se o IF nao for verdadeiro, ele testa o Else If
var possuiGraduação = true;
var possuiDoutorado = false;

if(possuiDoutorado){
    console.log('Possui Graduação e doutorado');
}else if(possuiGraduação){
    console.log('Possui Graduação, mas nao possui doutorado');
}else{
    console.log('Não possui Graduaçao e nem doutorado');
};
//Retorna Possui Graduação, mas nao possui doutorado

//Truthy e Falsy - Existem valores que retornam TRUE e outros que retornam FALSE quando verificados em uma expressao booleana.

//Falsy
if(false);
if(0);
if(NaN);
if(null);
if(undefined);
if(''); //ou "" ou ``
//Todo resto é truthy.

//Truthy
if(true);
if(1);
if(' ');
if('andre');
if(-5);
if({});

//Operador Lógico de negação ! - O operador !, nega uma operação booleana. ou seja !true vira false.
//Truthy
if(!true); // false
if(!1); //false
if(!''); //true
if(!undefined); //true
if(!!' ') //true
if(!!''); //false
//Dica, voce pode utilizar o !! para verificar se uma expressao é truthy ou falsy

//Operadores de comparação - Vao sempre retornar um valor booleano
10 > 5; //true
5 > 10; //false
20 < 10; //false
10 <= 10; //true
10 >= 11; //false

//Operadores de comparação - O == faz uma comparaçao nao tao estrita, o === faz uma comparacao estrita, o tipo de dado deve ser o mesmo quando usamos ===
10 == '10'; //true
10 == 10; //true
10 === '10'; //false
10 === 10; //true
10 != 15; //true
10 != '10'; //false
10 !== '10'; //true



