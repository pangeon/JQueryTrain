var button = document.getElementById('button');

if(document.addEventListener) { 
	button.addEventListener('click', 
		function() { 
			alert('Click'); 
		}, false);
		
} else {
	button.attachEvent('onclick', 
		function() { 
			alert('Click IE'); 
		});
}