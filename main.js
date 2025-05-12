/*exemplo 1

function mensagem(){
   alert("Seja bem-vindo(a)!") 
   console.log("Seja bem-vindo(a)!")
}

mensagem()
*/

/*exemplo 2 - função com parâmetros

function somar(numero1, numero2){
   alert(numero1 + numero2)
   console.log(numero1 + numero2)
}

let n1 = Number(prompt("Digite um número"))
let n2 = Number(prompt("Digite outro número"))

somar(n1, n2) //70
somar(14, 18)//32
*/

/*exemplo 3 - parâmetros de tipos diferentes

function mensagemPessoal(nose, cargo, anosTrabalhados){
alert("Seja bem-vindo(a) ${cargo} ${nome}.Estamos felizes pot ter trabalhado conosco há ${anosTrabalhados} anos.")
}

mensagemPessoal("Lucas", "Gerente", 10)
mensagemPessoal("Irineu", "Você não sabe nem eu", 58)*/


/*exemplo 4 -return nas funções

function somarEDevolver(numero1, numero2, numero3) {
let resultado = numero1 + numero2 + numero3
return resultado
let nome = "Márcio"
}

let soma1 = somarEDevolver(10, 11, 12)
let soma2 = somarEDevolver(30, 40, 50)

alert(soma1)
alert(soma2)

*/ 

/*exemplo 5 - if sem o else

function parOuImpar(numero){
if (numero % 2 === 0){
return "PAR"
}
else{
return "IMPAR"
}
}

let resultado1 = parOuImpar(18)
let resultado1 = parOuImpar(15)

alert(`O numero 18 é ${resultado1}`)
alert(`O numero 15 é ${resultado2}`)
*/

/*exemplo 6 - funcoes anonimas
function mensagem(){

document.querySelector("button").addEventListener("click", function)(){
alert("clicou no botão")
}}


*/

/*exemplo 7 - arrow function

document.querySelector("button").addEventListener("click", ()) => {
alert("clicou no botão")


*/


/*exemplo 8 - arrow functions com variaveis
let somar = (valor1, valor2) => valor1 + valor2
let resultadosSoma = somar(23, 38)
alert(ResultadoSoma)
*/