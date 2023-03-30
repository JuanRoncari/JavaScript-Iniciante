//Escopo de Função - variaveis declaradas dentro de funçãos nao sao acessadas fora das mesmas.
function mostrarCarro(){
    var carro = 'Fusca';
    console.log(carro);
};
mostrarCarro(); // fusca no console
console.log(carro); //Erro, carro is not defined
//Escopo evita o conflito entre nomes.


//Variavel Global(ERRO) - declarar variaveis sem a palavra VAR,LET,CONST, cria uma variavel que pode 
//ser acessada em qualquer escopo(global). isso é um erro
function mostrarCarro(){
    carro = 'fusca';
    console.log(carro);
};
mostrarCarro(); //Fusca
console.log(carro); //fusca
//'USE STRICT' impede isso.


//Escopo de funçao(pai) - Variaveis declaradas no escopo pai da funçao, conseguem ser acessadas pelas funçaos
var carro = 'fusca';
function mostrarCarro(){
    var frase = `Meu carro é um ${carro}`;
    console.log(frase);
};
mostrarCarro();//Meu carro é um fusca
console.log(carro);//fusca


//Escopo de bloco - var vaza a variavel do bloco de escopo, utilize let e const
if(true){
    var carro = 'fusca';
    console.log(carro);
};
console.log(carro); // carro

//Const e let no lugar de var - const e let a partir de agora.
if(true){
    const carro = 'fusca';
    console.log(carro);
}
console.log(carro);//erro, carro is not defined


//{} cria um bloco - criam um escopo de bloco, nao confundir com a criação de objetos ={}
[
    var carro = 'fusquinha';
    const ano = 2018;
]
console.log(carro);//carro
console.log(ano); //erro, ano is not defined


//for loop com let - evitamos que o numero vaze.
for(let i = 0; i < 10; i++){
    console.log(`Numero ${i}`);
};
console.log(i);//i is not defined


//Const - Mantem o escopo no bloco, impede a redeclaraçao e impede a modificaçao do valor da varialve
//evitando bugs no codigo 
const mes = 'dezembro';
mes = 'janero'; //Erro, tentou modificar o valor
const semana; // erro, declarou sem valor

const data ={
    dia:28,
    mes:'Dezembro',
    ano:2018,
}

data.dia = 29;//funciona
data = 'Janeiro'; //erro


//Let - mantem o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variavel.
let ano1;
ano1 = 2019;
ano1++;
console.log(ano1);//2020
let ano1 = 2021; //erro, redeclarou a variavel
//Geralmente vamos utilizar o const.
