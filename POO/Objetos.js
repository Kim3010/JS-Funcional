// Aula 01 - DANKI CODE - Objetos na prática

let user = [
    { // essa seria a posicao 0 do objeto user
        'nome': 'Eduardo',
        'idade': 22,
        'profissao': 'developer react native'
    },
    {
        // essa seria a posicao 1 do objeto user
        'nome': 'Bianca',
        'idade': 20,
        'profissao': 'English Teacher'
    }
]

console.log(`Novo funcionario ! ${user[0].nome} tem ${user[0].idade} anos ,e trabalha como ${user[0].profissao}`)
console.log(`Novo funcionario ! ${user[1].nome} tem ${user[1].idade} anos ,e trabalha como ${user[1].profissao}`)