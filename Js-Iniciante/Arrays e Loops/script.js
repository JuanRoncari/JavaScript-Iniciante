//Arrays - É um grupo de valores geralmente relacionados.Servem para guardarmos diferentes valores em uma unica variavel.
var videoGames = ['Switch','PS4', 'Xbox'];

videoGames[0];//Switch
videoGames[2];//Xbox
//Acesse um elemento de array utilizando [n].

//Metodos e propriedades de array
videoGames.pop(); //Remove o ultimo item e retorna ele
videoGames.push('3DS'); //Adiciona ao final da array
videoGames.length; //3
//Existem diversos outros metodos, como MAP,REDUCE,FOREACH e mais que veremos mais a frente

//For loop - Fazem algo repetidamente ate que uma condição seja atingida.
for(var numero = 0; numero < 10; numero++){
    console.log(numero);
};
//Retorna de 0 a 9 no console
//for loop possui 3 partes, inicio,condição e incremento

//While loop
var i = 0;
while(i < 10){
    console.log(i);
    i++
};
//retorna de 0 a 9
//O for loop é mais comum