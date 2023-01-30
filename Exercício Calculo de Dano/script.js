const nomePrimeiroPersonagem = prompt('Informe o nome do primeiro personagem');
const poder_de_ataque_primeiro_personagem = prompt('Informe o poder de ataque do primeiro personagem');

const nomeSegundoPersonagem = prompt('Informe o nome do segundo personagem');
let quantidade_pontos_vida = prompt('Informe a quatidade de pontos de vida');
const poder_defesa = prompt('Qual o seu Poder de defesa?')
const possui_escudo = prompt('Possui escudo?(Sim/Não)')

let danoCausado = 0

if (poder_de_ataque_primeiro_personagem > poder_defesa && possui_escudo === 'Não') {
    danoCausado = poder_de_ataque_primeiro_personagem - poder_defesa
    } else if (poder_de_ataque_primeiro_personagem > poder_defesa && possui_escudo === 'Sim') {
        danoCausado = (poder_de_ataque_primeiro_personagem - poder_defesa) /2
    }   
    
 quantidade_pontos_vida -= danoCausado  
    
alert(nomePrimeiroPersonagem + "causou" + danoCausado + "pontos de dano causado" + nomeSegundoPersonagem)
alert(
    nomePrimeiroPersonagem + "\nPoder de ataque: " +poder_de_ataque_primeiro_personagem + "\n\n" +
    nomeSegundoPersonagem + "\nPontos de vida: "  +quantidade_pontos_vida +
    "n\Poder de defesa:" +poder_defesa + "\nPossui escudo: " +'\npossui_escudo'
)
