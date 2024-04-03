let fila = []

let opcao = ''

do {
  let pacientes = ''
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + 'º - ' + fila[i] + '\n'
  }
  opcao = prompt(
    'Pacientes:\n' +
      pacientes +
      '\n' +
      '\n Escolha uma opção: \n 1. Novo paciente \n 2. Consultar paciente \n 3. sair'
  )
  switch (opcao) {
    case '1':
      let novoPaciente = prompt('Digite o nome do paciente: ')
      fila.push(novoPaciente)
      break
    case '2':
      let consultado = fila.shift()
      if (!consultado) {
        alert('Não há pacientes na fila!')
      } else {
        alert(consultado + ' foi removido(a) da fila.')
      }
      break
    case '3':
      alert('Até logo!')
      break
    default:
      alert('Opção inválida')
      break
  }
} while (opcao !== '3')
