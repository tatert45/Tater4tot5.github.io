$(function() {
 $('a[href*="#"]:not([href="#"])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
       $('html, body').animate({
         scrollTop: target.offset().top
       }, 1000);
       return false;
     }
   }
 });
});
$(document).ready(function(){
				$(".filter-button").click(function(){
					var value = $(this).attr('data-filter');
					if(value == "all")
					{
						$('.filter').show();
					}
					else
					{
						$(".filter").not('.'+value).hide();
						$('.filter').filter('.'+value).show();
					}
					if ($(".filter-button").removeClass("active")) {
						$(this).addClass("active");
					}
				});
				$(this).addClass("active");
			});
