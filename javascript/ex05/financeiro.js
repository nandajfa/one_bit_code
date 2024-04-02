let qtd = parseFloat(prompt('Informe quantidade de dinheiro inicial:'))
let opcao = ''

do {
  opcao = prompt(
    `Saldo disponível: R$ ${qtd}
		\n1 - Adicionar dinheiro
		\n2 - Remover dinheiro
		\n3 - Sair`
  )
  switch (opcao) {
    case '1':
      qtd += parseFloat(prompt('Quanto deseja adicionar?'))
      alert(`Saldo disponível: R$ ${qtd}`)
      break
    case '2':
      qtd -= parseFloat(prompt('Quanto deseja remover?'))
      alert(`Saldo disponível: R$ ${qtd}`)
      break
    case '3':
      alert('Sistema está sendo encerrado')
      alert('Encerrando...')
      break
    default:
      alert('Opção inválida!')
  }
} while (opcao !== '3')
