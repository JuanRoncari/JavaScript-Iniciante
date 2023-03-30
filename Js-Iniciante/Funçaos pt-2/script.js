//Pode ou nao retornar um valor - Quando nao definimos o return, ela ira retornar UNDEFINED.
//O codigo interno da função é executado normalmente, independente de existir valor de return ou nao.
function imc2(peso, altura){
    const imc2 = peso / (altura * altura);
    console.log(imc2);
};
imc2(20, 1.50); //UNDEFINED
console.log(undefined); //UNDEFINED 


//Valores retornados - Uma função pode retornar qualquer tipo de dado e ate outras funçãos
function terceiraIdade(idade){
    if(typeof idade !== 'number'){
        return 'Informe sua idade!';
    }else if(idade >= 60){
        return true;
    }else{
        return false;
    };
};
console.log(terceiraIdade('oi'));
//Cuidado, retornar diferentes tipos de dados na mesma função nao é uma boa ideia.


//Escopo - Variaveis e funçãos definidas dentro de um bloco {}, não são visiveis fora dele.
function paisesJaVisitados(paisesVisitados){
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
};

//Ecopo lexico - Funçãos conseguem acessar variaveis que foram criadas no contexto PAI
var profissao = 'Designer';
function dados(){
    var nome = 'juan';
    var idade = 22;
        function outrosDados(){
            var idade = 22;
            var endereco = 'Batatais';
            return `${nome}, ${idade}, ${endereco}, ${profissao}`;
        };
    return outrosDados();
};

dados(); //Retorna Juan,22,Batatais,Designer
//outrosDados(); //Retorna Erro.


/*
//Hoisting - Antes de executar uma funçao, o JS MOVE todas as funçãos declaradas para a memoria
imc(80, 1.80); //imc aparece no console

function imc(peso,altura){
    const imc = peso / (altura ** 2);
    console.log(imc);
};
*/
