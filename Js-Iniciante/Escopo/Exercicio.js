//Por qual motivo o codigo abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'fiat';
    let portas = 4;
    console.log(marca,portas,cor);
}
console.log(cor,marca,portas); //Retorna erro pois let e const nao vaza do bloco!!

//Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x){
    return x + dois;
}
function dividirDois(x){
    return x + dois;
}
somarDois(4);
dividirDois(6);

//O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++){
    console.log(numero);
};

const total = 10 * numero;
console.log(total);