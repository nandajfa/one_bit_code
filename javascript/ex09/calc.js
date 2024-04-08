function triangulo() {
  const base = parseFloat(prompt('Digite a base do triângulo: '))
  const altura = parseFloat(prompt('Digite a altura do triângulo: '))
  return (base * altura) / 2
}

function retangulo() {
  const base = parseFloat(prompt('Digite a base do retângulo: '))
  const altura = parseFloat(prompt('Digite a altura do retângulo: '))
  return base * altura
}

function quadrado() {
  const lado = parseFloat(prompt('Digite o lado do quadrado: '))
  return lado * lado
}

function trapezio() {
  const baseMaior = parseFloat(prompt('Digite a base maior do trapézio: '))
  const baseMenor = parseFloat(prompt('Digite a base menor do trapézio: '))
  const altura = parseFloat(prompt('Digite a altura do trapézio: '))
  return ((baseMaior + baseMenor) * altura) / 2
}

function circulo() {
  const raio = parseFloat(prompt('Digite o raio do círculo: '))
  return 3.14 * raio * raio
}

function exibirMenu() {
  return prompt(
    'Olá, seja bem vindo a calculadora geométrica. Escolha uma opção: \n\n' +
      '1. Calcular área do triângulo\n' +
      '2. Calcular área do retângulo\n' +
      '3. Calcular área do quadrado\n' +
      '4. Calcular área do trapézio\n' +
      '5. Calcular área do círculo\n' +
      '6. Sair'
  )
}

function executar() {
  let opcao = ''

  do {
    opcao = exibirMenu()

    switch (opcao) {
      case '1':
        alert('A área do triângulo é: ' + triangulo())
        break
      case '2':
        alert('A área do retângulo é: ' + retangulo())
        break
      case '3':
        alert('A área do quadrado é: ' + quadrado())
        break
      case '4':
        alert('A área do trapézio é: ' + trapezio())
        break
      case '5':
        alert('A área do círculo é: ' + circulo())
        break
      case '6':
        alert('Até logo!')
        break
      default:
        alert('Opção inválida!')
        break
    }
  } while (opcao !== '6')
}

executar()
