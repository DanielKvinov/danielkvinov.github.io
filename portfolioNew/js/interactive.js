$(document).ready(function() {
	$('#fullpage').fullpage({
		scrollingSpeed: 100,
        scrollBar: true,
        // fitToSectionDelay: 100,
	});
	
	$('.skills-box').appear();
	// Когда класс class появляется в области видимости экрана срабатывает нужный нам код.
	$('.skills-box').on('appear', function(event, $all_appeared_elements) {

		$('.skills-unit').skillBars({

			  // number start
			  from: 0,       

			  // number end 
			  to: false,      

			  // animation speed
			  speed: 1500,   

			  // how often the element should be up<a href="https://www.jqueryscript.net/time-clock/">date</a>d
			  interval: 100,    

			  // the number of decimal places to show
			  decimals: 0,      

			  // callback method for every time the element is updated,
			  onUpdate: null,   

			  // callback method for when the element finishes updating
			  onComplete: null,   
			  // CSS classes

			  classes:{
			  	skillBarBar : '.skills-unit__progress-percent',
			  	skillBarPercent : '.skills-unit__percent',
			  }
			  
			});
	});
});