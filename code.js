$('form').on('submit', function(event) {
    event.preventDefault();
    const endimg = $('#linkimg').val();
    const newil = $('<li style="display: none"></li>');
    $(`<img src="${endimg}"/>`).appendTo(newil);
    $(`<div class="overlay"> 
    <a href="${endimg}" target="blank">Imagem original</a> 
    </div>`).appendTo(newil);
    newil.appendTo($('ul'));
    newil.fadeIn(1200);
    $('#linkimg').val('');
})

$('#addh').click(function(){
    $('form').slideDown();
})

$('#ccl').click(function(){
    $('form').slideUp();
})


