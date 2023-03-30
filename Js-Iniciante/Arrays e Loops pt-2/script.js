//Arrays e loops
var videosGames = ['Switch','PS4','Xbox','3DS'];
for(var i = 0; i < videosGames.length; i++){
    console.log(videosGames[i]);
};

//break - O loop ira parar caso encontre a palavra Break.
var videosGames = ['Switch','PS4','Xbox','3DS'];
for(var i = 0; i < videosGames.length; i++){
    console.log(videosGames[i]);
    if(videosGames[i] === 'PS4'){
        break;
    }
}

//ForEach - é um metodo que executa uma função para cada item da array. é uma forma mais simples de utilizarmos
//um loop com array(ou array-like)
var frutas = ['banana','pera','uva','maça'];
frutas.forEach(function(item,index,array){
    console.log(item,index,array);  
});
//O argumento item sera atribuida dinamicamente
//Podemos passar os seguintes parametros item,index,array