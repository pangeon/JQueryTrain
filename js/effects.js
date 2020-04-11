// https://api.jquery.com/hover/#hover-handlerIn-handlerOut
$("td").hover(
  function() {
	$(this).css("background-color", "red");
  }, function() {
	$(this).css("background-color", "white");
  }
); 
$("td.fade").hover(function() {
  $(this).fadeOut(100);
  $(this).fadeIn(500);
});