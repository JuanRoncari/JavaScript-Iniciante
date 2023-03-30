//Objetos - Conjunto de variaveis e funçaos, que são chamadas de propriedades e metodos.
var pessoa = {
    nome: 'Andre',
    idade: 28,
    profissao:'Designer',
    possuiFaculdade: true,
};
pessoa.nome; //Andre
pessoa.possuiFaculdade; //true
//Propriedades e metodos consistem em nome (chave) e valor.


//Metodos - é uma propriedade que possui uma função no local do seu valor.
var quadrado = {
    lados: 4,
    area:function(lado){
        return lado * lado;
    },
    perimetro:function(lado){
        return this.lados * lado;
    }
};

console.log(quadrado.area(4));
console.log(quadrado.perimetro(4));


//Metodos - Abreviação de area: function(){} para area(){}, no ES6+
var quadrado1 ={
    lados:4,
    area(lado){
        lado * lado;
    },
    perimetro(lado){
        return this.lados * lado;
    },
};


//Organizar o codigo - Objetos servem para organizar o codigo em pequenas partes reutilizaveis
Math.PI; //3.14
Math.random(); //numero aleatorio
var pi = Math.PI;
console.log(pi); // 3.14
//Math é um objeto nativo de Javascript. Ja percebeu que console é um objeto e log() um metodo?