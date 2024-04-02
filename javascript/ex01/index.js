let nome = prompt('Informe o primeiro nome do recruta')
let sobrenome = prompt('Informe o sobrenome do recruta')
let estudo = prompt('Qual o campo de estudo do recruta?')
let nascimento = prompt('Qual o ano de nascimento do recruta?')
let idade = 2024 - parseFloat(nascimento)

console.log(nome + ' ' + sobrenome)
console.log(estudo)
console.log(idade)

alert(
  'Recruta cadastrado com sucesso!\nNome: ' +
    nome +
    '\nSobrenome: ' +
    sobrenome +
    '\nEstudo: ' +
    estudo +
    '\nIdade: ' +
    idade
)
