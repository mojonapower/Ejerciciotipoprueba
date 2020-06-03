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
                alert(msg+ "Información enviada con éxito");
                var direccion='http://72.14.183.67/ws/qr/archivos_qr/'+usuario+"_qr.html"
                document.getElementById('urlresultado').innerHTML = "<a href="+' " '+direccion+'">'+ 'Su código QR será visualizado desde acá </a>';
            },							
            // acciones cuando hay error en comunicacion el el php
            error: function(xhr, status,msg2 ){
                //alert('4');			
                alert("error");
                console.log(xhr,status,msg2);
            }
        });//fin ajax
    }
	
function scanCode()
{	
    cordova.plugins.barcodeScanner.scan(
      function (result) {
              
          var msj='';
          //var detCapturado='';
          alert(msj)
          if(result.cancelled==true)
        mensaje("Captura Cancelada.");
              //resultado="We got a barcode\n" +"Result: " + result.text + "\n" +"Format: " + result.format + "\n" +"Cancelled: " + result.cancelled;
          msj=result.text;
          alert(msj);
              
            var p1 = document.createElement("p");
            p1.innerHTML = msj;
           document.getElementById('pCodigo').appendChild(p1);
         }, 
        function (error) {
            alert("Captura Fallida: " + error);
        }
    );//fin scan plugin cordova
       
}//fin function
            