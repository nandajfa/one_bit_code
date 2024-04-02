let x = prompt('Informe o primeiro número')
let y = prompt('Informe o segundo número')

let sum = parseFloat(x) + parseFloat(y)
let sub = parseFloat(x) - parseFloat(y)
let division = parseFloat(x) / parseFloat(y)
let multiplication = parseFloat(x) * parseFloat(y)

alert(
  'Resultados: ' +
    '\nSoma: ' +
    sum +
    '\nSubtração: ' +
    sub +
    '\nDivisão: ' +
    division +
    '\nMultiplicação: ' +
    multiplication
)
