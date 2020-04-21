$(document).ready(function () {
	var content = "<ul>";
	$('h1').each(function(index) {
		content += "<li>" + $(this).text() + "</li>";
	});
	content += '</ul>';
	var output = $('#hello');
	output.css('color', 'green');
	output.html(content);
	$('p > ul > li').attr(
		{
			title: "list-item",
			style: "padding: 1%;"
		}
	).css('margin','2%'); 
});