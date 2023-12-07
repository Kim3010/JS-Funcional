// Funções e instancias 

function Pessoa() {
    this.nome = 'Eduardo'; // essa variavel se limita a funcao
}

let man = new Pessoa(); // instanciando a function Pessoa . Criando um novo objeto chamado man

man.nome = "Eduardo";

console.error(man.nome)