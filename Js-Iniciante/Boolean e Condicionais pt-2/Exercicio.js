//Verifique se a sua idade é maior do que a de um parente, dependendo do resultado coloque 'maior' ou 'menor'
var minhaIdade = 19;
var idadeParente = 22;

if(minhaIdade > idadeParente){
    console.log('Maior');
}else if(minhaIdade == idadeParente){
    console.log('Igual');
}else{
    console.log('Menor');
};

//Qual valor e retornado na expressao seguinte?
                   //V          V         V
var expressao1 = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao1); // Retorna o valor 3 na primeira expressao

//Verifique se as seguintes variaveis são truthy ou falsy
var nome = 'Andre'; //truthy
var idade = 28; //truthy
var possuiDoutorado = false; //falsy
var empregoFuturo; //falsy
var dinheiroNaConta = 0; //falsy
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

//Compare o total de habitantes do brasil com china (valor em milhaos)
var brasil = 207;
var china = 1340;

if(brasil > china){
    console.log('Brasil tem mais habitantes');
}else{
    console.log('China tem mais habitantes');
};

//O que ira aparecer no console?
if(('Gato' === 'gato') && (5 > 2)){
    console.log('Verdadeiro');
}else{
    console.log('False');
};

//O que ira aparecer no console?
if(('Gato' === 'gato') || (5 > 2)){
    console.log('Gato' && 'Cao');
}else{
    console.log('False');
};


