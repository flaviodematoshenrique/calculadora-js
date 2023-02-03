const nome  = prompt( "Qual o seu nome?")

let cidades  = ""

let qtde_cidade = 0

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
    let cidade = prompt("Qual é o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"
    qtde_cidade++
    continuar = prompt("Você visitou alguma outra cidade? (Sim/Não?)")
}

alert(
     "\nNome do Turista: " + nome + "\n\n" +
     "\nQuantidade de Cidades: " + qtde_cidade + "\n\n" +
    "\nNomes da Cidade: " + cidades 
)


    