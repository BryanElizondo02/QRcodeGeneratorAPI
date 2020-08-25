'use strict'

$(document).ready(function(){
    var tiempo;
    var color;
    var tamanno;
    var colorFondo;
    var format; 
    

        $('textarea#message').keydown(function(e) {
            if (tiempo) {
                window.clearTimeout(tiempo);
            }

                tiempo = window.setTimeout(function() {
                color = $('select#color').val();
                tamanno = $('select#dimensiones').val();
                colorFondo = $('select#color-background').val();
                format = $('select#format').val(); 

                var uri = 'http://api.qrserver.com/v1/create-qr-code/?data=' + $('textarea#message').val() +
                '&size=' + tamanno + 'x' + tamanno + '&color=' + color + '&bgcolor=' + colorFondo + '&format=' + format;

                $('img#qrcode').attr(
                  'src', uri);

                  $('#imagen a').attr(
                    'href', uri).attr(
                      'target', '_blank').attr('title', 'QR image');

                },1000);

          });
        

  //Update imagen QR
  $("select#dimensiones").change(function(){

      $('textarea#message').keydown();

  });

  $("select#color").change(function(){

    $('textarea#message').keydown();

  });

  $("select#color-background").change(function(){

    $('textarea#message').keydown();

  });

  $("select#format").change(function(){

    $('textarea#message').keydown();

  });

});
