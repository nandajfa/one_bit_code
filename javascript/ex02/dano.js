const nameAttack = prompt('Insira o nome do personagem de ataque:')
const attack = prompt('Insira o poder de ataque do personagem:')

const nameDefense = prompt('Insira o nome do personagem que irá defender:')
let life = prompt('Insira a quantidade de pontos de vida:')
const defense = prompt('Insira a quantidade de pontos de defesa:')
const shield = prompt('Possui escudo? (S/N)')

let a = parseFloat(attack)
let d = parseFloat(defense)
let damage = 0
if (a > d && shield === 'N') {
  damage = a - d
} else if (a > d && shield === 'S') {
  const sub = a - d
  damage = sub / 2
}

const result = parseFloat(life) - parseFloat(damage)
alert(
  nameAttack +
    '. Poder de ataque: ' +
    attack +
    '.\n' +
    nameDefense +
    '. Vida: ' +
    life +
    '. Defesa: ' +
    defense +
    '. Escudo: ' +
    shield
)

alert(
  'Dano: ' +
    damage +
    '. ' +
    nameAttack +
    '. Poder de ataque: ' +
    attack +
    '.\n Nome do defensor: ' +
    nameDefense +
    '. Vida: ' +
    result +
    '. Defesa: ' +
    defense +
    '. Escudo: ' +
    shield
)
