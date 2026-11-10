/**
 * Poolix Landing Page - Pure Vanilla JS
 * Handles mobile menu toggle, sticky navbar, preloader dismissal, and hero slider.
 */
document.addEventListener('DOMContentLoaded', function () {
  // 1. Hide preloader
  var loader = document.querySelector('.loader-wrap');
  if (loader) {
    loader.style.display = 'none';
  }

  // 2. Mobile Menu Toggle
  var body = document.body;
  var togglers = document.querySelectorAll('.mobile-nav-toggler');
  var closeBtns = document.querySelectorAll('.mobile-menu .close-btn, .mobile-menu .menu-backdrop');

  togglers.forEach(function (toggler) {
    toggler.addEventListener('click', function (e) {
      e.preventDefault();
      body.classList.toggle('mobile-menu-visible');
    });
  });

  closeBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      body.classList.remove('mobile-menu-visible');
    });
  });

  // Close mobile menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && body.classList.contains('mobile-menu-visible')) {
      body.classList.remove('mobile-menu-visible');
    }
  });

  // 3. Mobile Sub-menu accordion
  var dropdownItems = document.querySelectorAll('.mobile-menu .navigation li.dropdown');
  dropdownItems.forEach(function (li) {
    var link = li.querySelector(':scope > a');
    var btn = li.querySelector(':scope > .dropdown-btn');
    var subMenu = li.querySelector(':scope > ul');

    function toggleSubMenu(e) {
      if (subMenu) {
        e.preventDefault();
        var isVisible = subMenu.style.display === 'block';
        subMenu.style.display = isVisible ? 'none' : 'block';
        if (btn) {
          btn.classList.toggle('open', !isVisible);
        }
      }
    }

    if (link) link.addEventListener('click', toggleSubMenu);
    if (btn) btn.addEventListener('click', toggleSubMenu);
  });

  // 4. Sticky Header on scroll
  var header = document.querySelector('.main-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 120) {
        header.classList.add('fixed-header');
      } else {
        header.classList.remove('fixed-header');
      }
    });
  }

  // 5. Search Popup Toggle
  var searchTogglers = document.querySelectorAll('.search-toggler');
  var searchPopup = document.querySelector('.search-popup');
  var closeSearchBtns = document.querySelectorAll('.search-popup .close-search, .search-popup .overlay-layer');

  if (searchPopup) {
    searchTogglers.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        searchPopup.classList.add('popup-visible');
        var input = searchPopup.querySelector('input[type="search"]');
        if (input) {
          setTimeout(function () { input.focus(); }, 150);
        }
      });
    });

    closeSearchBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        searchPopup.classList.remove('popup-visible');
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && searchPopup.classList.contains('popup-visible')) {
        searchPopup.classList.remove('popup-visible');
      }
    });
  }

  // 5. Hero Carousel Rotator for .banner-slider and .banner-slider-2
  function initHeroSlider(selector, prevSelector, nextSelector) {
    var container = document.querySelector(selector);
    if (!container) return;
    var wrapper = container.querySelector('.swiper-wrapper');
    if (!wrapper) return;
    var slides = wrapper.children;
    if (slides.length <= 1) return;

    var currentIndex = 0;
    var prevBtn = document.querySelector(prevSelector);
    var nextBtn = document.querySelector(nextSelector);

    function renderSlide(index) {
      for (var i = 0; i < slides.length; i++) {
        if (i === index) {
          slides[i].style.display = 'block';
          slides[i].style.opacity = '1';
          slides[i].classList.add('swiper-slide-active');
        } else {
          slides[i].style.display = 'none';
          slides[i].style.opacity = '0';
          slides[i].classList.remove('swiper-slide-active');
        }
      }
    }

    renderSlide(0);

    if (nextBtn) {
      nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % slides.length;
        renderSlide(currentIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        renderSlide(currentIndex);
      });
    }

    // Auto rotate every 6 seconds
    setInterval(function () {
      currentIndex = (currentIndex + 1) % slides.length;
      renderSlide(currentIndex);
    }, 6000);
  }

  initHeroSlider('.banner-slider', '.banner-slider-button-prev', '.banner-slider-button-next');
  initHeroSlider('.banner-slider-2', '.banner-slider-button-prev', '.banner-slider-button-next');
  initHeroSlider('.banner-slider-3', '.banner-slider-button-prev', '.banner-slider-button-next');
});
