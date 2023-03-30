//Crie um Objeto com os seus dados pessoais
var dadosPessoais ={
    nome:'Juan',
    sobrenome:'Roncari',
    idade:22,
    profissao:'Desenvolvedor Front-End',
    jogoPreferido:'League of Legends',
    bandaFavorita:'Bring me the horizon',
};

//Crie um metodo no objeto anterior, que mostre seu nome completo
dadosPessoais.nomeCompleto = ()=>{
    return `${this.nome}${this.sobrenome}`;
};

//Modifique o valor da propriedade preco para 3000
var carro = {
    preco:1000,
    portas:4,
    marca:'Audi',
};
carro.preco = 3000;

//Crie um Objeto de um cachorro que represente um labrador, preto,com 10 anos,que late ao ver um homen
var cachorro = {
    raca:'labrador',
    cor:'preto',
    idade: 10,
    latir(pessoa){
        if(pessoa === 'homen'){
            return 'latir';
        }else{
            return 'Nada';
        }
    }
}
