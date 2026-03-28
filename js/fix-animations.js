// Fix animations and invisible elements for static export
(function () {
  "use strict";

  // Remove elementor-invisible class from all elements to make them visible
  function removeInvisibleClass() {
    const invisibleElements = document.querySelectorAll(".elementor-invisible");
    invisibleElements.forEach((el) => {
      el.classList.remove("elementor-invisible");
    });
  }

  // Initialize animations on scroll
  function initAnimations() {
    const animatedElements = document.querySelectorAll(
      '[data-settings*="animation"]',
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const settings = element.getAttribute("data-settings");

            if (settings) {
              try {
                const settingsObj = JSON.parse(settings);
                if (settingsObj._animation || settingsObj.animation) {
                  const animationName =
                    settingsObj._animation || settingsObj.animation;
                  element.style.animation = `${animationName} 0.8s ease-out forwards`;
                  element.classList.add("animated");
                }
              } catch (e) {
                // Settings not valid JSON
              }
            }

            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    animatedElements.forEach((el) => observer.observe(el));
  }

  // Initialize motion effects (tilt, zoom, etc)
  function initMotionEffects() {
    const tiltElements = document.querySelectorAll(
      '[data-settings*="motion_fx_tilt"]',
    );

    tiltElements.forEach((el) => {
      const img = el.querySelector("img");
      if (img) {
        el.addEventListener("mousemove", function (e) {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;

          img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        el.addEventListener("mouseleave", function () {
          img.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
        });
      }
    });
  }

  // Autoplay videos when scrolled into view, pause when out
  function initVideoAutoplay() {
    const videos = document.querySelectorAll('video.elementor-video');
    if (!videos.length) return;

    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.3 });

    videos.forEach((v) => videoObserver.observe(v));
  }

  // Wait for DOM to be ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      removeInvisibleClass();
      initAnimations();
      initMotionEffects();
      initVideoAutoplay();
    });
  } else {
    removeInvisibleClass();
    initAnimations();
    initMotionEffects();
    initVideoAutoplay();
  }

  // Add animation keyframes if not already present
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fadeinleft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes fadeinright {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes fadeinup {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeindown {
      from {
        opacity: 0;
        transform: translateY(-30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes zoomin {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    .animated {
      animation-fill-mode: forwards !important;
    }
  `;
  document.head.appendChild(style);
})();
