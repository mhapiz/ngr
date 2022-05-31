(function () {
  let scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });
  // Navigation Menu  
  let last_scroll_top = 0;

  scroll.on("scroll", (position) => {
    let scroll_top = position.scroll.y;
    if (scroll_top > last_scroll_top) {
      $('nav').addClass('hide-navbar');
      $('nav').removeClass('show-navbar');
      $('.nav-links').removeClass('show-links');
    } else {
      $('nav').addClass('show-navbar');
      $('nav').removeClass('hide-navbar');
      $('.nav-links').removeClass('show-links');
    }
    last_scroll_top = scroll_top;

    if (scroll_top > 75) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, true);
})();

const toggleBtn = document.getElementById('toggle-btn');
    const navLinks = document.getElementById('nav-links');

    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show-links');
    });
