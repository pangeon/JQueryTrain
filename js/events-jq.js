$(document).ready(
	function() {
		sendFormInfo();
		formBehavior();
		showCoorinate();
		changeBackgroundColor();
		keyPress();
		//keyPressMap();
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
function keyPress() {
	$('#button_key').on('keydown mousedown', 
		function(e) {
			$('span').html(e.type + ": " + e.which);
			if(e.keyCode === 13) {
				$('span').append('<br />Click Enter');
			}
			switch(e.button) {
				case 2:
					$('span').append('<br />Click Right Mouse button');
					break;
				case 0:
					$('span').append('<br />Click Left Mouse button');
					break;
			}
			$('span').css('color', 'red');
		}
	);
}
// Multiple events and handlers defined in on() using a "map"
// some errors !
function keyPressMap() {
	$('#button_key')
		.on({
			keydown:
				function() {
					$('span').html(e.type + ": " + e.which);
						if(e.keyCode == 13) {
							$('span').append('<br />Click Enter');
						}
				},
			mousedown: 
				function() {
					switch(e.button) {
						case 2:
							$('span').append('<br />Click Right Mouse button');
							break;
						case 0:
							$('span').append('<br />Click Left Mouse button');
							break;
						}
						$('span').css('color', 'red');
				}
		});
}; 