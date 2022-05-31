













//  FOR NAVBAR
// let last_scroll_top = 0;

// $(window).on('scroll', function () {
//   let scroll_top = window.pageYOffset;
//   console.log(scroll_top);
//   if(scroll_top > last_scroll_top) {
//     // if scroll down
//     $('nav').addClass('hide-navbar');
//     $('nav').removeClass('show-navbar');
//     $('.nav-links').removeClass('show-links');

//   }
//   else {
//     // if scroll up
//     $('nav').addClass('show-navbar');
//     $('nav').removeClass('hide-navbar');
//     $('.nav-links').removeClass('show-links');

//   }
//   last_scroll_top = scroll_top;
 
//   if ($(window).scrollTop()) {
//     $('nav').addClass('sticky');
//   } else {
//     $('nav').removeClass('sticky');
//   }
  
// });

const toggleBtn = document.getElementById('toggle-btn');
    const navLinks = document.getElementById('nav-links');

    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show-links');
    });
