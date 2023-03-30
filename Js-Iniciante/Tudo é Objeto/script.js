//Tudo é objeto - Strings,Números,Boolean,Objetos e mais,possuem propriedades e metodos. Por isso são objetos
var nome = 'Juan';

nome.length; //4; total de caractere
nome.charAt(1); //u; retorna o caractere da 1 
nome.replace('an', 'uan'); // ele troca o an pelo uan
nome;//Juan
//Uma string herda propriedades e metodos do construtor STRING()


//Numeros
var altura = 1.8;
altura.toString(); //'1.8'
altura.toFixed(); // '2'
//Por um breve momento o numero é envolvido em um Objeto (coerção), tendo acesso assim as suas prioridades
//e metodos

//Funçaos 
function areaQuadrado(lado){
    return lado * lado;
};
areaQuadrado.toString();
//'function areaQuadrado(lado){
//  return lado * lado;
//'};
areaQuadrado.length; //1


//Elementos do Dom
var btn = document.querySelector('.btn');

btn.classList.add('azul');//Adiciona a classe azul
btn.innerText; //'clique'
btn.addEventListener('click',function(){
    console.log('clicou')
});
//Praticamente todos os efeitos com JS são feitos utilizando propriedades e metodos de objetos do DOM.