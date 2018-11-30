$(document).ready(function() {
	$("#encabezado").load("encabezado.html");
    $("#menu").load("menu.html");
    $("#pie").load("pie.html");

    var ciudades = [["La Plata", "Bahia Blanca", "Mar del Plata"],
                    ["San Fernando del Valle de Catamarca", "Valle Viejo", "Andalgalá,Fiambalá"]];
     
    

});

$("option").click(function(){
        $("option").click(function(){
            var i = parseInt($("#valor").val());

            document.getElementById("demo").innerHTML = "<select class='cmapo'><option>"+ciudades[i][0]+"</option><option>"+ciudades[i][1]+"</option><option>"+ciudades[i][2]+"</option></select>";
        });
    });

function mostrar(id){
    var img = document.getElementById(id);
    img.onclick = function(){
        var modal = document.getElementById('myModal');
        modal.style.display = "block";
        var modalImg = document.getElementById("img01");
        modalImg.src = this.src;
        var captionText = document.getElementById("caption");
        captionText.innerHTML = this.alt;
    }
}
function cerrar(){
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    }
}

    $(document).keyup(function(e){

    if(e.which==27) {

        $("#myModal").hide();

    }

});

function control(){

    var datos = $('.campo').val();

    if (datos == null || datos == '') {
        alert('campos obligatorios');
    }

    calcularEdad();
}

function calcularEdad(){
        
        var fecha = $('#date').val();

        if (fecha == null || fecha == '') {
            alert('Campos obligatorios: fecha de nacimiento');
        }else{
            var values = fecha.split(" ");
            var dia = values[2]; 
            var mes = values[1]; 
            var anio = values[0]; 

            var fecha_hoy = new Date(); 
            var ahora_ano = fecha_hoy.getFullYear(); 
            var ahora_mes = fecha_hoy.getMonth()+1; 
            var ahora_dia = fecha_hoy.getDate(); 
            var edad = ahora_ano - anio;


        if ( ahora_mes < mes ){
            edad=edad-1
        }
        if (mes == ahora_mes && ahora_dia < dia){
            edad=edad-1
        }

        if (edad > 13) {
            alert("Mayor de 13 años!");
        }else{
            alert("Menor de 13 años!");
        }
    }
}


function wasa(){
    $('#mensaje').css('display','block');
}      

function noWasa(){
    $('#mensaje').css('display','none');
}        



// $( function(){
//     var bgImages = [ '../imagenes/foto2.jpg', '../imagenes/foto1.jpg', '../imagenes/foto3.jpg', '../imagenes/tres.jpg' ];
//     var currImage = '../imagenes/foto2.jpg';
//     setInterval( function(){
//         do{
//             var randImage = bgImages[Math.ceil(Math.random()*(bgImages.length-1))];
//         }while( randImage == currImage )
//         currImage = randImage;
//         $('#image').BgImageTransition( 'images/'+currImage );
//     }, 5000)
// }); 

        