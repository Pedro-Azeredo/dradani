
// Carousel com loop infinito perfeito
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    const carousel = document.querySelector('.swiper.elementor-loop-container');
    const prevBtn = document.querySelector('.elementor-swiper-button-prev');
    const nextBtn = document.querySelector('.elementor-swiper-button-next');
    
    if (!carousel || !prevBtn || !nextBtn) return;
    
    const wrapper = carousel.querySelector('.swiper-wrapper');
    let allSlides = Array.from(wrapper.querySelectorAll('.swiper-slide'));
    
    if (allSlides.length === 0) return;
    
    const origSlideCount = allSlides.length;
    
    // Duplicar os primeiros 3 slides no final (para scroll para frente suave)
    allSlides.slice(0, 3).forEach(slide => {
      wrapper.appendChild(slide.cloneNode(true));
    });
    
    // Duplicar os últimos 3 slides no início (para scroll para trás suave)
    allSlides.slice(-3).forEach(slide => {
      wrapper.insertBefore(slide.cloneNode(true), wrapper.firstChild);
    });
    
    // Atualizar referência de todos os slides
    allSlides = Array.from(wrapper.querySelectorAll('.swiper-slide'));
    
    // Começar no índice 3 (primeiro slide real, pulando as 3 cópias do final que estão no início)
    let currentIndex = 3;
    let isAnimating = false;
    let isClickDisabled = false;
    let isDragging = false;
    let dragStart = 0;
    let dragOffset = 0;
    
    const getScrollDistance = () => {
      return allSlides[0].offsetWidth + 10; // slide width + 10px gap
    };
    
    const moveTo = (index, smooth = true) => {
      if (isAnimating) return;
      
      const scrollDistance = getScrollDistance();
      const newScroll = index * scrollDistance;
      
      if (smooth) {
        isAnimating = true;
        wrapper.style.transition = 'transform 0.35s ease-in-out';
      } else {
        wrapper.style.transition = 'none';
      }
      
      wrapper.style.transform = `translateX(-${newScroll}px)`;
      currentIndex = index;
      
      if (smooth) {
        setTimeout(() => {
          isAnimating = false;
        }, 350);
      }
    };
    
    // Snap para o slide mais próximo
    const snapToNearestSlide = () => {
      const scrollDistance = getScrollDistance();
      const currentScroll = currentIndex * scrollDistance;
      
      let snapIndex = currentIndex;
      let minDistance = Infinity;
      
      for (let i = 0; i < allSlides.length; i++) {
        const slideScroll = i * scrollDistance;
        const distance = Math.abs(slideScroll - currentScroll);
        if (distance < minDistance) {
          minDistance = distance;
          snapIndex = i;
        }
      }
      
      if (snapIndex !== currentIndex) {
        moveTo(snapIndex, true);
      }
    };
    
    // Posicionar no primeiro slide real
    moveTo(currentIndex, false);
    
    const handleNext = () => {
      if (isClickDisabled) return;
      isClickDisabled = true;
      
      currentIndex++;
      moveTo(currentIndex, true);
      
      if (currentIndex >= allSlides.length - 3) {
        setTimeout(() => {
          moveTo(3, false);
        }, 350);
      }
      
      setTimeout(() => {
        isClickDisabled = false;
      }, 400);
    };
    
    const handlePrev = () => {
      if (isClickDisabled) return;
      isClickDisabled = true;
      
      currentIndex--;
      moveTo(currentIndex, true);
      
      if (currentIndex <= 2) {
        setTimeout(() => {
          moveTo(allSlides.length - 6, false);
        }, 350);
      }
      
      setTimeout(() => {
        isClickDisabled = false;
      }, 400);
    };
    
    nextBtn.addEventListener('click', handleNext);
    prevBtn.addEventListener('click', handlePrev);
    
    // ===== DRAG E SWIPE =====
    const onDragStart = (e) => {
      if (isAnimating || isClickDisabled) return;
      isDragging = true;
      dragStart = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
      dragOffset = 0;
      wrapper.style.transition = 'none';
    };
    
    const onDragMove = (e) => {
      if (!isDragging) return;
      
      const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
      const scrollDistance = getScrollDistance();
      dragOffset = currentX - dragStart;
      
      const currentScroll = currentIndex * scrollDistance;
      const newScroll = currentScroll - dragOffset;
      
      wrapper.style.transform = `translateX(-${newScroll}px)`;
    };
    
    const onDragEnd = (e) => {
      if (!isDragging) return;
      isDragging = false;
      
      const scrollDistance = getScrollDistance();
      const dragThreshold = scrollDistance * 0.15;
      
      if (Math.abs(dragOffset) > dragThreshold) {
        if (dragOffset > 0) {
          handlePrev();
        } else {
          handleNext();
        }
      } else {
        snapToNearestSlide();
      }
    };
    
    carousel.addEventListener('mousedown', onDragStart);
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
    
    carousel.addEventListener('touchstart', onDragStart);
    document.addEventListener('touchmove', onDragMove);
    document.addEventListener('touchend', onDragEnd);
    
  }, 300);
});
