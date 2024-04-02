const vehicle1 = prompt('Insira o nome do primeiro veículo:')
const speed1 = prompt('Insira a velocidade do primeiro veículo:')

const vehicle2 = prompt('Insira o nome do segundo veículo:')
const speed2 = prompt('Insira a velocidade do segundo veículo:')

const result =
  parseFloat(speed1) > parseFloat(speed2)
    ? `${vehicle1} é mais rápido`
    : `${vehicle2} é mais rápido`
const equal =
  parseFloat(speed1) === parseFloat(speed2)
    ? 'Os veículos têm a mesma velocidade'
    : ''

if (equal) {
  alert(equal)
} else {
  alert(result)
}
