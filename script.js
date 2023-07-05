// Seletor do carrossel
const carousel = document.querySelector('.carousel');

// Seletor dos itens do carrossel
const carouselItems = document.querySelectorAll('.carousel-item');

// Contador para controlar o item atual
let currentItem = 0;

// Função para exibir o item atual
function showCurrentItem() {
  // Esconde todos os itens
  carouselItems.forEach(item => {
    item.style.transform = 'translateX(-100%)';
    item.style.opacity = '0';
  });

  // Exibe o item atual
  carouselItems[currentItem].style.transform = 'translateX(0)';
  carouselItems[currentItem].style.opacity = '1';
}

// Função para avançar para o próximo item
function nextItem() {
  currentItem++;
  if (currentItem >= carouselItems.length) {
    currentItem = 0;
  }
  showCurrentItem();
}

// Função para voltar ao item anterior
function prevItem() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = carouselItems.length - 1;
  }
  showCurrentItem();
}

// Eventos dos botões de navegação
document.querySelector('.next-button').addEventListener('click', nextItem);
document.querySelector('.prev-button').addEventListener('click', prevItem);

// Exibe o primeiro item ao carregar a página
showCurrentItem();