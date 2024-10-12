$(document).ready(function () {

  let variableSesionCotador = localStorage.getItem('contadorModal');
  let variableExnentee = "0";


  //Lineas de Código que manejar que el modal de bienvenida sólo aparezca cuando se inicia con una sesión nueva. 
  if (variableSesionCotador == 0) {
    $('#Presentacion').modal('show'); //Línea de Código para controlar la aparición del modal
    variableSesionCotador += 1;
    localStorage.setItem('contadorModal', variableSesionCotador);
  }


  //Sección para que sicertos elementos sean escondidp; 
  //<!--  TitulitoCitasMedicas,TablaCitaMédica, MostraInfoVentas -->


  $('#TitulitoPaceintesDepende').hide();
  $('#TablaPacientesDependiente').hide();
  $('#MostraInfoPaciente').hide();
  $('#ResultadosPacientes').hide();


  $('#TitulitoAlergias').hide();
  $('#TablaAlergias').hide();

  $('#TitulitoAfecciones').hide();
  $('#TablaAfecciones').hide();



  $('#TitulitoCitasMedicas').hide();
  $('#TablaCitasMedica').hide();
  $('#MostraInfoCitasMedicas').hide();



  $('#image-containerAnces').hide();
  $('#image-containerAncesB').hide();
  $('#image-containerAncesC').hide();
  $('#image-containerAncesD').hide();


  //Invocación de la funciones necesarias
  Busqueda_BarraPaciente();

  let randomNumber1to50 = Math.floor(Math.random() * 50) + 1;
  let randomNumber1to4 = Math.floor(Math.random() * 4) + 1;


  function CargarPerfiles() {

    let variableSesion = localStorage.getItem('nombre') + " " + localStorage.getItem('apellido');

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
      success: function (response) {
        // Verifica si la respuesta es un arreglo
        if (Array.isArray(response)) {
          // Procesa la respuesta como un arreglo
          let userData = response[0];
          let processInfo = response[response.length - 1];

          if (processInfo.process === "Datos_de_tips_encontrados") {
            /* // Almacena los datos del usuario */
            /* let Descripcion_Tip = userData.Descripcion_Tip; */


            let template = "";
            template += `${userData.Descripcion_Tip}`;
            console.log(userData.Descripcion_Tip);

            $('#dynamic-text36').html(template);
            $('#dynamic-text37').html(template);
            $('#dynamic-text38').html(template);
            $('#dynamic-text39').html(template);
            ;

            if (randomNumber1to4 == 1) {
              $('#image-containerAnces').show();
              $('#image-containerAncesB').hide();
              $('#image-containerAncesC').hide();
              $('#image-containerAncesD').hide();

            } else {
              if (randomNumber1to4 == 2) {
                $('#image-containerAncesB').show();
                $('#image-containerAnces').hide();
                $('#image-containerAncesC').hide();
                $('#image-containerAncesD').hide();


              } else {
                if (randomNumber1to4 == 3) {
                  $('#image-containerAnces').hide();
                  $('#image-containerAncesB').hide();
                  $('#image-containerAncesC').show();
                  $('#image-containerAncesD').hide();

                } else {
                  if (randomNumber1to4 == 4) {
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
      error: function (error) {
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



  //Bloque de intrucciones para los pácientes Dependientes 
  function Obtener_Usuarios() {
    let variableSesion = localStorage.getItem('idUsuario');

    const postDatosSesion = {
      'Id_Usuario': variableSesion,
    };

    /* console.log("PUTATA") */
    $.ajax({
      type: "POST",
      url: "https://www.sistecsolutions.net/ehealth/ApisTesis/PacientesDependientes/ListadosUserDepen.php",
      data: postDatosSesion,
      dataType: 'json',
      success: function (response) {
        console.log(response);
        $('#TablaPaceintesDependB').show();

        if (Array.isArray(response)) {
          let userData = response.slice(0, -1); // Excluir el último elemento de información de proceso

          if (response[response.length - 1].process === "Datos_de_Usuario_Dependiente_encontrados") {
            let template = '';

            userData.forEach(user => {
              template += `
                          <tr Id_Homework="${user.Cedula_DNI}" class="table-info text-center">
                              <td>${user.Id_Usuario}</td>
                              <td>${user.NombreC_U}</td>
                              <td>${user.Apellido_CU}</td>
                              <td>${user.Cedula_DNI}</td>
                              <td>${user.Edad}</td>
                              <td>
                                  <button class="btn btn-danger btn-text-center mostrarPaciente" data-bs-toggle="modal" data-bs-target="#ModalDatosPacientes">

                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                  </svg>
                                      Datos Completos
                                  </button>
                              </td>
                          </tr>`;
            });


            $('#DatosPacientesDepend_Encontrados').html(template);
            $('#TitulitoPaceintesDepende').show();
            $('#TablaPacientesDependiente').show();
            $('#ResultadosPacientes').hide();
          }
        } else {
          if (response.process === "Error_List_User_Depend") {
           // alert(response.message); // Muestra el mensaje de error
            $('#ResultadosPacientes').show();
          }
        }

        // Otros elementos que ocultas
        /* $('#TitulitoCitasMedicas').hide();
        $('#TablaCitasMedica').hide();
        $('#MostraInfoPaciente').hide();
        $('#image-Tip').hide();
        $('#lupabusquda').hide();
        $('#botonesnavegacioUser').hide(); */
      },
      error: function (xhr, status, error) {
        console.error('Error en la petición AJAX:', error);
        // Manejo de errores
      }
    });
  }

  $(document).on('click', '.mostrarPaciente', function () {
    let element = $(this)[0].parentElement.parentElement;    //aquí se almacena toda la fila por medio de la propiepdad parentElement y va de "td" al padre "tr"
    let id = $(element).attr('Id_Homework');
    let variableSesion = localStorage.getItem('idUsuario');

    const postDatosSesionA = {
      'Id_UsuarioPrincipal': variableSesion,
      'Cedula_DNI': id,
    };
    //aquí se almacena el id del botón selecccionado por medio de fila padre
    $('#MostraInfoPaciente').hide();
    let urll = 'https://www.sistecsolutions.net/ehealth/ApisTesis/PacientesDependientes/BuscarUserDepen.php?'

    $.post(urll, postDatosSesionA, function (response) {
      let templates = '';

      if (Array.isArray(response)) {
        let userData = response.slice(0, -1);
        console.log(userData);
        // Excluir el último elemento de información de proceso

        if (response[response.length - 1].process === "Datos_de_Usuario_Dependiente_encontrados") {
          let templates = '';

          userData.forEach(userPatient => {
            templates += `
            
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center"> Registro Paciente:</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.Id_Usuario}">
                  </div>   
              </div> 
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Nombre del Paciente :</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.NombreC_U}">
                  </div>   
              </div>
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Segundo Nombre :</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.Según_nombre}">
                  </div>   
              </div>
  
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Apellido del Paciente :</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.Apellido_CU}">
                  </div>   
              </div>
  
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Segundo Apellido :</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.SegundoAC_U}">
                  </div>   
              </div>
  
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Género Paciente :</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.Sexo}">
                  </div>   
              </div>
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Dorección Paciente :</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.Dirección}">
                  </div>   
              </div>
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Edad Paciente :</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.Edad}">
                  </div>   
              </div>
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Cédula Paciente :</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.Cedula_DNI}">
                  </div>   
              </div>
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Tipo de Sangre Paciente :</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.Tipo_D_Sangre}">
                  </div>   
              </div>
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Peso Paciente :</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.Peso}">
                  </div>   
              </div>
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Altura Paciente :</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.Altura}">
                  </div>   
              </div>
  
              `;
          });

          $('#formulariomodalPaciente').html(templates);
          $('#MostraInfoPaciente').show();
        }
      } else {
        if ((response.process == "Cedulanovinculada") || (response.process == "Errordecedulaenbasedatos") || (response.process == "Datos_de_Cedula_vinculada_no_encontrados")) {
          alert(response.message); // Muestra el mensaje de error
          $('#ModificarInfoMarketingf').hide();
        }
      }
    });
  });


  function Busqueda_BarraPaciente() {
    $('#busquedaPaciente').keyup(function (e) {
      if ($('#busquedaPaciente').val()) { /*Este if es para validar la caja de busqueda tiene algo en ella 
        de ser así se realiaza lo siguiente */

        let busquedaCedula = $('#busquedaPaciente').val();
        let variableSesion = localStorage.getItem('idUsuario');

        const postDatosSesionB = {
          'Id_UsuarioPrincipal': variableSesion,
          'Cedula_DNI': busquedaCedula,
        };

        console.log("Valor de postDatosSesionB:", postDatosSesionB);


        //console.log(busqueda);
        $.ajax({
          type: "POST",
          url: "https://www.sistecsolutions.net/ehealth/ApisTesis/PacientesDependientes/BuscarUserDepen.php?",
          data:  postDatosSesionB ,
          dataType: 'json',
          success: function (response) {
            console.log(response);

            if (Array.isArray(response)) {
              let userData = response.slice(0, -1);
              console.log(userData);
              // Excluir el último elemento de información de proceso

              if (response[response.length - 1].process === "Datos_de_Usuario_Dependiente_encontrados") {
                let template = '';

                userData.forEach(userPatient => {
                  template += `
                      <tr Id_Homework="${userPatient.Cedula_DNI}" class="table-info text-center">
                            <td>${userPatient.Id_Usuario}</td>
                            <td>${userPatient.NombreC_U}</td>
                            <td>${userPatient.Apellido_CU}</td>
                            <td>${userPatient.Cedula_DNI}</td>
                            <td>${userPatient.Edad}</td>
                            <td>
                              <button class="btn btn-danger btn-text-center mostrarPaciente" data-bs-toggle="modal" data-bs-target="#ModalDatosPacientes">
      
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                  </svg>
                                      Datos Completos
                              </button>
                           </td>
                        </tr>

                        `;
                });

                console.log(template); 

                $('#DatosPacientesDepend_Encontrados').html(template);
                $('#TablaPaceintesDependB').show();
                $('#TitulitoPaceintesDepende').show();
                $('#TablaPacientesDependiente').show();
                $('#ResultadosPacientes').hide();
              }
            } else {
              if ((response.process == "Cedulanovinculada") || (response.process == "Errordecedulaenbasedatos") || (response.process == "Datos_de_Cedula_vinculada_no_encontrados")) {
                //alert(response.message); // Muestra el mensaje de error
                $('#TablaPaceintesDependB').hide();
                $('#ResultadosPacientes').show();
              }
            }

          }
        });
      } else {
        Obtener_Usuarios(); //Esot es para por si las moscas no exutse nugún caracter en la barra de búsqueda
      }
    });
  }


  //Bloque de Intrucciones para Alergias
  function Obtener_Alergias() {
    let variableSesion = localStorage.getItem('idUsuario');

    const postDatosSesion = {
      'Id_Usuario': variableSesion,
    };

    /* console.log("PUTATA") */
    $.ajax({
      type: "POST",
      url: "https://www.sistecsolutions.net/ehealth/ApisTesis/Alergias/ListadosdeAlergiaUser.php",
      data: postDatosSesion,
      dataType: 'json',
      success: function (response) {
        console.log(response);

        if (Array.isArray(response)) {
          let userData = response.slice(0, -1); // Excluir el último elemento de información de proceso

          if (response[response.length - 1].process === "Datos_de_alergia_encontrados") {
            let template = '';

            userData.forEach(user => {
              template += `
                        <tr Id_Homework="${user.Id_Alergia}" class="table-info text-center">
                            <td>${user.Id_Alergia}</td>
                            <td>${user.Nombre_Alergia}</td>
                            <td>${user.descripcion_TipoAler}</td>
                            <td style="max-height: 100px; overflow-y: auto; text-align: justify; padding: 10px; border: 1px solid #ddd;">${user.DecripcionPropia_Alerg}</td>
                            <td>${user.Fecha_Regis_Aler}</td>
                            <td>
                                <button class="btn btn-danger btn-text-center mostrarAlergias" data-bs-toggle="modal" >

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                </svg>
                                    Datos Completos
                                </button>
                            </td>
                        </tr>`;
            });

            $('#DatosAlergias_Encontrados').html(template);
            $('#TitulitoAlergias').show();
            $('#TablaAlergias').show();
          }
        } else {
          if (response.process === "Datos_de_alergia_no_encontrados") {
            alert(response.message); // Muestra el mensaje de error
          }
        }

        // Otros elementos que ocultas
        /* $('#TitulitoCitasMedicas').hide();
        $('#TablaCitasMedica').hide();
        $('#MostraInfoPaciente').hide();
        $('#image-Tip').hide();
        $('#lupabusquda').hide();
        $('#botonesnavegacioUser').hide(); */
      },
      error: function (xhr, status, error) {
        console.error('Error en la petición AJAX:', error);
        // Manejo de errores
      }
    });
  }

  //Bloque de Intrucciones para Afecciones
  function Obtener_Afecciones() {
    let variableSesion = localStorage.getItem('idUsuario');

    const postDatosSesion = {
      'Id_Usuario': variableSesion,
    };

    /* console.log("PUTATA") */
    $.ajax({
      type: "POST",
      url: "https://www.sistecsolutions.net/ehealth/ApisTesis/Afecciones/ListadosdeAfeccioneUser.php",
      data: postDatosSesion,
      dataType: 'json',
      success: function (response) {
        console.log(response);

        if (Array.isArray(response)) {
          let userData = response.slice(0, -1); // Excluir el último elemento de información de proceso

          if (response[response.length - 1].process === "Datos_de_afeccion_encontrados") {
            let template = '';

            userData.forEach(user => {
              template += `
                        <tr Id_Homework="${user.Id_UserEnfermedad}" class="table-info text-center">
                            <td>${user.Id_UserEnfermedad}</td>
                            <td>${user.Nombre_enf}</td>
                            <td>${user.descripcion_TipEnfer}</td>
                            <td style="max-height: 100px; overflow-y: auto; text-align: justify; padding: 10px; border: 1px solid #ddd;">${user.DescripcionPropia_enf}</td>
                            <td>${user.Fecha_Inicio}</td>
                            <td>${user.Fecha_Finalización}</td>
                            <td>${user.Fecha_Regis_Cro}</td>
                            <td>
                                <button class="btn btn-danger btn-text-center mostrarfecciones" data-bs-toggle="modal" >

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                </svg>
                                    Datos Completos
                                </button>
                            </td>
                        </tr>`;
            });

            $('#DatosAfeccion_Encontrados').html(template);
            $('#TitulitoAfecciones').show();
            $('#TablaAfecciones').show();
          }
        } else {
          if ((response.process === "Datos_de_afeccion_no_encontrados") || (response.process === "Datos_de_afeccions_no_encontrados")) {
            alert(response.message); // Muestra el mensaje de error
          }
        }

      },
      error: function (xhr, status, error) {
        console.error('Error en la petición AJAX:', error);
        // Manejo de errores
      }
    });
  }


  //Bloque de Intrucciones para  Citas Médicas
  function Obtener_CitasMedicas() {
    let variableSesion = localStorage.getItem('idUsuario');

    const postDatosSesion = {
      'Id_Usuario': variableSesion,
    };

    /* console.log("PUTATA") */
    $.ajax({
      type: "POST",
      url: "https://www.sistecsolutions.net/ehealth/ApisTesis/CitasMedicas/ListadosdeCitasMediUser.php",
      data: postDatosSesion,
      dataType: 'json',
      success: function (response) {
        console.log(response);

        if (Array.isArray(response)) {
          let userData = response.slice(0, -1); // Excluir el último elemento de información de proceso

          if (response[response.length - 1].process === "Datos_de_Citas_Medicas_encontrados") {
            let template = '';

            userData.forEach(user => {
              template += `
                        <tr Id_Homework="${user.Id_Cita}" class="table-info text-center">
                            <td>${user.Id_Cita}</td>
                            <td>${user.Nombre_CentroHos}</td>
                            <td>${user.Nombre_Especialidad}</td>
                            <td>${user.Nombre_Medico}</td>
                            <td style="max-height: 100px; overflow-y: auto; text-align: justify; padding: 10px; border: 1px solid #ddd;">${user.Descrip_Consul}</td>
                            <td>${user.FechadeCita}</td>
                            <td>
                                <button class="btn btn-danger btn-text-center mostrarcitas" data-bs-toggle="modal" data-bs-target="#ModalDatosCitaMedica" >

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                </svg>
                                    Datos Completos
                                </button>
                            </td>
                        </tr>`;
            });

            $('#DatosMedicos_Encontrados').html(template);
            $('#TitulitoCitasMedicas').show();
            $('#TablaCitasMedica').show();
          }
        } else {
          if ((response.process === "Datos_de_Citas_Medicas_no_encontrados") || (response.process === "Datos_de_CitaMedica_no_encontrados")) {
            alert(response.message); // Muestra el mensaje de error
          }
        }

      },
      error: function (xhr, status, error) {
        console.error('Error en la petición AJAX:', error);
        // Manejo de errores
      }
    });
  }

  $(document).on('click', '.mostrarcitas', function () {
    let element = $(this)[0].parentElement.parentElement;    //aquí se almacena toda la fila por medio de la propiepdad parentElement y va de "td" al padre "tr"
    let id_Cita = $(element).attr('Id_Homework');

    const postDatosSesionA = {
      'Id_Cita': id_Cita,
    };
    //aquí se almacena el id del botón selecccionado por medio de fila padre
    $('#MostraInfoPaciente').hide();
    let urll = 'https://www.sistecsolutions.net/ehealth/ApisTesis/CitasMedicas/ListadosdeCitasMediUserWeb.php?'

    $.post(urll, postDatosSesionA, function (response) {

      if (Array.isArray(response)) {
        let userData = response.slice(0, -1);
        console.log(userData);
        // Excluir el último elemento de información de proceso

        if (response[response.length - 1].process === "Datos_de_Citas_Medicas_encontrados") {
          let templates = '';

          userData.forEach(userPatient => {
            templates += `
            
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center"> Registro Consulta:</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.Id_Cita}">
                  </div>   
              </div> 
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Centro de Atención :</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.Nombre_CentroHos}">
                  </div>   
              </div>
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Ubicación de Centro :</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.ProvinciaUbicacion}">
                  </div>   
              </div>
  
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Médico/a de Atención :</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.Nombre_Medico}">
                  </div>   
              </div>
  
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Especialidad :</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.Nombre_Especialidad}">
                  </div>
              </div>

              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Motivo de la Consulta :</label>
                  <div class="col-sm-6">
                  <textarea id="NombreTraMKPSS" class="form-control-plaintext text-center"
                    style="width: 100%; height: 100px; resize: none; overflow-y: scroll; text-align: justify; white-space: pre-wrap;">
                      ${userPatient.Descrip_Consul}
                  </textarea>
                      
                  </div>   
              </div>
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Diagnóstico :</label>
                  <div class="col-sm-6">
                  <textarea id="NombreTraMKPSS" class="form-control-plaintext text-center" 
                    style="width: 100%; height: 100px; resize: none; overflow-y: scroll; text-align: justify; white-space: pre-wrap;">
                    ${userPatient.Diagnóstico}
                  </textarea>
                  </div>   
              </div>
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Detalle de la receta :</label>
                  <div class="col-sm-6">
                  <textarea id="NombreTraMKPSS" class="form-control-plaintext text-center" 
                    style="width: 100%; height: 100px; resize: none; overflow-y: scroll; text-align: justify; white-space: pre-wrap;">
                    ${userPatient.Detalle_Receta}
                  </textarea>

                  </div>   
              </div>
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Detalles de Exámenes:</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.Detalle_de_Examen}">
                  </div>   
              </div>
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Fecha de Consulta :</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.FechadeCita}">
                  </div>   
              </div>
              <div class="mb-3 row">
                  <label for="recipient-name" class="col-sm-6 col-form-label text-center">Fecha de Resgistro :</label>
                  <div class="col-sm-6">
                      <input type="text"  id="NombreTraMKPSS" class="form-control-plaintext text-center"  value="${userPatient.Fecha_RegistrCi}">
                  </div>   
              </div>
            
  
              `;
          });

          $('#formulariomodalCitaMedica').html(templates);
          $('#MostraInfoCitasMedicas').show();
        }
      } else {
        if ((response.process == "Datos_de_Citas_Medicas_no_encontrados") || (response.process == "Datos_de_citas_no_encontrados")) {
          alert(response.message); // Muestra el mensaje de error
          $('#MostraInfoCitasMedicas').hide();
        }
      }
    });
  });










  //SECCIÓN PARA LOS BOTONES DEL MENÚ LATERAL 

  $(document).on('click', '#inicio-dashboard', function () {// Prevenir el comportamiento por defecto del enlace
    document.body.style.backgroundImage = "url('http://localhost/MyMedicRec/images/fondoDasboardWeb.png')";
    $('#image-Tip').show();
    $('#lupabusquda').show();
    $('#botonesnavegacioUser').show();

    $('#TitulitoPaceintesDepende').hide();
    $('#TablaPacientesDependiente').hide();
    $('#MostraInfoPaciente').hide();


    $('#TitulitoAlergias').hide();
    $('#TablaAlergias').hide();

    $('#TitulitoAfecciones').hide();
    $('#TablaAfecciones').hide();

    $('#TitulitoCitasMedicas').hide();
    $('#TablaCitasMedica').hide();
    $('#MostraInfoCitasMedicas').hide();


    MostrarTips();
  });


  $(document).on('click', '#registro-Pacientes', function () {
    document.body.style.backgroundImage = "url('http://localhost/MyMedicRec/images/fondoPrincipalA.png')"; // Cambiar la imagen de fondo
    $('#image-Tip').hide();
    $('#lupabusquda').hide();
    $('#botonesnavegacioUser').hide();

    $('#TitulitoAlergias').hide();
    $('#TablaAlergias').hide();

    $('#TitulitoAfecciones').hide();
    $('#TablaAfecciones').hide();

    $('#TitulitoCitasMedicas').hide();
    $('#TablaCitasMedica').hide();
    $('#MostraInfoCitasMedicas').hide();


    $('#MostraInfoPaciente').hide();

    Obtener_Usuarios();

  });


  $(document).on('click', '#registro-alergias', function () {
    document.body.style.backgroundImage = "url('http://localhost/MyMedicRec/images/fondoPrincipalB.png')"; // Cambiar la imagen de fondo
    $('#image-Tip').hide();
    $('#lupabusquda').hide();
    $('#botonesnavegacioUser').hide();


    $('#TitulitoAfecciones').hide();
    $('#TablaAfecciones').hide();

    $('#TitulitoPaceintesDepende').hide();
    $('#TablaPacientesDependiente').hide();
    $('#MostraInfoPaciente').hide();
    $('#ResultadosPacientes').hide();



    $('#TitulitoCitasMedicas').hide();
    $('#TablaCitasMedica').hide();
    $('#MostraInfoCitasMedicas').hide();


    Obtener_Alergias();

  });


  $(document).on('click', '#registro-afecciones', function () {
    document.body.style.backgroundImage = "url('http://localhost/MyMedicRec/images/fondoPrincipalB.png')"; // Cambiar la imagen de fondo
    $('#image-Tip').hide();
    $('#lupabusquda').hide();
    $('#botonesnavegacioUser').hide();

    $('#TitulitoAlergias').hide();
    $('#TablaAlergias').hide();

    $('#TitulitoPaceintesDepende').hide();
    $('#TablaPacientesDependiente').hide();
    $('#MostraInfoPaciente').hide();
    $('#ResultadosPacientes').hide();

    $('#TitulitoCitasMedicas').hide();
    $('#TablaCitasMedica').hide();
    $('#MostraInfoCitasMedicas').hide();

    Obtener_Afecciones();

  });

  $(document).on('click', '#registro-citas-medicas', function () {
    document.body.style.backgroundImage = "url('http://localhost/MyMedicRec/images/fondoPrincipalB.png')"; // Cambiar la imagen de fondo
    $('#image-Tip').hide();
    $('#lupabusquda').hide();
    $('#botonesnavegacioUser').hide();

    $('#TitulitoAlergias').hide();
    $('#TablaAlergias').hide();

    $('#TitulitoPaceintesDepende').hide();
    $('#TablaPacientesDependiente').hide();
    $('#MostraInfoPaciente').hide();
    $('#ResultadosPacientes').hide();

    $('#TitulitoAfecciones').hide();
    $('#TablaAfecciones').hide();
    $('#MostraInfoCitasMedicas').hide();

    Obtener_CitasMedicas();

  });


  //SECCIÓN PARA LOS BOTONES DEL MENÚ INFERIOR

  const botoncitoiraPacienteDepende = document.querySelector("#iraPacienteDepende");
  botoncitoiraPacienteDepende.addEventListener("click", function (evento) {
    document.body.style.backgroundImage = "url('http://localhost/MyMedicRec/images/fondoPrincipalA.png')";
    $('#image-Tip').hide();
    $('#lupabusquda').hide();
    $('#botonesnavegacioUser').hide();

    $('#TitulitoAlergias').hide();
    $('#TablaAlergias').hide();

    $('#TitulitoAfecciones').hide();
    $('#TablaAfecciones').hide();


    $('#TitulitoCitasMedicas').hide();
    $('#TablaCitasMedica').hide();
    $('#MostraInfoCitasMedicas').hide();


    $('#MostraInfoPaciente').hide();

    Obtener_Usuarios();
  });


  const botoncitoiraAlergias = document.querySelector("#iraAlergias");
  botoncitoiraAlergias.addEventListener("click", function (evento) {
    document.body.style.backgroundImage = "url('http://localhost/MyMedicRec/images/fondoPrincipalB.png')";
    $('#image-Tip').hide();
    $('#lupabusquda').hide();
    $('#botonesnavegacioUser').hide();

    $('#TitulitoAfecciones').hide();
    $('#TablaAfecciones').hide();

    $('#TitulitoPaceintesDepende').hide();
    $('#TablaPacientesDependiente').hide();
    $('#MostraInfoPaciente').hide();
    $('#ResultadosPacientes').hide();

    $('#TitulitoCitasMedicas').hide();
    $('#TablaCitasMedica').hide();
    $('#MostraInfoCitasMedicas').hide();



    Obtener_Alergias();
  });

  const botoncitoiraAfeccion = document.querySelector("#iraAfecciones");
  botoncitoiraAfeccion.addEventListener("click", function (evento) {
    document.body.style.backgroundImage = "url('http://localhost/MyMedicRec/images/fondoPrincipalA.png')";
    $('#image-Tip').hide();
    $('#lupabusquda').hide();
    $('#botonesnavegacioUser').hide();

    $('#TitulitoAlergias').hide();
    $('#TablaAlergias').hide();

    $('#TitulitoPaceintesDepende').hide();
    $('#TablaPacientesDependiente').hide();
    $('#MostraInfoPaciente').hide();
    $('#ResultadosPacientes').hide();

    $('#TitulitoCitasMedicas').hide();
    $('#TablaCitasMedica').hide();
    $('#MostraInfoCitasMedicas').hide();



    Obtener_Afecciones();
  });

  const botoncitoiraCitasMedicas = document.querySelector("#iraCitasMedicas");
  botoncitoiraCitasMedicas.addEventListener("click", function (evento) {
    document.body.style.backgroundImage = "url('http://localhost/MyMedicRec/images/fondoPrincipalB.png')";
    $('#image-Tip').hide();
    $('#lupabusquda').hide();
    $('#botonesnavegacioUser').hide();

    $('#TitulitoAlergias').hide();
    $('#TablaAlergias').hide();

    $('#TitulitoPaceintesDepende').hide();
    $('#TablaPacientesDependiente').hide();
    $('#MostraInfoPaciente').hide();
    $('#ResultadosPacientes').hide();

    $('#TitulitoAfecciones').hide();
    $('#TablaAfecciones').hide();

    Obtener_CitasMedicas();
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