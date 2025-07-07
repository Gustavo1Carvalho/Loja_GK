  const produto = JSON.parse(localStorage.getItem('produtoSelecionado'));
  if (produto) {
    document.getElementById('produto-nome').textContent = produto.nome;
    document.getElementById('produto-descricao').textContent = produto.descricao;
    document.getElementById('produto-preco').textContent = 'R$ ' + produto.preco.toFixed(2);
    document.getElementById('produto-imagem').src = produto.imagem;
  }

  function adicionarAoCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const index = carrinho.findIndex(p => p.nome === produto.nome);
    if (index !== -1) {
      carrinho[index].quantidade += 1;
    } else {
      carrinho.push({ ...produto, quantidade: 1 });
    }
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }