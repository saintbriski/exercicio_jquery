$('form').on('submit', function (e) {
    e.preventDefault(); 

    const NomeTarefa =$('#nome-da-tarefa').val();
    const NovoItem = $('<li></li>').text(NomeTarefa);

$('ul').prepend(NovoItem);
NovoItem.fadeIn();
$('#nome-da-tarefa').val('');
});

$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
});