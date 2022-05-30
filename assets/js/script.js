let last_scroll_top = 0;

$(window).on('scroll', function () {
  let scroll_top = window.pageYOffset;
  if(scroll_top > last_scroll_top) {
    // if scroll down
    $('nav').addClass('hide-navbar');
    $('nav').removeClass('show-navbar');
  }
  else {
    // if scroll up
    $('nav').addClass('show-navbar');
    $('nav').removeClass('hide-navbar');
  }
  last_scroll_top = scroll_top;
 
  if ($(window).scrollTop()) {
    $('nav').addClass('sticky');
  } else {
    $('nav').removeClass('sticky');
  }
  
});

const toggleBtn = document.getElementById('toggle-btn');
    const navLinks = document.getElementById('nav-links');

    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show-links');
    });

    // document.addEventListener("DOMContentLoaded", function(){

    //   let el_autohide = document.querySelector('.autohide');
      
    //   // add padding-top to bady (if necessary)
    //   let navbar_height = document.querySelector('.my-navbar').offsetHeight;
    //   document.body.style.paddingTop = navbar_height + 'px';
    
    //   if(el_autohide){
    //     var last_scroll_top = 0;
    //     window.addEventListener('scroll', function() {
    //           let scroll_top = window.scrollY;
    //           console.log(scroll_top);
    //          if(scroll_top < last_scroll_top) {
    //               el_autohide.classList.remove('hide');
    //               el_autohide.classList.add('show');
    //           }
    //           else {
    //               el_autohide.classList.remove('show');
    //               el_autohide.classList.add('hide');
    //           }
    //           last_scroll_top = scroll_top;
    //     }); 
    //     // window.addEventListener
    //   }
    //   // if
    
    // }); 