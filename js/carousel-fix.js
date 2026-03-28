
// Carousel usando Swiper nativo — drag suave, loop perfeito, snap preciso
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    const container = document.querySelector('.elementor-element-13ad2d9 .swiper.elementor-loop-container');
    const prevBtn = document.querySelector('.elementor-swiper-button-prev');
    const nextBtn = document.querySelector('.elementor-swiper-button-next');
    
    if (!container || typeof Swiper === 'undefined') return;

    // Limpar qualquer estilo inline que o código anterior possa ter deixado
    const wrapper = container.querySelector('.swiper-wrapper');
    if (wrapper) {
      wrapper.style.transform = '';
      wrapper.style.transition = '';
    }
    const slides = container.querySelectorAll('.swiper-slide');
    slides.forEach(s => {
      s.style.width = '';
      s.style.marginRight = '';
    });

    // Inicializar Swiper nativo
    const swiper = new Swiper(container, {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      grabCursor: true,
      speed: 400,
      // Drag/touch suave nativo
      touchRatio: 1,
      touchAngle: 45,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.3,
      longSwipesMs: 100,
      followFinger: true,
      threshold: 5,
      touchMoveStopPropagation: true,
      // Resistência nas bordas
      resistance: true,
      resistanceRatio: 0.85,
      // Paginação
      pagination: {
        el: container.closest('.elementor-widget-container').querySelector('.swiper-pagination'),
        clickable: true,
      },
      // Breakpoints responsivos
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1025: {
          slidesPerView: 3,
          spaceBetween: 10,
        }
      }
    });

    // Conectar botões prev/next existentes
    if (nextBtn) {
      nextBtn.addEventListener('click', () => swiper.slideNext());
    }
    if (prevBtn) {
      prevBtn.addEventListener('click', () => swiper.slidePrev());
    }

  }, 200);
});

