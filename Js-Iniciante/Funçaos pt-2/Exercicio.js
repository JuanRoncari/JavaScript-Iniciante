//Crie uma função para verificar se um valor é Truthy
function truthy(dado){
    return !!dado
};

//Crie uma funçao matematica que retorne o perimetro de um quadrado
function areaQuadrado(lado){
    return lado ** 4;
}
console.log(areaQuadrado(4));

//Crie uma funçao que retorne o seu nome completo ela deve possuir os parametros nome e sobrenome
function nomeCompleto(){
    var nome = 'Juan';
    var sobrenome = 'Roncari';
    return `${nome}${sobrenome}`;
};
console.log(nomeCompleto());

//Crie uma funçao que verifica se o numero é par
function numeroPar(numero){
    var modulo = numero % 2;
    if(modulo === 0){
        return true;
    }else{
        return false;
    };
};

//Crie uma funçao que retorne o tipo de dado do argumento passado nela TYPEOF
function tipoDeDado(dado){
    return typeof dado;
};

//AddEventListener é uma funçao nativa do JavaScript o primeiro parametro é o evento que ocorre e o segundo
//o Callback,utilize essa funçao para aparecer seu nome quando der click na pagina
addEventListener('click', function(){
    console.log('JuanRoncari');
});

//Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados){
    return `Ainda faltam ${totalPaises - paisesVisitados} Paises para visitar`;
};
function jaVisitei(paisesVisitados){
    return `Ja visitei ${paisesVisitados} do total de ${totalPaises} Paises`;
};

precisoVisitar(20);
jaVisitei(20);


