function FuerzaBruta(){

    var usuario= document.getElementById('UsuarioFuerzaBruta').value;
    var qr= document.getElementById('UbicacionManual').value;
   
  
    alert("Datos ingresados: Usuario "+usuario +", Ubicación:Latitud,Longitud :" +qr);
    $.ajax({
        cache: false,
        // puede ser GET, POST
        type: "POST",  							
        // Tipo de retorno
        dataType: "html",
        // pagina que recibe la llamada
        url: "http://72.14.183.67/ws/qr/qr.php",  							
        // datos, ej: $_POST['data']
        data:{
            user:usuario,
            qr:qr					
        },
        beforeSend: function(){  
            alert("procesando")
            },
            // acciones cuando me retorna algo el PHP
            success: function(msg){
                alert(msg);
                
            },							
            // acciones cuando hay error en comunicacion el el php
            error: function(xhr, status,msg2 ){
                //alert('4');			
                alert("error");
                console.log(xhr,status,msg2);
            }
        });//fin ajax
    }
            