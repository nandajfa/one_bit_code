let opcao = ''
const imoveis = []

do {
  opcao = prompt(
    'Quantidade de imóveis: ' +
      imoveis.length +
      '\n\n' +
      'Escolha uma opção: \n\n 1. Novo imóvel \n 2. Listar imóveis \n 3. Sair'
  )
  switch (opcao) {
    case '1':
      const imovel = {}
      imovel.proprietario = prompt('Digite o nome do proprietário: ')
      imovel.quartos = prompt('Digite a quantidade de quartos: ')
      imovel.banheiros = prompt('Digite a quantidade de banheiros: ')
      imovel.garagem = prompt('O imóvel possui garagem? S/N: ')

      const confirma = confirm(
        'Salvar este imóvel?\n' +
          '\nProprietário: ' +
          imovel.proprietario +
          '\nQuartos: ' +
          imovel.quartos +
          '\nBanheiros: ' +
          imovel.banheiros +
          '\nPossui Garagem? ' +
          imovel.garagem
      )

      if (confirma) {
        imoveis.push(imovel)
      }
      break
    case '2':
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          'Imóvel: ' +
            (i + 1) +
            '\n' +
            'Proprietário: ' +
            imoveis[i].proprietario +
            '\n' +
            'Quartos: ' +
            imoveis[i].quartos +
            '\n' +
            'Banheiros: ' +
            imoveis[i].banheiros +
            '\n' +
            'Garagem: ' +
            (imoveis[i].garagem === 'S' ? 'Sim' : 'Não') +
            '\n\n'
        )
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
