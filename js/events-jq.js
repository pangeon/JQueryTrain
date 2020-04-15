$(document).ready(
	function() {
		sendFormInfo();
		formBehavior();
		showCoorinate();
		changeBackgroundColor();
	}
);
function sendFormInfo() {
	$('#send').click(
		function() {
			var name = $('#name').val();
			var surname = $('#surname').val();
			$('#output').text(name + ' ' + surname);
		}
	);
}
function formBehavior() {
	$('form > table').mouseenter(
		function() {
			$(this).toggleClass('toggleForm');
		}
	).mouseleave(
		function() {
			$(this).toggleClass('toggleForm');
		}
	);
}
function showCoorinate() {
	$('body').mouseup(
		function(e) {
			$('h4').text('X: ' + e.pageX + ' Y: ' + e.pageY);
		}
	);
}
function changeBackgroundColor() {
	$('#colors').change(
		function() {
			var color = $(this).val();
			$('body').css('background-color', color);
		}
	);
}