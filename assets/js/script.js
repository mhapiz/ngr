$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('nav').addClass('sticky');
    $(".brand-logo").attr("src",$('.brand-logo').data("scroll"));
  } else {
    $('nav').removeClass('sticky');
    $(".brand-logo").attr("src",$('.brand-logo').data("stay"));
  }
});

const toggleBtn = document.querySelector('#toggle-btn');
const navLinks = document.querySelector('#nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show-links');
});