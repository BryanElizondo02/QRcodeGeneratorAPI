'use strict'
var contenido = document.getElementById('content-url');

$(document).ready(function(){
    var tiempo;
    var dat = [];
    var cont;

        $('textarea#message').keydown(function(e) {
            if (tiempo) {
                window.clearTimeout(tiempo);
            }

                tiempo = window.setTimeout(function() {
                

                        fetch('https://api.qrserver.com/v1/read-qr-code/?fileurl=' + $('textarea#message').val())
                        .then(data => {return data.json()})
                        .then(data => {
                            dat = data;
                            dat.forEach(function(data, index){
        
                                cont = data.symbol;

                                cont.forEach(function(dataArray, i){
                                    
                                    contenido.innerHTML = dataArray.data;//muestra contenido QR
                                })
                                
                            });


                        });

                },1000);

          });
        

  //Update imagen QR
  $('textarea#message').change(function(){

      $('textarea#message').keydown();

  });

});

