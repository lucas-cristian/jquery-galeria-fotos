$(document).ready(function() {
    
$('header button').click(function () {
    $('form').slideDown();
});

$('#botao-cancelar').click(function () {
    $('form').slideUp();
});

$('form').on('submit', function (e) {
    e.preventDefault();
    const enderecoImagemNova = $('#endereco-imagem-nova').val();
    const novaImagem = $('<li style="display: none"></li>');
    $(`<img src="${enderecoImagemNova}" />`).appendTo(novaImagem);
    $(`
    <div class="overlay-imagem-link">
        <a href="${enderecoImagemNova}" title="Ver imagem em tamanho real" target="_blank">
        Ver imagem em tamanho real
        </a>
    </div>
    `).appendTo(novaImagem);

    $(novaImagem).appendTo('ul');
    $(novaImagem).fadeIn(2000);
    $('#endereco-imagem-nova').val('');
});

});