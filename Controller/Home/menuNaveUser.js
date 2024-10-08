$(document).ready(function(){

  



  //BLOQUE DE INTRUCCIONES POR SI EL USUARIO QUIERE CERRAR SU SESIÓN 
  $(document).on('click', '.cerrarSesionPacien', function () {
    window.location.replace("http://localhost/ProyectoFiDSIX/view/iniciodeSesion.html");
  });

    
  const BtnPopupi = document.querySelector('.btnLogin-popup');

  BtnPopupi.addEventListener('click', () => {
    window.location.replace("http://localhost/MyMedicRec/View/iniciodeSesion.html");
  });


  const botoncitoCliente = document.querySelector("#NavegarCliente");
  botoncitoCliente.addEventListener("click", function(evento){
        window.location.replace("http://localhost/MyMedicRec/View/UserDashboard.html");
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