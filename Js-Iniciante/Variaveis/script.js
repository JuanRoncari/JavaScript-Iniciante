//Variaveis
var nome = 'Juan';
var idade = 22;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

//Sintaxe - Palavra VAR seguida pelo nome e sinal de igual.
var preco = 20;
var totalComprado = 5;
var totalPreco = preco * totalComprado;

console.log(totalPreco);

//Virgula - Utiliza virgula para criar mais de uma VAR sem repetir a palavra VAR.
var sobrenome = 'Roncari',
    cpf = 000000000,
    rg = 000000000,
    endereço = 'Cravos';

console.log(sobrenome, cpf);

//Sem Valor - Declara variavel e nao atribui valor inicinalmente.
var semDefinir;
console.log(semDefinir);
//Retorna Undefined

//Valido
var $nome;
var _nome;
var possuiFaculdadeNoExterior;

//Hoisting - São movidas para cima do codigo, porém o valor atribuido nao é movido
console.log(nome);
var nome = 'Juan';
//Retorna Undefined.

var profissao = 'Desenvolvedor';
console.log(profissao);
//Retorna Desenvolvedor

//Mudar um valor atribuido - É possivel mudar os valores atribuidos a variaveis declaradas com VAR e Let. Porem const NÃO
var idade1 = 22,
    idade1 = 23;

let preco1 = 50;
preco1 = 55;

const possuiFaculdade1 = true;
possuiFaculdade1 = false;
//Retorna um Erro.