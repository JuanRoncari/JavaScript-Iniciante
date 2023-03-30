//Crie uma array com os anos que o brasil ganhou a copa 1959,1962,1970,1994,2002
var brasil = ['1959','1962','1970','1994','2002'];

//Interaja com a array utilizando um loop, para mostrar no console 'o brasil ganhou a copa de ${ano}
for(var i = 0; i < brasil.length; i++){
    console.log('O brasil ganhou a copa de ' + brasil[i]);
}

//interaja com um loop nas frutas abaixo e pare ao chegar em pera
var frutas =['banana','maça','pera','uva','melancia'];
for(var fruta = 0; fruta <  frutas.length; fruta++){
    console.log(frutas[fruta]);
    if(frutas[fruta] === 'pera'){
        break;
    };
};

//Coloque a ultima fruta da array acima em uma variavel,sem remover a mesma da array
var ultimaFruta = frutas[frutas.length - 1];

