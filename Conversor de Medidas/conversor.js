const medida = prompt("Insira uma medida em metros:")

const unidade = prompt("Qual a opção de medida você quer converter?" +
"\n1. milímetro(mn)"+
"\n2. centímetro(cm)"+
"\n3. decímetro(dm)"+
"\n4. decâmetro(dam)"+
"\n5. hectômetro(hm)"+
"\n6. quilômetro(km)"
)


switch (unidade) {
    case "1":
        alert("o resultado é: " + medida + "m = " + medida * 1000 + "mn")
        break
    case "2":
        alert("o resultado é: " + medida + "m = " + medida * 100 + "cm")
        break   
    case "3":
        alert("o resultado é: " + medida + "m = " + medida * 10 + "dm")
        break   
    case "4":
        alert("o resultado é: " + medida + "m = " + medida / 10 + "dam")
        break     
    case "5":
        alert("o resultado é: " + medida + "m = " + medida / 100 + "hm")
        break   
    case "6":
        alert("o resultado é: " + medida + "m = " + medida / 1000 + "km")
        break                                       
    default:
        alert("Opção Inválida...")             
}