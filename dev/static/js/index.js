import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import './jquery.mCustomScrollbar.concat.min.js';

document.addEventListener('DOMContentLoaded', function() {
	svg4everybody({});
});

$(window).on("load", function () {
	$(".scroll").mCustomScrollbar({
		axis: 'x',
		theme: 'minimal-dark',
		autoExpandScrollbar: true,
		advanced:{
			autoExpandHorizontalScroll: true
		},
		mouseWheel:{ 
			scrollAmount: 500 
		}
	});
});
