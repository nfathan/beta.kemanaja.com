/* 
================================
DAFTAR ISI
================================
1. ..
2. .. 
================================
END DAFTAR ISI
================================
*/

// sidenav 
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// modal 
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/*------------------------------------
    1. Owl Carousel
--------------------------------------*/  


/*---------------------
Testmonials carousel
-----------------------*/
$('#testmonials-carousel').owlCarousel({
  loop: false,
  responsiveClass: true,
  nav:true,
  navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],       
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true,
      margin: 10,
    },
    600: {
      items: 1,
      nav: false,
      dots: true,        
      margin: 15,
    },
    1000: {
      items: 1,
      dots: false,
      margin: 40,
    }
  }
})  



/*---------------------
Blog Grid
-----------------------*/
$('#blog-grid-simple').owlCarousel({
  loop: false,
  responsiveClass: true,
  nav:false,
  navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],       
  autoplay: true,
  smartSpeed: 950,
  autoplayTimeout: 1800,  
  responsiveClass: true,
  autoplayHoverPause:false,    
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true,
      margin: 10,
    },
    600: {
      items: 2,
      nav: false,
      dots: true,        
      margin: 0,
    },
    1000: {
      items: 3,
      dots: true,
      margin: 0,
    }
  }
})   



/*---------------------
Team Carousel
-----------------------*/
$('#team-block').owlCarousel({
  dots: true,
  loop: false,
  nav: false,    
  responsiveClass: true,
  smartSpeed: 950,
  responsive: {
    0: {
      items: 1,
      margin: 15,
      dots: false,
    },
    600: {
      items: 1,
      margin: 0,
      dots: false,
    },
    1000: {
      items: 2,
      margin: 0,
    }
  }
})


/*---------------------
Testmonials Carousel 1
-----------------------*/
$('#testmonials-modern').owlCarousel({
  loop: false,
  nav: false,    
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      margin: 15,
      dots: false,
    },
    600: {
      items: 1,
      margin: 20,
      dots: false,
    },
    1000: {
      items: 2,
      margin: 0,
    }
  }
})


/*---------------------
Testmonials Carousel 2
-----------------------*/
$('#testmonials-parallax').owlCarousel({
  dots: false,
  loop: false,
  nav: false,   
  smartSpeed: 950, 
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      margin: 15,
      dots: false,
    },
    600: {
      items: 1,
      margin: 0,
      dots: false,
    },
    1000: {
      items: 1,
      margin: 0,
    }
  }
})



/*---------------------
Clients carousel
-----------------------*/
$('#clients').owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  smartSpeed: 950,
  autoplayTimeout: 2000,  
  responsiveClass: true,
  autoplayHoverPause:false,
  responsive: {
    0: {
      items: 2,
      margin: 50,
    },
    600: {
      items: 4,
      margin: 80,
    },
    1000: {
      items: 6,
      margin: 80,
    }
  }
})



/*---------------------
Clients carousel
-----------------------*/
$('.projects_4col').owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  smartSpeed: 500,
  autoplayTimeout: 5000,  
  responsiveClass: true,
  autoplayHoverPause:false,
  responsive: {
    0: {
      items: 1,
      margin: 0,
    },
    600: {
      items: 2,
      margin: 0,
    },
    1000: {
      items: 4,
      margin: 0,
    }
  }
})  



/*---------------------
Single Item Autoplay Carousel
-----------------------*/
$('.carousel-single-item-autoplay').owlCarousel({
  dots: false,
  loop: true,
  nav: false,   
  responsiveClass: true,
  autoplay: true,
  smartSpeed: 950,
  autoplayTimeout: 6000,  
  autoplayHoverPause: true,   
  responsive: {
    0: {
      items: 1,
      margin: 30,
    },
    600: {
      items: 1,
      margin: 0,
    },
    1000: {
      items: 1,
      margin: 0,
    }
  }
})

/*---------------------
Single Item Carousel
-----------------------*/
$('.carousel-single-item').owlCarousel({
  dots: false,
  loop: false,
  nav: false,   
  smartSpeed: 950, 
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      margin: 30,
    },
    600: {
      items: 1,
      margin: 0,
    },
    1000: {
      items: 1,
      margin: 0,
    }
  }
})  


/*---------------------
Gallery Carousel
-----------------------*/
$('.gallery-carousel').owlCarousel({
  center:true,
  stagePadding: 20,
  smartSpeed: 1100,   
  URLhashListener:true,
  startPosition: 'URLHash',
  autoplay:true,
  autoplayTimeout: 3500,
  loop: true,
  nav: false,    
  responsiveClass: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
      margin: 15,
    },
    600: {
      items: 1,
      margin: 15,
    },
    1000: {
      items: 2,
      margin: 30,
    }
  }
})    




/*---------------------
Customiable Carousel
-----------------------*/
var owl_carousel = $("div.customizable-carousel");
if(owl_carousel.length > 0) {  
   owl_carousel.each(function () {
    var $this = $(this),
        $items = ($this.data('items')) ? $this.data('items') : 1,
        $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
        $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
        $navarrows = ($this.data('nav-arrows')) ? $this.data('nav-arrows') : false,
        $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : false,
        $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 3500,
        $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 950,
        $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
        $space = ($this.attr('data-space')) ? $this.data('space') : 15;    
   
        $(this).owlCarousel({
            loop: $loop,
            items: $items,
            responsive: {
              0:{items: $this.data('xs-items') ? $this.data('xs-items') : 1},
              600:{items: $this.data('sm-items') ? $this.data('sm-items') : 2},
              1000:{items: $this.data('md-items') ? $this.data('md-items') : 3},
              1000:{items: $items}
            },
            dots: $navdots,
            autoplayTimeout:$autospeed,
            smartSpeed: $smartspeed,
            autoHeight:$autohgt,
            margin:$space,
            nav: $navarrows,
            navText:["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],
            autoplay: $autoplay,
            autoplayHoverPause: true   
        }); 
   }); 
}



