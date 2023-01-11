// remap jQuery to $
(function($){

	
	$('#sidebar2 .sect_nav li:first-child').addClass('current');

	////Scrollspy
	// Cache selectors
	var lastId,
		topMenu = $("#branding"),
		topMenuHeight = topMenu.outerHeight()+300,
		// All list items
		menuItems = $('.sect_nav').find(".spy a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
			var item = $($(this).attr("href"));
			if (item.length) { return item; }
		});

	// Bind to scroll
	$(window).scroll(function(){
		// Get container scroll position
		var fromTop = $(this).scrollTop()+topMenuHeight;
		// Get id of current scroll item
		var cur = scrollItems.map(function(){
			if ($(this).offset().top < fromTop) {
				return this;
			}
		});
		// Get the id of the current element
		cur = cur[cur.length-1];
		var id = cur && cur.length ? cur[0].id : "";
		if (lastId !== id) {
			lastId = id;
			// Set/remove active class
			menuItems
			.parent().removeClass("current")
			.end().filter("[href=\\#"+id+"]").parent().addClass("current");
		}
	}); // end scrollspy


//// button functions

	$(function(){
		// open main menu
		$('#slide-trigger').click(function(){
			$('#navmain').fadeIn();
			$('#navmain').addClass('viz');
			return false;
		});
		//hide nav on esc
		$(document).keyup(function(e) { // reset on esc keypress
	    if (e.which === 27) {
		    $('#navmain.viz').fadeOut();
		  }
		});
	});

		$('.closex').click(function() {
			$(this).parent().fadeOut('fast');
			return false;
		});

		$('.overlaunch').click(function() {
			$('#sim-selector').fadeIn('fast');
			return false;
		});

		$('.pullflag').click(function() {
			$(this).parent().toggleClass('open');
		});
		$(document).keyup(function(e) {
			if ($('#sidebar2').hasClass('open')) {
		    if (e.which === 27) { $('#sidebar2').removeClass('open'); }
		  }	
		});
	
	//// show/hide sharing links
		$('.sharing-title').click(function() {
			$(this).parent().toggleClass('open');
		});
	
		//// turn search on and off
		$( ".search_switch" ).click(function() {
		  $( "#topsearch" ).toggle( 'fast', function() {
				$('input#s').focus();
		  });
		});
		
		//// show/hide manual menu on mobile sizes
		$('#manual-menu-header').click(function() {
			$(this).toggleClass('open');
			$(this).next('.menu-policy-design-menu-container').toggleClass('open');
		});
	

	//switch menu triggers on/off
	$(function() {
		$('.trigger').click(function(){
			$(this).toggleClass('on');
		});
		$(document).keyup(function(e) {
		  if ($("#pageslide").is(":visible")) {
		    if (e.which === 27) { $('.trigger').removeClass('on'); }
		  }
		});
	});
	
	


// fix header + nav over page when scrolling
	$(function(){
	  var menuOffset = $('#branding').outerHeight();
// 			sidebarHeight = $('#sidebar').outerHeight();
		$(document).ready(function(){
	    $('#shim').css( 'height',(menuOffset + 10) );
	  });
	  $(document).bind('ready scroll',function() {
	  });
	});


// show content with read more button
	$(function(){
		var button = 'a.read-more-button',
			sideButton = '.sect_nav a',
			content = '.article-content';
			
		if($(button).length) {
			var $el, $p, $ps, $up, totalHeight;

			$(window).load(function(){
				
				var rpar = $('p.read-more'),
					btop = $(rpar).offset().top,
					contentHeight = $(content).outerHeight();

				$(content)
					.css({
						"height": (btop)
					});
			
				function expando() {
				  totalHeight = 0;
				  $el = $(this);
				  $p  = rpar;
				  $up = content;
				  $ps = $(content).find("*:not('.read-more')");
				  
				  // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
				  $ps.each(function() {
				    totalHeight += $(this).outerHeight();
				  });
				        
				  $(content)
				    .css({
				      // Set height to prevent instant jumpdown when max height is removed
				      "height": $(content).height(),
				    })
				    .animate({
				      "height": contentHeight,
				      duration: 1000
				    });
				  
				  // fade out read-more
				  $p.fadeOut();
				  
				  // prevent jump-down
				  return false;
				}
				$(button).click(function() {
					expando();
				});
				$(sideButton).click(function() {
					expando();
				});

		  });
		}
	});

		$(function() {
			var item = $('.sidebar-menu li.menu-item-has-children'),
				caret = '<span class="caret"><svg aria-hidden="true" data-prefix="fas" data-icon="caret-right" class="svg-inline--fa fa-caret-right fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg></span>';
			$(item).prepend(caret);

$(item).on('click', '.caret', function() {
				$(this).parent().toggleClass('open');
});
/*
			$(caret).click(function() {
window.alert("hi");
				$(this).parent().toggleClass('open');
			});
*/
		});


	// Dom Ready
	// You might also want to wait until window.onload if images are the things that
	// are unequalizing the blocks
	$(document).ready(function(){

    $("#page").fitVids();

		$('#video_slideshow').slick({
		  accessibility: true,
	    dots: true,
		  autoplay: false,
		  autoplaySpeed: 5000,
		  infinite: true,
	    pauseOnHover: false,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
		  nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
		});

	
		// open submenus on mobile only.
		var $window = $(window);
		function checkWidth() {
			var docWidth = $window.width();
			if(docWidth < 701) {
				$('#menu-main-menu li.menu-item-has-children>a').click(function() {
					$(this).parent().siblings('li').removeClass('open');
					$(this).parent().siblings('li').find('li.menu-item-has-children').removeClass('open');
					$(this).parent().toggleClass('open');
					return false;
				});
			}
		}
		checkWidth();
		$(window).resize(checkWidth);

	});

	$(window).load(function() {
	  var menuOffset = $('#branding').outerHeight(),
			botSpacing = $("#bottom").outerHeight();
    $("#sidebar").sticky({topSpacing:menuOffset, bottomSpacing: botSpacing});
    $("#sidebar2").sticky({topSpacing:menuOffset, bottomSpacing: botSpacing});

				// smooth scroll to an anchored element. nested inside the other function so the sidebar links will hit their targets accurately
				$(function() {
			// 		var topOffset = $('#shim').outerHeight();
				  $('a[href*=\\#]:not([href=\\#])').click(function() {
				    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
				      var target = $(this.hash);
				      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				      if (target.length) {
				        $('html,body').animate({
				          scrollTop: (target.offset().top) - 120
				        }, 500);
				        return false;
				      }
				    }
				  });
				});

	});

	$(window).resize(function() {
	});


})(this.jQuery);