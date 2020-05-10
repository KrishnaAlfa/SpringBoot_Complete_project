		
			
   $('.owl-carousel1').owlCarousel({
    loop:true,
        nav:false,
        dots:true,
        margin: 15,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:false,
        autoplaySpeed:1000,
        responsive: {
            0: {
                items:1,
            },
            600:{
                items:1,
            },
            1000: {
                items:6,
            },
        }
    });
		
		
		 $(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                items: 4,
				nav:true,
                loop: true,
				margin: 10,				
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
				autoplaySpeed:3000,
				responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
              });
			  var PauseX = 1;
			  $('.play').html('Pause');
              $('.play').on('click', function() {
				  if(PauseX) {
                		 owl.trigger('stop.owl.autoplay');
						PauseX = 0;
						$('.play').html('Play');
			  		} else {
						var playVar = owl.trigger('play.owl.autoplay', [1000]);
						PauseX = playVar.length;
						$('.play').html('Pause');
					}
					
					
              })
		
	
			  
			  
			  
			  
			  
            })