$(document).ready(function(){

    $('#fade-out').click(function(){
        $('#hello').css("background-color", "blue");
        $('#ola').css("background-color", "red");
        $('h3').fadeOut('slow');
        $('h3').delay(2000);
        $('h3').fadeIn('slow');
    });

    $('#fade-in').click(function(){
        $('#hello').css("background-color", "blue");
        $('#ola').css("background-color", "red");
        $('#msg').text('Cor alterada com sucesso!')
            .css({
                color: 'red',
                border: '2px solid red',
                backgroundColor: '#F08080'
            })
            .delay(3000)
            .fadeOut();
    });

});