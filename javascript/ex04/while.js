const nome = prompt('E aí, turista! Qual é o seu nome?')
let cidades = ''
let i = 0

let resposta = prompt('Você visitou alguma cidade? (Sim/Não)')

while (resposta === 'Sim') {
  let cidade = prompt('Qual é o nome da cidade visitada?')
  cidades += ' -' + cidade + '\n'
  i++
  resposta = prompt('Você visitou alguma outra cidade? (Sim/Não)')
}

alert(
  'Turista: ' +
    nome +
    '\nQuantidade de cidades visitadas: ' +
    i +
    '\nCidades visitadas:\n' +
    cidades
)
