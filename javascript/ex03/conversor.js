const value = prompt('Digite um valor em metros: ')
const unit = prompt(
  'Para qual unidade de medida você deseja converter?\n1. (milímetro (mm) \n2. centímetro (cm)\n 3.decímetro (dm)\n 4. decâmetro (dam)\n 5. hectômetro(hm)\n  6. quilômetro (km))'
)

function converter() {
  switch (unit) {
    case '1':
      alert(`${value} metros é igual a ${value * 1000} milímetros`)
      break
    case '2':
      alert(`${value} metros é igual a ${value * 100} centímetros`)
      break
    case '3':
      alert(`${value} metros é igual a ${value * 10} decímetros`)
      break
    case '4':
      alert(`${value} metros é igual a ${value / 10} decâmetros`)
      break
    case '5':
      alert(`${value} metros é igual a ${value / 100} hectômetros`)
      break
    case '6':
      alert(`${value} metros é igual a ${value / 1000} quilômetros`)
      break
    default:
      alert('Unidade de medida não reconhecida')
      break
  }
}

converter()
