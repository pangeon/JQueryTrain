$(document).ready(function() {
    TableEditor.highlightRow('#friends tr', 'yellow');
    TableEditor.addRow('#friends tbody', '#addRowButton');
    TableEditor.removeRow('#removeRowButton');
})
var TableEditor = {
    addRow: function(selectorBody, button) {
        var body = $(selectorBody);
        $(button).on('click', 
            function() {
                var num = parseInt($('tbody > tr:last-child > td:first-child').text()) + 1;
                if(isNaN(num)) {
                    num = 1;
                }
                var name = $('#addNameRowInput').val();
                var surname = $('#addSurnameRowInput').val();
                body.append(
                '<tr>' +
                    '<td>'+ num +'</td>' +
                    '<td>'+ name +'</td>' +
                    '<td>'+ surname +'</td>' +
                '</tr>');
                TableEditor.highlightRow('#friends tr', 'yellow');
            }
        );
    },
    removeRow: function(button) {
        $(button).on('click', 
            function() {
                var num = parseInt($('tbody > tr:last-child > td:first-child').text());
                $("tr").remove(":contains('" + num + "')");
                TableEditor.highlightRow('#friends tr', 'yellow');
            }
        );
    },
    highlightRow: function(selector, color) {
        $(selector).hover(
            function() {
                $(this).css('background-color', color);
            },
            function() {
                $(this).css('background-color', 'white');
            }
        );
    } 
}


