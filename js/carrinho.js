function carregarCarrinho() {
      const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
      const container = document.getElementById('carrinho-lista');
      let total = 0;

      container.innerHTML = ""; // Limpa conteúdo anterior

      if (carrinho.length === 0) {
        container.innerHTML = `<p>Seu carrinho está vazio.</p>`;
        return;
      }

      carrinho.forEach((item, index) => {
        total += item.preco;
        const produto = document.createElement('div');
        produto.classList.add('produto-item');
        produto.innerHTML = `
          <div class="produto-info">
            <img src="${item.imagem}" alt="${item.nome}">
            <div>
              <h3>${item.nome}</h3>
              <p class="produto-preco">R$ ${item.preco.toFixed(2)}</p>
            </div>
          </div>
          <button class="remover-btn" onclick="removerItem(${index})">Remover</button>
        `;
        container.appendChild(produto);
      });

      const totalDiv = document.createElement('div');
      totalDiv.classList.add('carrinho-total');
      totalDiv.innerHTML = `Total: R$ ${total.toFixed(2)}`;
      container.appendChild(totalDiv);

      const finalizarBtn = document.createElement('button');
      finalizarBtn.classList.add('finalizar-btn');
      finalizarBtn.textContent = 'Finalizar Compra';
      container.appendChild(finalizarBtn);
    }

    function removerItem(index) {
      let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
      carrinho.splice(index, 1);
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      location.reload(); // Recarrega para atualizar visualmente
    }

    window.onload = carregarCarrinho;