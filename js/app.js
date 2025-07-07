// Script para abrir/fechar menu hamburguer no mobile
const btnMenu = document.getElementById('btn-menu');
const navMenu = document.getElementById('menu');

btnMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Script carrossel
let slideIndex = 0;
const slides = document.querySelectorAll('.hero-carousel img');

function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[slideIndex].classList.add('active');
  slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlide, 4000);

// Função para adicionar produto ao carrinho no localStorage
function adicionarAoCarrinho(nome, preco, imagem) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  const index = carrinho.findIndex(item => item.nome === nome);
  if (index !== -1) {
    carrinho[index].quantidade += 1;
  } else {
    carrinho.push({ nome, preco, imagem, quantidade: 1 });
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarContadorCarrinho();
  
}

// Atualiza o contador no menu
function atualizarContadorCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
  document.getElementById('contador').textContent = totalItens;
}

window.onload = atualizarContadorCarrinho;
