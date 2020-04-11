$(document).ready(function() {
	$('#hello').html('Hello World').add('p');

	$('table, td').each(function() {
		$(this).css('border', '1px solid green');
		$(this).css('padding', '1%');
		$(this).css('margin', '1%');
	});
	$('td:contains(1)').each(function() {
		$(this).html('Agnieszka');
	});
	$('td:contains(4)').each(function() {
		$(this).html('Kamil');
	});
	$('td:contains(7)').each(function() {
		$(this).html('Weronika');
	});
	$('td:eq(1)').each(function() {
		$(this).html('Marcin');
	});
	$('td:eq(2)').each(function() {
		$(this).html('Joanna');
	});
	$('tr:eq(2) > td:nth-child(3)').each(function() {
		$(this).html('Marek');
	});
	$('tr:eq(2) > td:nth-child(2)').each(function() {
		$(this).html('Kacper');
	});
	$('tr:eq(1) > td:nth-child(2)').each(function() {
		$(this).html('Jan');
	});
	$('tr:eq(1) > td:nth-child(3)').each(function() {
		$(this).html('Genowefa');
	});
});