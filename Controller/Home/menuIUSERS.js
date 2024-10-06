$(document).ready(function(){
    
  let variableSesionCotador = localStorage.getItem('contadorModal');

  //Lineas de Código que manejar que el modal de bienvenida sólo aparezca cuando se inicia con una sesión nueva. 
  if(variableSesionCotador==0){
    $('#Presentacion').modal('show'); //Línea de Código para controlar la aparición del modal
    variableSesionCotador += 1; 
    localStorage.setItem('contadorModal', variableSesionCotador);
  }

    //Sección del código que permite por medio de una función cargar los datos del Usuario que inicio Sesión 
  function CargarPerfiles() {

    let variableSesion = localStorage.getItem('usuario');

    let template = "";
    template += `
        <form class="form-inline my-2 my-lg-0" id="PerfilUser">
        <img src="http://localhost/ProyectoFiDSIX/images/perfil.png" class="img">
        <label for="Usuario" class="form-control-sm mr-sm-5"><FONT color="white">${variableSesion} </FONT></label>
        <div class="btn-group">
            <button type="button" class="btn btn-success dropdown-toggle " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/>
              </svg>
              Opciones
            </button>
    
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item verProfile" href="#" data-bs-toggle="modal" data-bs-target="#ModaleUserDatos" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill-gear" viewBox="0 0 16 16">
                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>
              </svg>
              Perfil</a></li>
              <li><a class="dropdown-item cerrarSesionPacien" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
                <path d="M7.5 1v7h1V1h-1z"/>
                <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
              </svg>
              Cerrar Sesión</a></li>
            </ul>
        </div>
        </form>
        `;

    $('#PerfilUser').html(template);//De esta manera enviamos o llenamos el elemento html PerfilUser con el valor de template
  }
    CargarPerfiles(); //Llamamos la función que cargará los datos del usuario

    //BLOQUE DE INTRUCCIONES POR SI EL USUARIO QUIERE CERRAR SU SESIÓN 
    $(document).on('click', '.cerrarSesionPacien', function () {
        window.location.replace("http://localhost/ProyectoFiDSIX/view/iniciodeSesion.html");
    });

    
    const botoncitoCita = document.querySelector("#CitaPaciente");
    botoncitoCita.addEventListener("click", function(evento){
        window.location.replace("http://localhost/ProyectoFiDSIX/view/citasRegistro.html");
    });

    const botoncitoRegistro = document.querySelector("#RegistroBalance");
    botoncitoRegistro.addEventListener("click", function(evento){
        window.location.replace("http://localhost/ProyectoFiDSIX/view/homeUsers.html");
    });

    const botoncitoHistorial = document.querySelector("#Historial");
    botoncitoHistorial.addEventListener("click", function(evento){
        window.location.replace("http://localhost/ProyectoFiDSIX/view/Consultas.html");
    });

    

    

});