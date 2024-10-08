$(document).ready(function(){

  let variableSesionCotador = localStorage.getItem('contadorModal');
  let variableExnentee = "0" ;


  //Lineas de Código que manejar que el modal de bienvenida sólo aparezca cuando se inicia con una sesión nueva. 
  if (variableSesionCotador == 0) {
    $('#Presentacion').modal('show'); //Línea de Código para controlar la aparición del modal
    variableSesionCotador += 1;
    localStorage.setItem('contadorModal', variableSesionCotador);
  }


  //Sección para que sicertos elementos sean escondidp; 
  $('#image-containerAnces').hide();
  $('#image-containerAncesB').hide();
  $('#image-containerAncesC').hide();
  $('#image-containerAncesD').hide();

  let randomNumber1to50 = Math.floor(Math.random() * 50) + 1;
  let randomNumber1to4 = Math.floor(Math.random() * 4) + 1;


  function CargarPerfiles() {

    let variableSesion = localStorage.getItem('nombre')+ " " +localStorage.getItem('apellido');

    let template = "";
    template += `
        <img class="img" src="http://localhost/MyMedicRec/images/Usuario.jpg">
            <label for="Usuario" class="form-control-sm"><font color="black">${variableSesion}</font></label>
            <div class="btn-group">
                <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                    Opciones
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">Perfil</a></li>
                    <li><a class="dropdown-item volverMenuNav " href="#">Volver Menú Principal</a></li>
                    <li><a class="dropdown-item cerrarSesionPacien" href="#">Cerrar Sesión</a></li>
                </ul>
            </div>`;

    $('#PerfilUser').html(template);//De esta manera enviamos o llenamos el elemento html PerfilUser con el valor de template
  }

  function MostrarTips() {

    const postDatos = {
      'Id_tips': randomNumber1to50,
    };

    $.ajax({
      type: 'POST',
      url: 'https://www.sistecsolutions.net/ehealth/ApisTesis/Tips/traerTips.php',
      data: postDatos,
      dataType: 'json', // Establece el tipo de datos esperado
      success: function(response) {
          // Verifica si la respuesta es un arreglo
          if (Array.isArray(response)) {
            // Procesa la respuesta como un arreglo
            let userData = response[0];
            let processInfo = response[response.length - 1];

            if (processInfo.process === "Datos_de_tips_encontrados") {
              /* // Almacena los datos del usuario */
              /* let Descripcion_Tip = userData.Descripcion_Tip; */


              let template = "";
              template += `${userData.Descripcion_Tip}` ;
              console.log(userData.Descripcion_Tip);

              $('#dynamic-text36').html(template);
              $('#dynamic-text37').html(template);
              $('#dynamic-text38').html(template);
              $('#dynamic-text39').html(template);
              ;

              if (randomNumber1to4 == 1){
                $('#image-containerAnces').show();
                $('#image-containerAncesB').hide();
                $('#image-containerAncesC').hide();
                $('#image-containerAncesD').hide();

              }else{
                if (randomNumber1to4 == 2){
                  $('#image-containerAncesB').show();
                  $('#image-containerAnces').hide();
                  $('#image-containerAncesC').hide();
                  $('#image-containerAncesD').hide();
                 
  
                }else{
                  if (randomNumber1to4 == 3){
                    $('#image-containerAnces').hide();
                    $('#image-containerAncesB').hide();
                    $('#image-containerAncesC').show();
                    $('#image-containerAncesD').hide();

                  }else{
                    if (randomNumber1to4 == 4){
                      $('#image-containerAnces').hide();
                      $('#image-containerAncesB').hide();
                    $('#image-containerAncesC').hide();
                    $('#image-containerAncesD').show();
                    }
                  }
                }
              }
            }
          } else {
              // Si no es un arreglo, se asume que es un objeto
              if (response.process === "Datos_de_tips_no_encontrados") {
                  //alert(response.message); // Muestra el mensaje de error
               
              }
          }
      },
      error: function(error) {
          console.log("Error: ", error);
      }
  });
    

    
  }
  CargarPerfiles(); //Llamamos la función que cargará los datos del usuario
  MostrarTips();

  //BLOQUE DE INTRUCCIONES POR SI EL USUARIO QUIERE CERRAR SU SESIÓN
  $(document).on('click', '.cerrarSesionPacien', function () {
    window.location.replace("http://localhost/MyMedicRec/View/iniciodeSesion.html");
  });

  $(document).on('click', '.volverMenuNav', function () {
    window.location.replace("http://localhost/MyMedicRec/View/MenuUserPrincipal.html");
  });



  

  



  /* //BLOQUE DE INTRUCCIONES POR SI EL USUARIO QUIERE CERRAR SU SESIÓN 
  $(document).on('click', '.cerrarSesionPacien', function () {
    window.location.replace("http://localhost/ProyectoFiDSIX/view/iniciodeSesion.html");
  });


  const botoncitoCita = document.querySelector("#CitaPaciente");
  botoncitoCita.addEventListener("click", function (evento) {
    window.location.replace("http://localhost/ProyectoFiDSIX/view/citasRegistro.html");
  });

  const botoncitoRegistro = document.querySelector("#RegistroBalance");
  botoncitoRegistro.addEventListener("click", function (evento) {
    window.location.replace("http://localhost/ProyectoFiDSIX/view/homeUsers.html");
  });

  const botoncitoHistorial = document.querySelector("#Historial");
  botoncitoHistorial.addEventListener("click", function (evento) {
    window.location.replace("http://localhost/ProyectoFiDSIX/view/Consultas.html");
  }); */

});