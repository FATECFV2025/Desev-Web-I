 function teste(){
            alert('Olá Mundo Fatec ZL 24 de maio')
}


// Comentário de 1 Linha

/* Comentário de 
  N Linhas */

//   Contextualizando Variaveis:

// Definindo uma variavel
let idade = 25

// Consumindo ou consultando a variavel 
console.log(idade)

let novaIdade = idade +1
console.log(novaIdade)

// re-declarando a variavel
idade = 30
console.log(idade)


// Tipagens das Variaveis

// variavel do tipo numero inteiro:
let RA=111235;
console.log(RA)

// variavel do tipo texto:
let nome= "Francisco"
let sobrenome = 'Douglas'
let nomeFamilia= `Lima Abreu`

console.log(nome +""+typeof nome)
console.log(sobrenome)
console.log(nomeFamilia)

// variavel do tipo número decimal:
let nota = 9.50
console.log(nota + ""+typeof nota)

// variavel do tipo boolean 
let verdadeiro = true
let falso = false

console.log(verdadeiro)
console.log(falso)

// variavel do tipo vazio
let vazio = null
console.log(vazio)
// variavel indefinida (Undefined)
let indefinido
console.log(indefinido)

function confirmar(){
    // tem o retorno de true (OK) e false (CANCEL)
    let resultado = confirm('Deseja confirmar?')

    alert(resultado)
}
function entrada(){
    // tem o retorno baseado ao input 
    let nome = prompt("Digite seu nome")
    
    alert(nome)
}