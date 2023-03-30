//Funçãos - Bloco de codigo que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.
function areaQuadrado(lado){
    return lado * lado;
}
areaQuadrado(4); //16
areaQuadrado(5); //25
areaQuadrado(2); //4
//Chamada de function Declaration!!


//Funçao
function pi(){
    return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(total);
//Parenteses () executam uma função


//Parametro e Argumentos - Ao CRIAR uma funçao, voce pode definir PARAMETROS
//Ao EXECUTAR uma função, voce pode passar ARGUMENTOS.
            //Parametros
function imc(peso,altura){
    const imc = peso / (altura ** 2);
    return imc;
};

//Argumentos
imc(80, 1.80);//80 e 1.80 sao argumentos
imc(60, 1.70);//60 e 1.70 sao argumentos
//Separar por virgula cada parametro. voce pode definir mais de um parametro ou nenhum tambem.


//Parenteses executa a função
function corFavorita(cor){
    if(cor === 'azul'){
        return 'Voce gosta do ceu';
    }else if(cor === 'verde'){
        return 'voce gosta do mato';
    }else if(cor === 'amarelo'){
        return 'Voce gosta do sol';
    }else{
        return 'voce nao gosta de nada';
    };
};
corFavorita(); // Retorna 'voce nao gosta de nada'.
//se apenas defirnirmos a função com o function e nao executarmos a mesma, nada que estiver dentro dela ira acontecer


//Argumentos podem ser funçãos - chamadas de callback, geralmente são funçãos que occorem apos um evento.
addEventListener('click', function(){
    console.log('Clicou');
});
//A funçao possui dois argumentos
//Primeiro é a string 'click'
//Segundo é uma funçao anonima

//Funçaos anonimas são aquelas em que o nome da funçao nao é definido, escritas como function (){} OU () =>{};

function mostraConsole(){
    console.log('oi');
};

addEventListener('click', mostraConsole);