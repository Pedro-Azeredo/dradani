// Page animations: hero slide-up + scroll-triggered entrance
(function () {
  "use strict";

  // Inject critical CSS immediately so elements are hidden before first paint
  var criticalStyle = document.createElement("style");
  criticalStyle.textContent =
    // Hero image (mobile only) - hidden below
    "@media(max-width:767px){" +
    ".elementor-element-dceba91{opacity:0;transform:translateY(300px);}" +
    "}" +
    // Hero text block - hidden to the left
    ".elementor-element-5af4d38{opacity:0;transform:translateX(-80px);}";
  document.head.appendChild(criticalStyle);

  // Remove elementor-invisible class from all elements to make them visible
  function removeInvisibleClass() {
    var els = document.querySelectorAll(".elementor-invisible");
    for (var i = 0; i < els.length; i++) {
      els[i].classList.remove("elementor-invisible");
    }
  }

  // Strip animation data from carousel section so Swiper slides don't re-animate
  function disableCarouselAnimations() {
    var carousel = document.querySelector(".elementor-element-4d03212");
    if (!carousel) return;

    // Remove all animation-related classes and attributes inside carousel
    var animEls = carousel.querySelectorAll("[data-settings]");
    for (var i = 0; i < animEls.length; i++) {
      animEls[i].classList.remove("elementor-invisible");
      animEls[i].style.animation = "none";
      animEls[i].style.opacity = "1";
      animEls[i].style.transform = "none";
    }

    // Also kill animation on any cloned slides (Swiper loop duplicates)
    var allSlides = carousel.querySelectorAll(".swiper-slide");
    for (var j = 0; j < allSlides.length; j++) {
      allSlides[j].style.animation = "none";
      allSlides[j].style.opacity = "1";
      allSlides[j].style.transform = "none";
      var inner = allSlides[j].querySelectorAll("*");
      for (var k = 0; k < inner.length; k++) {
        inner[k].style.animation = "none";
      }
    }
  }

  // Hero portrait: slide up on load (mobile only)
  function animateHero() {
    var hero = document.querySelector(".elementor-element-dceba91");
    if (!hero || window.innerWidth > 767) return;

    // Add transition then trigger animation on next frame
    requestAnimationFrame(function () {
      hero.style.transition = "opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      requestAnimationFrame(function () {
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
      });
    });
  }

  // Hero text: slide in from left on load (mobile + desktop)
  function animateHeroText() {
    var textBlock = document.querySelector(".elementor-element-5af4d38");
    if (!textBlock) return;

    textBlock.classList.remove("elementor-invisible");

    requestAnimationFrame(function () {
      textBlock.style.transition = "opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      // Slight delay after hero starts
      setTimeout(function () {
        textBlock.style.opacity = "1";
        textBlock.style.transform = "translateX(0)";
      }, 400);
    });
  }

  // Scroll-triggered animations: elements come from left/right alternating
  function initScrollAnimations() {
    var sections = document.querySelectorAll(".e-con.e-parent");
    var targets = [];

    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var id = section.getAttribute("data-id");

      // Skip header and carousel sections
      if (id === "73fbcff") continue; // header
      if (id === "4d03212") continue; // carousel (tratamentos)

      // Get direct child containers inside this section (not deep widgets)
      var children = section.querySelectorAll(":scope > .e-con-inner > .e-con.e-child");
      for (var j = 0; j < children.length; j++) {
        var child = children[j];

        // Skip hero elements (they have their own animations)
        if (child.classList.contains("elementor-element-5af4d38")) continue;
        if (child.classList.contains("elementor-element-6567cbb")) continue;

        targets.push(child);
      }
    }

    // Set up initial hidden state
    for (var k = 0; k < targets.length; k++) {
      var el = targets[k];
      var fromLeft = k % 2 === 0;

      el.setAttribute("data-anim-dir", fromLeft ? "left" : "right");
      el.style.opacity = "0";
      el.style.transform = fromLeft ? "translateX(-60px)" : "translateX(60px)";
      el.style.transition = "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    }

    if (!("IntersectionObserver" in window)) {
      for (var f = 0; f < targets.length; f++) {
        targets[f].style.opacity = "1";
        targets[f].style.transform = "none";
      }
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      for (var e = 0; e < entries.length; e++) {
        if (entries[e].isIntersecting) {
          var target = entries[e].target;
          target.style.opacity = "1";
          target.style.transform = "translateX(0)";
          observer.unobserve(target);
        }
      }
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    });

    for (var m = 0; m < targets.length; m++) {
      observer.observe(targets[m]);
    }
  }

  // 3D tilt effect on face photo
  function initTilt3D() {
    var container = document.querySelector(".elementor-element-574cb45");
    var imgWidget = document.querySelector(".elementor-element-2c61892");
    if (!container || !imgWidget) return;

    var img = imgWidget.querySelector("img");
    if (!img) return;

    container.style.perspective = "1000px";
    container.style.perspectiveOrigin = "center center";
    img.style.willChange = "transform";
    img.style.transition = "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

    // Smooth interpolation values
    var currentX = 0, currentY = 0, targetX = 0, targetY = 0;
    var ticking = false;

    function lerp(a, b, t) { return a + (b - a) * t; }

    function updateTransform() {
      currentX = lerp(currentX, targetX, 0.08);
      currentY = lerp(currentY, targetY, 0.08);

      img.style.transform = "perspective(1000px) rotateX(" + currentX + "deg) rotateY(" + currentY + "deg) scale3d(1.02, 1.02, 1.02)";

      if (Math.abs(currentX - targetX) > 0.01 || Math.abs(currentY - targetY) > 0.01) {
        requestAnimationFrame(updateTransform);
      } else {
        ticking = false;
      }
    }

    function startTick() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateTransform);
      }
    }

    // Desktop: mouse
    container.addEventListener("mousemove", function (e) {
      var rect = container.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width;
      var y = (e.clientY - rect.top) / rect.height;

      targetY = (x - 0.5) * 8;
      targetX = (0.5 - y) * 8;
      img.style.transition = "none";
      startTick();
    });

    container.addEventListener("mouseleave", function () {
      targetX = 0;
      targetY = 0;
      img.style.transition = "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      img.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      ticking = false;
      currentX = 0;
      currentY = 0;
    });

    // Mobile: gyroscope
    if (window.DeviceOrientationEvent) {
      var gyroActive = false;
      var baseBeta = null, baseGamma = null;

      function handleOrientation(e) {
        if (e.beta === null || e.gamma === null) return;

        // Set baseline on first reading
        if (baseBeta === null) {
          baseBeta = e.beta;
          baseGamma = e.gamma;
        }

        var diffBeta = (e.beta - baseBeta);
        var diffGamma = (e.gamma - baseGamma);

        // Clamp to ±15 degrees of device tilt, map to ±5 degrees of image rotation
        diffBeta = Math.max(-15, Math.min(15, diffBeta));
        diffGamma = Math.max(-15, Math.min(15, diffGamma));

        targetX = -(diffBeta / 15) * 5;
        targetY = (diffGamma / 15) * 5;
        img.style.transition = "none";
        startTick();
      }

      // iOS 13+ requires permission
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        // Activate on first touch
        container.style.pointerEvents = "auto";
        container.addEventListener("touchstart", function activateGyro() {
          DeviceOrientationEvent.requestPermission().then(function (state) {
            if (state === "granted") {
              window.addEventListener("deviceorientation", handleOrientation);
              gyroActive = true;
            }
          }).catch(function () {});
          container.removeEventListener("touchstart", activateGyro);
        }, { once: true });
      } else {
        // Android and older iOS
        window.addEventListener("deviceorientation", function (e) {
          if (!gyroActive && e.beta !== null) {
            gyroActive = true;
          }
          if (gyroActive) handleOrientation(e);
        });
      }
    }
  }

  // Autoplay videos when scrolled into view, pause when out
  function initVideoAutoplay() {
    var videos = document.querySelectorAll("video.elementor-video");
    if (!videos.length) return;

    var videoObserver = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var video = entries[i].target;
        if (entries[i].isIntersecting) {
          video.play().catch(function () {});
        } else {
          video.pause();
        }
      }
    }, { threshold: 0.3 });

    for (var i = 0; i < videos.length; i++) {
      videoObserver.observe(videos[i]);
    }
  }

  function init() {
    removeInvisibleClass();
    disableCarouselAnimations();
    animateHero();
    animateHeroText();
    setTimeout(function () {
      initScrollAnimations();
      // Re-disable carousel animations after Swiper clones slides
      disableCarouselAnimations();
    }, 100);
    // One more pass after Swiper fully initializes (it has a 200ms delay)
    setTimeout(disableCarouselAnimations, 500);
    initVideoAutoplay();
    initTilt3D();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
