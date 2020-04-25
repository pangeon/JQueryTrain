$(document).ready(
    function() {
        $('nav').load('templates/menu.html',
            function (response, status, xhr) {
                if(status === "error") {
                    alert('Error: ' + xhr.statusText);
                }
            }
        );
    }
);