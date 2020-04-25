$(document).ready(
    function () {
        getDataFromJSONFile();
        sendForm();
    }
);
function getDataFromJSONFile() {
    $('#showJSON').click(
        function() {
            $.get('json/list.json',
                function (data) {
                    let pageData = $('#outputJSON');
                    for(let i = 0; i < data.length; i++) {
                        pageData.append('<tr><td>' + data[i].name + ' ' + data[i].surname + '</td></tr>');
                    }
                }
            );
        }
    );
}
// TODO: Send person data via form
function sendForm() {
    $('#send').click(
        function () {
            let person = 'person=' + JSON.stringify({
                name: $('#name').val(),
                surname: $('#surname').val()
            });
            alert(person);
            $.ajax({
                url: 'json/list.json',
                data: person,
                dataType: 'json',
                success:
                    function (data, status, xhr) {
                        $('#outSendJSON').html('Insert status: '
                            + data[0].name + ' '
                            + data[0].surname);
                    },
                error:
                    function (xhr, status, error) {
                        alert('Error: ' + status);
                    }
            });
        }
    )
}