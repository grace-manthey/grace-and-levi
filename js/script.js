/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	//jquery code here

// Makes line fade in on page load

	$(".line").fadeIn(2000);

// Makes menu and background fixed when scroll to it

	$(".invisible").waypoint(function(dir){
				// console.log("wayyy");
				if (dir=="down") {
			 		$('.background').css({'position':'fixed', 'top':'0'});	
			 		$('.menu').css({'position':'fixed', 'top':'0', 'background-color':'white'});
			 		$('.title').hide();

			 	} else if (dir=="up") {
			 		$('.background').css({'position':'absolute', 'top':'500px'});
			 		$('.menu').css({'position':'absolute', 'top':'505px', 'background-color':'rgba(0,0,0,0)'});
			 		$('.title').show();	
			 	}  

			});


// HOVER OVER LOGOS AND THEY WIGGLE	

	$('.logos').hover(function(){
		$(this).toggleClass('wiggle');

	});


// HOVER OVER PHOTOS AND THEY CHANGE
	$('.regimg img').mouseenter(function(){
		$(this).css({'box-shadow': '4px 4px 5px grey', 'width':'105%'});

	})

	$('.regimg img').mouseleave(function(){
		$(this).css({'box-shadow': '4px 4px 5px black', 'width':'100%'});

	})



// mobile menu stuff!

	$(".menuarrow").click(function(){
		console.log('click!!');
		$('.desktopmenu').slideDown();
		$(this).hide();
		$('.menuarrowup').show();
		$('.menu').css({'height': '266px'});
		$('.map').css({'top':'780px'});
		$('.regbox').css({'top':'780px'});
		$('.rsvpbox').css({'top':'780px'});
		$('.outerphotos').css({'top':'810px'});
		$('.aboutword').css({'top':'1160px'});

	});

	$('.menuarrowup').click(function(){
		console.log('click again!');
		$('.desktopmenu').slideUp();
		$(this).hide();
		$('.menuarrow').show();
		$('.map').css({'top':'600px'});
		$('.regbox').css({'top':'600px'});
		$('.rsvpbox').css({'top':'600px'});
		$('.outerphotos').css({'top':'700px'});
		$('.aboutword').css({'top':'1100px'});
		$('.menu').css({'height':'60px'});

	});


// slide show stuff!

var slidelist = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44"];	

	var leng = slidelist.length;

	for (var i = 0; i<leng; i++) {
		// console.log(wayslist[i]);
		$(".photos").append('<img src="img/slideshow/wedding'+ slidelist[i] +'.jpg">');
	}

$('.photos').cycle({
	fit: true,
	delay: -1000,
	speed: 2000,
	fx: 'fade'
});	

// $('.nextarrow').click(function(){
// 	console.log('click next!');

// });

// $('.backarrow').click(function(){
// 	console.log('click back!');
// });












}); //end document.ready block
