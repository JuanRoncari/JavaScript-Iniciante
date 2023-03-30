//Criar um Objeto - Um objeto é criado utilizando as chaves {}
var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'


//Dot Notation Get - Acesse propriedades de um objeto utilizando o ponto.
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
};

menu.backgroundColor = '#000'; // Alterou a cor do background do objeto menu
menu.color = 'blue'; //Adicionou color no objeto menu
menu.esconder = function(){ // adicionou uma funçao no objeto menu
    console.log('escondi'); 
}

var bg = menu.backgroundColor; //'#84E'


//Adicionar propriedades e metodos - Basta adicionar um novo nome e definir o valor
var menu1 = {
    width:700,
};

menu1.color = '#f7f7f7'; //Adicionou color no objeto menu1
menu1.position = 'fixed'; //Adicionou position no objeto menu1


//Palavra chave-this - this ira fazer uma referencia ao proprio objeto.
var height = 120;
var menu2 = {
    width: 800,
    height:50,
        metadeHeight(){
            return this.height / 2;
        },
};

menu.metadeHeight();//25
//Sem o this, seria 60
//this ira retornar o proprio objeto 'menu2/height';


//Prototipo e Herança - O objeto herda propriedade e metodos do objeto que foi utilizado para criar o mesmo.
var menu3 = {
    width:800,
};
menu3.hasOwnProperty('width')//true; hasOwnProperty verifica se width possui no bloco de objeto criado
menu3.hasOwnProperty('height')//false;
//hasOwnProperty é um metodo de Object