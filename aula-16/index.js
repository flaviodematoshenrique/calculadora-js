/*if const idade = prompt("Informe a sua idade:")

if (idade > 18) {
    alert ("Você é maior de idade")
} else{
    alert ("Você é menor de idade")
}

 (6 !== 6) {
    console.log("Verdadeiro")
} else{
    console.log("Falso")
}*/

const idade = prompt("Informe a sua idade:")

if (idade > 18) {
  alert("Você é maior de idade")
} else if (idade > 12) {
  alert("Você é menor de idade")
} else if (idade > 4) {
  alert("Você é criança")
} else {
    alert("...")
}     

// Operador Ternário
const resultado = (6 === 6) ? "Verdadeiro" : "Falso"

console.log (resultado)