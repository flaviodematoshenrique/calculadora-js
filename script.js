

const primeiroNome = prompt('Informe o primeiro nome do recruta');
const sobrenome = prompt('Informe o segundo nome do recruta');
const campo_de_estudo = prompt('Qual o campo de estudo?');
const anoNascimento = prompt('Qual o ano do nascimento?');

alert(

'Recruta cadastrado com sucesso!\n'+
'\nNome Completo:' + primeiroNome + " " + sobrenome +
'\nCampo de Estudo:' + campo_de_estudo +
'\nQual sua idade:' + (2023 - anoNascimento)

)

const entrada1 =  prompt("Informe o primeiro número:")
const entrada2 = prompt("Informe o segundo número:")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtração = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
    "Resultado:\n"+
    "\nSoma: " + soma +
    "\nSubtração: " + subtração +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao
)


