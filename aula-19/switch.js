const resultado = prompt("Escolha uma alternativa: \na)\nb)\nc)")

const resultadoNumerico = parseFloat(resultado)


switch (resultadoNumerico) {
    case 1:
        alert("o resultado é 'a'")
        break
    case 2:
        alert("o resultado é 'b'")
        break   
    case 3:
            alert("o resultado é 'c'")
            break
    default:
        alert("finalizando...")             
}