let opcao = ''

do {
  opcao = prompt(
    'Escolha uma opção: \n1 - Cadastrar \n2 - Listar \n3 - Atualizar \n4 - Deletar \n5 - Encerrar'
  )
  switch (opcao) {
    case '1':
      alert('Você escolheu cadastrar')
      break
    case '2':
      alert('Você escolheu Listar')
      break
    case '3':
      alert('Você escolheu Atualizar')
      break
    case '4':
      alert('Você escolheu Deletar')
      break
    case '5':
      alert('Sistema está sendo encerrado')
      alert('Encerrando...')
      break
    default:
      alert('Opção inválida!')
  }
} while (opcao !== '5')
