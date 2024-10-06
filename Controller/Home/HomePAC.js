$(document).ready(function () {

 /* $('#Presentacion').modal('show'); //Línea de Código para controlar la aparición del modal */ 
  $('#botones').hide();
  $('#Titulito2').hide();
  $('#ResultadoHTML').hide();
  $('#ResultadoPresion').hide();
  $('#ResultadoPulso').hide();
  $('#botonesAux').hide();
  $('#botonAux').hide();
  $('#TituloResultadoPdf').hide();
  $('#TituloUnidad').hide();
  $('#TituloHospital').hide();
  $('#CedulaEncontrado').hide();

  

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
              <li><a class="dropdown-item cerrarSesionCliente" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
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


  //Bloque de Código que permite por medio de una función cargar los datos de fecha y hora del sistema y llevarlos al formulario HTML 
  function CargarTimeAnDate() {
    let fecha = new Date();
    let dia = fecha.getDate(); // Obtiene el  día actual 
    let mes = fecha.getMonth() + 1; // Obtiene el mes actual pero se le suma uno porque los mese empiezan en cero
    let año = fecha.getFullYear(); // Obtiene el año actual
    let fechatotal= año + "-" + mes + "-" + dia;

    let fechita = '';
    fechita += `<input type="text"  id="fechaTrast" readonly class="form-control inputG" value="${fechatotal.toString()}">`;
    $('#fechaDefaut').html(fechita); //aquí se le envía al contenedor HTML lo que se quiere mostrar como fecha


    let tiempo = new Date();
    let hora = tiempo.getHours(); // Obtiene la hora actual en formato de 24 horas
    let minutos = tiempo.getMinutes(); // Obtiene los minutos actuales

    let horita = '';
    horita += `<input type="text"  id="HoraTra" readonly class="form-control inputG " value="${hora + ":" + minutos}">`;
    $('#horaDefaut').html(horita);
  }
  CargarTimeAnDate();//Llamamos la función que nos traerá la hora y la fecha del sistema


  //Bloque de Intrucciones para realizar la búsqueda de la Cédula a la Base datos
  const botoncitoBuscarCed = document.querySelector("#BuscarCed");
  botoncitoBuscarCed.addEventListener("click", function (evento) { 
    let busquedaCedula  = $('#cedualPacienteBus').val();

    $.ajax({
      type: "POST",
      url: "http://localhost/ProyectoFiDSIX/model/BusquedaCedula.php",
      data: { busquedaCedula },
      success: function (response) {
          console.log(response);
          let templateNombre = ''; 
          let templateCedula = '';
          if (response.success == "ERROR") {
              console.log(response.success);
              $('#PresentacionError').modal('show');
          } else {
              response.forEach(response => {//Esta linea es para recorrer lo que se trae de BD en JSON por índice 
                templateNombre += `<input type="text" id="nombrePacient" readonly 
                class="form-control inputG" value="${response.Nombre_Paciente}">`;
                templateCedula += `<input type="text" id="cedulaPacienteF" readonly 
                class="form-control inputG" value="${response.Cedula_Paciente}">
                <input type="hidden" id="idPaciente" value="${response.ID_paciente}">`;
                          
              });
              $('#nombrePacienteFI').html(templateNombre);
              $('#cedulaPaciente').html(templateCedula);
              $('#BusquedaCedula').hide();
              $('#CedulaEncontrado').show();
          }
      }
  });

  });



  //BLOQUE DE INTRUCCIONES PARA APARECER LOS BOTONES

  //Las siguientes líneas nos permiten que por medio de los eventos ya sea de cambio para los select o en los imput
  //se pueda llamar la función que realizará el análisis para saber si todos los campos están llenos cada vez que se hay un cambio y dependiendo esto la función se encargará de ocultar o mostrar el botón cuestión
   
  $("#Concentracion1").on('change', aparacerCalcular); $("#drenaje1").on('input', aparacerCalcular); $("#Cualidad1").on('change', aparacerCalcular);
  $("#Concentracion2").on('change', aparacerCalcular); $("#drenaje2").on('input', aparacerCalcular); $("#Cualidad2").on('change', aparacerCalcular);
  $("#Concentracion3").on('change', aparacerCalcular); $("#drenaje3").on('input', aparacerCalcular); $("#Cualidad3").on('change', aparacerCalcular);
  $("#Concentracion4").on('change', aparacerCalcular); $("#drenaje4").on('input', aparacerCalcular); $("#Cualidad4").on('change', aparacerCalcular);

  function aparacerCalcular() {
    let concentracion1 = $("#Concentracion1").val();drenaje1 = $("#drenaje1").val();Cualidad1 = $("#Cualidad1").val();
    let concentracion2 = $("#Concentracion2").val();drenaje2 = $("#drenaje2").val();Cualidad2 = $("#Cualidad2").val();
    let concentracion3 = $("#Concentracion3").val();drenaje3 = $("#drenaje3").val();Cualidad3 = $("#Cualidad3").val();
    let concentracion4 = $("#Concentracion4").val();drenaje4 = $("#drenaje4").val();Cualidad4 = $("#Cualidad4").val();


    if ((concentracion1 != "") && (concentracion2 != "") && (concentracion3 != "") && (concentracion4 != "")) {
      if ((drenaje1 != "") && (drenaje2 != "") && (drenaje3 != "") && (drenaje4 != "")) {
        if ((Cualidad1 != "") && (Cualidad2 != "") && (Cualidad3 != "") && (Cualidad4 != "")) {
          $('#botones').show();$('#botonAux').hide();$('#botonesAux').hide();$('#Titulito2').hide();$('#ResultadoHTML').hide();$('#ResultadoPresion').hide();$('#ResultadoPulso').hide();$('#botonesAux').hide();
        } else {
          $('#botones').hide();
        }
      } else {
        $('#botones').hide();
      }
    } else {
      //Línea de Código para manipular la aparación de algunos elementos HTML con respecto ciertos contenedores
      $('#botones').hide();$('#Titulito2').hide();$('#ResultadoHTML').hide();$('#ResultadoPresion').hide();$('#ResultadoPulso').hide();$('#botonesAux').hide();
    }
  }


  //BLOQUE DE INSTRUCCIONES PARA LUEGO DE QUE YA EL BOTÓN DE CALCULAR PUEDE EFECTUAR SU ACCIÓN 
  $('#formularioDatosU').submit(function (e) {
    e.preventDefault();//Este método es para cancelar el comportamiento que por defecto los formularios al darle submit no refresquen la página

    let drenaje1 = parseInt($("#drenaje1").val());
    let drenaje2 = parseInt($("#drenaje2").val()),drenaje3 = parseInt($("#drenaje3").val()),drenaje4 = parseInt($("#drenaje4").val());
    

    //BLOQUE DE INSTRUCCIONES PARA LOS CALCULOS A MOSTRAR EN EL FORMULARIO AL PRESIONAR EL BOTÓN DE CALCULAR
    let totalBalance1 = 2000 - drenaje1;
    let totalBalance2 = 2000 - drenaje2;
    let totalBalance3 = 2000 - drenaje3;
    let totalBalance4 = 2000 - drenaje4;
    let TotaldeInfusion = 2000 * 4;
    let totalDrenaje = drenaje1 + drenaje2 + drenaje3 + drenaje4;


    let balance1 = "";
    balance1 += `<input type="text" id="totalBalance1" readonly class="form-control inputG" value="${totalBalance1}">`;
    $('#total_balance1').html(balance1);

    let balance2 = "";
    balance2 += `<input type="text" id="totalBalance2" readonly class="form-control inputG" value="${totalBalance2}">`;
    $('#total_balance2').html(balance2);

    let balance3 = "";
    balance3 += `<input type="text" id="totalBalance3" readonly class="form-control inputG" value="${totalBalance3}">`;
    $('#total_balance3').html(balance3);

    let balance4 = "";
    balance4 += `<input type="text" id="totalBalance4" readonly class="form-control inputG" value="${totalBalance4}">`;
    $('#total_balance4').html(balance4);

    let infusion = "";
    infusion += `<input type="text" id="totalinfusion" readonly class="form-control inputG" value="${TotaldeInfusion}">`;
    $('#total_infusion').html(infusion);

    let drenaje = "";
    drenaje += `<input type="text" id="totaldrenaje" readonly class="form-control inputG" value="${totalDrenaje}">`;
    $('#total_drenaje').html(drenaje);

    let totalFinalBalance = "";
    totalFinalBalance += `<input type="text" id="totalbalanceFinal" readonly class="form-control inputG" value="${(TotaldeInfusion - totalDrenaje)}">`;
    $('#total_balance_final').html(totalFinalBalance);

    

    //Una vez mostrados los resultados es decir que ya todo esté completo ahora se procederá a mostrar los demás botones
    $('#botones').hide();
    $('#botonAux').show(); 
  });

  //BLOQUE DE INSTRUCCIONES PARA MOSTRAR LOS RESULTADOS LUEGO DE QUE EL USUARIO YA ESTÉ SEGURO QUE TODOS LOS DATOS SON LOS CORRECTOS
  const botoncitoDiagnosticar = document.querySelector("#AlmacenarCal");
  botoncitoDiagnosticar.addEventListener("click", function (evento) { 
    
    let Cualidad1 = parseInt($("#Cualidad1").val()),Cualidad2 = parseInt($("#Cualidad2").val()),Cualidad3 = parseInt($("#Cualidad3").val()), Cualidad4 = parseInt($("#Cualidad4").val());

    let contadordeCualidad=0; //Variable que permitirá saber cuántas veces se encuentra repetido el valor Turbio


    let arregloCualidad = [Cualidad1, Cualidad2, Cualidad3, Cualidad4];//Arreglo que almacenará los 4 valores de cualidad 

    for (let indice = 0; indice < arregloCualidad.length; indice++) {
      if(arregloCualidad[indice]== 2){
        contadordeCualidad += 1; 
      }

    }

    //Bloque de Intrucciones para que se puedan mostrar los resultados en sí 
    let nombrePaciente= $("#nombrePacient").val(), fechaSys = $("#fechaTrast").val(),sistole = parseInt($("#sistole").val());diastoles = parseInt($("#diastole").val()),pulsoPaciente = parseInt($("#pulsoPaciente").val()), totalBalanceFinal = parseInt($("#totalbalanceFinal").val());
     

    let padreContenedorResul = document.getElementById("ResultadoHTML");//Aquí obtengo el identifiacdor del div padre del contenedor HMTL de mensajes o resultados 
    padreContenedorResul.innerHTML= " " //para limpiar por si tiene algún valor; 

    let modalDeMensaje = document.getElementById("MensajilloReporte");//Aquí obtengo el identifiacdor del div contenedor  del modal con el  mensajes de resultados 
    let templateMensajeResu= '';
    let templateNombreResu= '';
    let templateModalHeader= '';
    let templateModalBody= '';

    //BLOQUE DE SENTENCIAS PARA MOSTRAR EL MENSAJE EN EL CONTENDOR SEGÚN SEA LA CONDICIÓN QUE SE CUMPLA CON
    if(totalBalanceFinal<= 0){ 
      templateNombreResu = `<H1 class="text-center" style="font-weight:bold; color: black;" id="TituloNombre"> Análisis de resultados para el/la paciente: `+nombrePaciente+` </H1>`;
      templateMensajeResu = `<p id="parrafoContenido">"<strong>Balance Hídrico Favorable</strong>. Condición normal, no hay retención de líquidos."</p>`;
      padreContenedorResul.style = 'background-color: #3c9e1e; color: black;';

      templateModalHeader= ` <h1 class="modal-title fs-5 "> <strong>Resultados del Balance Favorable</strong> </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
        
      templateModalBody= ` <img src="http://localhost/ProyectoFiDSIX/images/Favorable.gif" class="imga2">`;
      modalDeMensaje.style = 'background-color: rgba(12, 168, 7, 0.616);';
    }else{
      if((totalBalanceFinal>= 1) && (totalBalanceFinal<= 2000)){ 
        templateNombreResu = `<H1 class="text-center"  style="font-weight:bold; color: black;" id="TituloNombre"> Análisis de resultados para el/la paciente: `+nombrePaciente+` </H1>`;
        templateMensajeResu = `<p id="parrafoContenido">"<strong>Retención de líquidos considerable</strong>.  En caso de presentarse esta situación <strong>por más de dos días consecutivos</strong>,
                               llame y consulte con la unidad hospitalaria de Diálisis". "Balance Final del día = ` +totalBalanceFinal+`"</p>`;
        padreContenedorResul.style = 'background-color: #F08486; color: black;';

        templateModalHeader= ` <h1 class="modal-title fs-5 "> <strong>Resultados del Balance Considerable</strong> </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
        
        templateModalBody= ` <img src="http://localhost/ProyectoFiDSIX/images/Considerable.gif" class="imga2">`;
        modalDeMensaje.style = 'background-color: rgba(143, 28, 72, 0.712);';
      }else{
        if((totalBalanceFinal> 2000)&&(contadordeCualidad<= 1)){ 
          templateNombreResu = `<H1 class="text-center"  style="font-weight:bold; color: black;" id="TituloNombre"> Análisis de resultados para el/la paciente: `+nombrePaciente+` </H1>`;
          templateMensajeResu = `<p id="parrafoContenido">"<strong>ALERTA: Excesiva retención de líquidos.</strong>.  Consulte de inmediato con su
                                  nefrólogo". "Balance Final del día = ` +totalBalanceFinal+`"</p>`;
          padreContenedorResul.style = 'background-color: #DF6B00; color: black;';

          templateModalHeader= ` <h1 class="modal-title fs-5 "> <strong>Resultados del Balance Alarmantes</strong> </h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
          
          templateModalBody= ` <img src="http://localhost/ProyectoFiDSIX/images/Alarmante.gif" class="imga2">`;
          modalDeMensaje.style = 'background-color: rgba(248, 60, 3, 0.568);';

          //BLOQUE DE INTRUCCIONES PARA ENVIAR EL CORREO CON LA ALERTA
          EnviarCorreo(nombrePaciente,fechaSys, totalBalanceFinal); 
        }else{
          if((totalBalanceFinal> 2000)&&(contadordeCualidad> 1)){ 
            templateNombreResu = `<H1 class="text-center"  style="font-weight:bold; color: black;" id="TituloNombre"> Análisis de resultados para el/la paciente: `+nombrePaciente+` </H1>`;
            templateMensajeResu = `<p id="parrafoContenido" style="color: white;">"<strong>ALERTA:</strong>  Consulte de inmediato con su néfrologo y programe su cita en la unidad de diálisis".</p>`;
            padreContenedorResul.style = 'background-color: #D41205; color: black;';
  
            templateModalHeader= ` <h1 class="modal-title fs-5 "> <strong>Resultados del Balance Peligrosos</strong> </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
            
            templateModalBody= ` <img src="http://localhost/ProyectoFiDSIX/images/Peligroso.gif" class="imga2">`;
            modalDeMensaje.style = 'background-color: rgba(248, 3, 3, 0.527);';
  
            //BLOQUE DE INTRUCCIONES PARA ENVIAR EL CORREO CON LA ALERTA
            EnviarCorreo(nombrePaciente,fechaSys,totalBalanceFinal);
          }
        }
      }
    }

    //En esta sección se asignan los valores obtenidos para lo del balance en cuanto resultados luego de cumplirse las condiciones para el tema de Balance Hídrico

    $('#Titulito2').html(templateNombreResu);
    $('#ResultadoHTML').html(templateMensajeResu);
    $('#exampleModalLabelMensaje').html(templateModalHeader);
    $('#modalImageMensaje').html(templateModalBody);
    if ((sistole == 0) && (diastoles == 0) && (pulsoPaciente == 0)) {
      $('#MensajilloReporte').modal('show');
    } else {
      if ((isNaN(sistole) || isNaN(diastoles) || isNaN(pulsoPaciente))) {
        $('#MensajilloReporte').modal('show');
      }
    }


    //BLOQUE DE INTRUCCIONES PARA EL CONTENEDOR DE MENSAJE PARA SISTOLE/DIÁSTOLE Y ASÍ MISMO LOS MENSAJES A APARECER AL CUMPLIRSE CIERTOS PARÁMETROS O CONDICIONES
    let padreContenedorPresion = document.getElementById("ResultadoPresion");//Aquí obtenemos el identificador del div padre del contenedor HMTL de mensajes o resultados de presión 
    padreContenedorPresion.innerHTML= " " //para limpiar por si tiene algún valor; 

    let modalDeMensajePresion = document.getElementById("MensajilloReportePresion");//Aquí obtenemos el identifiacdor del div contenedor  del modal con el  mensajes de resultados de presión 
    let templateMensajeResuPresion= '';
    let templateModalHeaderPresion= '';
    let templateModalBodyPresion= '';
    let valorControl= 0; 

    if((sistole != null) && (diastoles != null)){
      if (((sistole < 80) && (diastoles < 60))&&((sistole != 0)&&(diastoles != 0))) {
        templateMensajeResuPresion = `<p id="paPresion">"<strong>ALERTA:</strong> Presión Arterial por bajo de lo normal. Requiere <strong>ATENCIÓN HOSPITALARIA DE INMEDIATO</strong>"</p>`;
        padreContenedorPresion.style = 'background-color: #D41205; color: black;';
  
        templateModalHeaderPresion = ` <h1 class="modal-title fs-5 "> <strong>Condición de Presión Arterial - Por Debajo de lo Normal</strong> </h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
  
        templateModalBodyPresion = ` <img src="http://localhost/ProyectoFiDSIX/images/_PresionCritica.gif" class="imga2">`;
        modalDeMensajePresion.style = 'background-color: rgba(248, 3, 3, 0.527);';
        valorControl= 1; 
      } else {
        if (((sistole >= 80) && (sistole <= 129)) && ((diastoles >= 60) && (diastoles <= 84))) {
          templateMensajeResuPresion = `<p id="paPresion">"<strong>NOTACIÓN:</strong> Presión arterial normal.".</p>`;
          padreContenedorPresion.style = 'background-color: #3c9e1e; color: black;';
  
          templateModalHeaderPresion = ` <h1 class="modal-title fs-5 "> <strong>Condición Presión Arterial Normal</strong> </h1>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
  
          templateModalBodyPresion = ` <img src="http://localhost/ProyectoFiDSIX/images/PresionNormal.gif" class="imga2">`;
          modalDeMensajePresion.style = 'background-color: rgba(12, 168, 7, 0.616);';
          valorControl= 1;
        } else {
          if (((sistole >= 130) && (sistole <= 139)) && ((diastoles >= 85) && (diastoles <= 89))) {
            templateMensajeResuPresion = `<p id="paPresion">"<strong>NOTACIÓN:</strong> Presión arterial normal alta: ` + (sistole + `/` + diastoles) + ` "</p>`;
            padreContenedorPresion.style = 'background-color: #3c9e1e; color: black;';
  
            templateModalHeaderPresion = ` <h1 class="modal-title fs-5 "> <strong>Condición Presión Arterial Normal Alta</strong> </h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
  
            templateModalBodyPresion = ` <img src="http://localhost/ProyectoFiDSIX/images/PresionNormal.gif" class="imga2">`;
            modalDeMensajePresion.style = 'background-color: rgba(12, 168, 7, 0.616);';
            valorControl= 1;
          } else {
            if (((sistole >= 140) && (sistole <= 159)) && ((diastoles >= 90) && (diastoles <= 99))) {
              templateMensajeResuPresion = `<p id="paPresion">"<strong>NOTACIÓN:</strong> Hipertensión leve (Grado 1): ` + (sistole + `/` + diastoles) + ` "</p>`;
              padreContenedorPresion.style = 'background-color: #F08486; color: black;';
  
              templateModalHeaderPresion = ` <h1 class="modal-title fs-5 "> <strong>Condición Presión Arterial - Hipertensión Leve</strong> </h1>
                                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
  
              templateModalBodyPresion = ` <img src="http://localhost/ProyectoFiDSIX/images/_PresionLeve.gif" class="imga2">`;
              modalDeMensajePresion.style = 'background-color: rgba(143, 28, 72, 0.712);';
              valorControl= 1;

            } else {
              if (((sistole >= 160) && (sistole <= 179)) && ((diastoles >= 100) && (diastoles <= 109))) {
                templateMensajeResuPresion = `<p id="paPresion">"<strong>NOTACIÓN:</strong> Hipertensión moderada (Grado 2): ` + (sistole + `/` + diastoles) + ` "</p>`;
                padreContenedorPresion.style = 'background-color: #F08486; color: black;';
  
                templateModalHeaderPresion = ` <h1 class="modal-title fs-5 "> <strong>Condición Presión Arterial - Hipertensión Moderada</strong> </h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
  
                templateModalBodyPresion = ` <img src="http://localhost/ProyectoFiDSIX/images/_PresionLeve.gif" class="imga2">`;
                modalDeMensajePresion.style = 'background-color: rgba(143, 28, 72, 0.712);';
                valorControl= 1;
              } else {
                if (((sistole >= 180) && (sistole <= 209)) && ((diastoles >= 110) && (diastoles <= 119))) {
                  templateMensajeResuPresion = `<p id="paPresion">"<strong>ALERTA:</strong> Hipertensión grave (Grado 3). Requiere <strong>ATENCIÓN 
                  HOSPITALARIA DE INMEDIATO</strong>"</p>`;
                  padreContenedorPresion.style = 'background-color: #DF6B00; color: black;';
  
                  templateModalHeaderPresion = ` <h1 class="modal-title fs-5 "> <strong>Condición Presión Arterial - Hipertensión Grave</strong> </h1>
                                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
  
                  templateModalBodyPresion = ` <img src="http://localhost/ProyectoFiDSIX/images/_PresionGrave.gif" class="imga2">`;
                  modalDeMensajePresion.style = 'background-color: rgba(248, 60, 3, 0.568);';
                  valorControl= 1;
  
                } else {
                  if (((sistole >= 210) && (diastoles >= 120))) {
                    templateMensajeResuPresion = `<p style="color: white;" id="paPresion">"<strong>ALERTA:</strong> Hipertensión Crítica (Grado 4). Requiere <strong>ATENCIÓN 
                    HOSPITALARIA DE INMEDIATO</strong>"</p>`;
                    padreContenedorPresion.style = 'background-color: #D41205; color: black;';
  
                    templateModalHeaderPresion = ` <h1 class="modal-title fs-5 "> <strong>Condición Presión Arterial - Hipertensión Crítica</strong> </h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
  
                    templateModalBodyPresion = ` <img src="http://localhost/ProyectoFiDSIX/images/_PresionCritica.gif" class="imga2">`;
                    modalDeMensajePresion.style = 'background-color: rgba(248, 3, 3, 0.527);';
                    valorControl= 1;
                  } else{
                    //BLOQUE PARA CUANDO LOS DATOS CAEN EN RANGOS DISTINTOS
                    if (sistole > diastoles) {
                      mayorPresion(sistole, diastoles, pulsoPaciente);
                    } else {
                      if (diastoles > sistole) {
                        let mayor = diastoles;
                        mayorPresion(mayor, sistole, diastoles, pulsoPaciente);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    //En esta sección se asignan los valores obtenidos  en cuanto a resultados luego de cumplirse las condiciones para el tema de Presión Arterial
    if (valorControl == 1) {

      $('#ResultadoPresion').html(templateMensajeResuPresion);
      $('#ResultadoPresion').show();
      $('#exampleModalLabelMensajepresion').html(templateModalHeaderPresion);
      $('#modalImageMensajepresion').html(templateModalBodyPresion);

      if ((pulsoPaciente == 0) || isNaN(pulsoPaciente)) {
        $('#MensajilloReportePresion').modal('show');
        $('#MensajilloReporte').modal('show');
      }
    }
    

  
    //BLOQUE DE INTRUCCIONES PARA EL TEMA DE LA CONDICIÓN DE PULSO O FRECUENCIA CARDIACA
    let padreContenedorResulPulso = document.getElementById("ResultadoPulso");//Aquí obtenemos el identificador del div padre del contenedor HMTL de mensajes o resultados con respecto a la frecuencia Cardiaca
    padreContenedorResulPulso.innerHTML= " " //para limpiar por si tiene algún valor; 

    let modalDeMensajePulso = document.getElementById("MensajilloReportePulso");//Aquí obtenemos el identificador del div contenedor  del modal con el  mensajes de resultados con respecto a la frecuencia Cardiaca
    let templateMensajeResuPulso= '';
    let templateModalHeaderPulso= '';
    let templateModalBodyPulso= '';
    let valorControlPulso= 0; 

    if(pulsoPaciente !=  null){
      if ((pulsoPaciente <  60)&&(pulsoPaciente != 0)) {
        templateMensajeResuPulso = `<p id="paPulso">"<strong>NOTACIÓN PARA PERSONAL MÉDICO:</strong>  Pulsaciones por 
        debajo del rango promedio "`+pulsoPaciente+`.</p>`;
        padreContenedorResulPulso.style = 'background-color: #DF6B00; color: black;';
  
        templateModalHeaderPulso = ` <h1 class="modal-title fs-5 "> <strong>Condición de Frecuencia Cardíaca Por Debajo del Rango</strong> </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
  
        templateModalBodyPulso = ` <img src="http://localhost/ProyectoFiDSIX/images/_PulsoBajo.gif" class="imga2">`;
        modalDeMensajePulso.style = 'background-color: rgba(248, 60, 3, 0.568);';
        valorControlPulso= 1;
      }else{
        if ((pulsoPaciente >=  60)&&(pulsoPaciente <=  100)) {
          templateMensajeResuPulso = `<p id="paPulso">"<strong>NOTACIÓN PARA PERSONAL MÉDICO:</strong>   De acuerdo a su última toma, 
          el pulso es normal ".</p>`;
          padreContenedorResulPulso.style = 'background-color: #3c9e1e; color: black;';
    
          templateModalHeaderPulso = ` <h1 class="modal-title fs-5 "> <strong>Condición de Frecuencia Cardíaca Normal</strong> </h1>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
    
          templateModalBodyPulso = ` <img src="http://localhost/ProyectoFiDSIX/images/_PulsoNormal.gif" class="imga2">`;
          modalDeMensajePulso.style = 'background-color: rgba(12, 168, 7, 0.616);';
          valorControlPulso= 1;
        } else {
          if (pulsoPaciente > 100) {
            templateMensajeResuPulso = `<p style="color: white;" id="paPulso">"<strong>NOTACIÓN PARA PERSONAL MÉDICO:</strong> Pulsaciones por encima 
            del rango promedio "`+ pulsoPaciente + `.</p>`;
            padreContenedorResulPulso.style = 'background-color: #D41205; color: black;';

            templateModalHeaderPulso = ` <h1 class="modal-title fs-5 "> <strong>Condición de Frecuencia Cardíaca Por Encima del rango Promedio </strong> </h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;

            templateModalBodyPulso = ` <img src="http://localhost/ProyectoFiDSIX/images/_PulsoAlto.gif" class="imga2">`;
            modalDeMensajePulso.style = 'background-color: rgba(248, 3, 3, 0.527);';
            valorControlPulso = 1;
          }
        }
      }
    }

    //En esta sección se asignan los valores obtenidos  en cuanto a resultados luego de cumplirse las condiciones para el tema de Frecuencia Arterial
    if (valorControlPulso == 1) {
      $('#ResultadoPulso').html(templateMensajeResuPulso);$('#ResultadoPulso').show();
      $('#exampleModalLabelMensajepulso').html(templateModalHeaderPulso);
      $('#modalImageMensajepulso').html(templateModalBodyPulso);

      if (((sistole == 0) && (diastoles == 0)) || (isNaN(sistole) || isNaN(diastoles))) {
        $('#MensajilloReporte').modal('show');$('#MensajilloReportePulso').modal('show');
      } else {
        $('#MensajilloReporte').modal('show');$('#MensajilloReportePulso').modal('show');
        $('#MensajilloReportePresion').modal('show');
      }
    } 

    //BLOQUE DE INSTRUCCIONES PARA CONTROLAR QUE UNA VEZ MOSTRADOS LOS MENSAJES Y DEMAS EL FORMULARIO Y SUS CAMPOS YA NO PUEDAN SER MODIFICADOS PARA EVITAR CONFLICTOS 
    var inputs = document.getElementById("formularioDatosU").elements;
    var formulario = document.getElementById("formularioDatosU");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].readOnly = true;
    }

    const select = formulario.getElementsByTagName("select");
    for (let i = 0; i < select.length; i++) {
      select[i].disabled = true;
    }




    //SECCIÓN PARA EL TEMA DE ENVIOS DE RESULTADOS DE RECAMBIO A LA BASE DE DATOS.
    const postDatos = { //Este Objeto funciona para poder obtener los datos que se ingresen en formulario 
      fechaTrast: $('#fechaTrast').val(),
      idPaciente: $('#idPaciente').val(),
      totalBalance1: $('#totalBalance1').val(),
      totalBalance2: $('#totalBalance2').val(),
      totalBalance3: $('#totalBalance3').val(),
      totalBalance4: $('#totalBalance4').val(),
    }
    /* console.log(postDatos);  */

    let url= 'http://localhost/ProyectoFiDSIX/model/InsertarRecambios.php';

    $.post(url, postDatos, function (response) {
      if (response.success == "INSERTADO") {
        console.log("Datos de Racambio Insertados con éxito");
      } else {
        console.log("Inserción de Datos de Racambio, fallida ");
      }
    });
    




    //Una vez mostrados los resultados es decir que ya todo esté completo ahora se procederá a mostrar los demás botones
    $('#botones').hide();
    $('#botonAux').hide();
    $('#Titulito2').show();
    $('#ResultadoHTML').show();
    $('#botonesAux').show();
    
  });

  


  //FUNCIÓN AUXILIAR PARA EL TEMA DE DIFERENCIA DE RANGO EN LA PRESIÓN ARTERIAL EN LOS MONTOS DE SISTOLE / DIÁSTOLE Y LOS MENSAJES A APARECER DE CUMPLIRSE CIERTAS CONDICONALES
  function mayorPresion (sisitoleAux, diastolesAux, pulsoPacienteAux){ 
    let sistoleF = sisitoleAux; 
    let diastoleF = diastolesAux;
    let pulsoPaciente = pulsoPacienteAux;  
 
    let padreContenedorPresion = document.getElementById("ResultadoPresion");//Aquí obtenemos el identificador del div padre del contenedor HMTL de mensajes o resultados de presión 
    padreContenedorPresion.innerHTML= " " //para limpiar por si tiene algún valor;  

    let modalDeMensajePresion = document.getElementById("MensajilloReportePresion");//Aquí obtenemos el identifiacdor del div contenedor  del modal con el  mensajes de resultados de presión 
    

    if(((sistoleF>=80) && (sistoleF<=129))||((diastoleF>=60) && (diastoleF<= 84))){
      templateMensajeResuPresion = `<p>"<strong>NOTACIÓN:</strong> Presión arterial normal.".</p>`;
      padreContenedorPresion.style = 'background-color: #3c9e1e; color: black;';

      templateModalHeaderPresion = ` <h1 class="modal-title fs-5 "> <strong>Condición Presión Arterial Normal</strong> </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;

      templateModalBodyPresion = ` <img src="http://localhost/ProyectoFiDSIX/images/PresionNormal.gif" class="imga2">`;
      modalDeMensajePresion.style = 'background-color: rgba(12, 168, 7, 0.616);';
    }

    if(((sistoleF>=130) && (sistoleF<=139))||((diastoleF>=85) && (diastoleF<= 89))){
      templateMensajeResuPresion = `<p id="paPresion">"<strong>NOTACIÓN:</strong> Presión arterial normal alta: `+(sistoleF + `/` + diastoleF)+` "</p>`;
      padreContenedorPresion.style = 'background-color: #3c9e1e; color: black;';

      templateModalHeaderPresion = ` <h1 class="modal-title fs-5 "> <strong>Condición Presión Arterial Normal Alta</strong> </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;

      templateModalBodyPresion = ` <img src="http://localhost/ProyectoFiDSIX/images/PresionNormal.gif" class="imga2">`;
      modalDeMensajePresion.style = 'background-color: rgba(12, 168, 7, 0.616);';
    }

    if(((sistoleF>=140) && (sistoleF<=159))||((diastoleF>=90) && (diastoleF<= 99))){
      templateMensajeResuPresion = `<p id="paPresion">"<strong>NOTACIÓN:</strong> Hipertensión leve (Grado 1): `+(sistoleF + `/` + diastoleF)+` "</p>`;
      padreContenedorPresion.style = 'background-color: #F08486; color: black;';

      templateModalHeaderPresion = ` <h1 class="modal-title fs-5 "> <strong>Condición Presión Arterial - Hipertensión Leve</strong> </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;

      templateModalBodyPresion = ` <img src="http://localhost/ProyectoFiDSIX/images/_PresionLeve.gif" class="imga2">`;
      modalDeMensajePresion.style = 'background-color: rgba(143, 28, 72, 0.712);';
      
    }
    
    if(((sistoleF>=160) && (sistoleF<=179))||((diastoleF>=100) && (diastoleF<= 109))){
      templateMensajeResuPresion = `<p id="paPresion">"<strong>NOTACIÓN:</strong> Hipertensión moderada (Grado 2): `+(sistoleF + `/` + diastoleF)+` "</p>`;
      padreContenedorPresion.style = 'background-color: #F08486; color: black;';

      templateModalHeaderPresion = ` <h1 class="modal-title fs-5 "> <strong>Condición Presión Arterial - Hipertensión Moderada</strong> </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;

      templateModalBodyPresion = ` <img src="http://localhost/ProyectoFiDSIX/images/_PresionLeve.gif" class="imga2">`;
      modalDeMensajePresion.style = 'background-color: rgba(143, 28, 72, 0.712);';
      
    }

    if(((sistoleF>=180) && (sistoleF<=209))||((diastoleF>=110) && (diastoleF<= 119))){
      templateMensajeResuPresion = `<p id="paPresion">"<strong>ALERTA:</strong> Hipertensión grave (Grado 3). Requiere <strong>ATENCIÓN 
      HOSPITALARIA DE INMEDIATO</strong>"</p>`;
      padreContenedorPresion.style = 'background-color: #DF6B00; color: black;';

      templateModalHeaderPresion = ` <h1 class="modal-title fs-5 "> <strong>Condición Presión Arterial - Hipertensión Grave</strong> </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;

      templateModalBodyPresion = ` <img src="http://localhost/ProyectoFiDSIX/images/_PresionGrave.gif" class="imga2">`;
      modalDeMensajePresion.style = 'background-color: rgba(248, 60, 3, 0.568);';
      
    }

    if(((sistoleF>=210) || (diastoleF>=120))){
      templateMensajeResuPresion = `<p style="color: white;" id="paPresion">"<strong>ALERTA:</strong> Hipertensión Crítica (Grado 4). Requiere <strong>ATENCIÓN 
      HOSPITALARIA DE INMEDIATO</strong>"</p>`;
      padreContenedorPresion.style = 'background-color: #D41205; color: black;';

      templateModalHeaderPresion = ` <h1 class="modal-title fs-5 "> <strong>Condición Presión Arterial - Hipertensión Crítica</strong> </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;

      templateModalBodyPresion = ` <img src="http://localhost/ProyectoFiDSIX/images/_PresionCritica.gif" class="imga2">`;
      modalDeMensajePresion.style = 'background-color: rgba(248, 3, 3, 0.527);';
    }

    //En esta sección se asignan los valores obtenidos  en cuanto a resultados luego de cumplirse las condiciones para el tema de Presión Arterial
    $('#ResultadoPresion').html(templateMensajeResuPresion);$('#ResultadoPresion').show();
    $('#exampleModalLabelMensajepresion').html(templateModalHeaderPresion);$('#modalImageMensajepresion').html(templateModalBodyPresion);

    if ((pulsoPaciente == 0) || isNaN(pulsoPaciente)) {
      $('#MensajilloReportePresion').modal('show');
      $('#MensajilloReporte').modal('show');
    }
  }

  //FUNCIÓN AUXILIAR PARA EL TEMA DE ENVÍO DE CORREO 
  function EnviarCorreo(nombrePaciente,fechaSys, totalBalanceFinal){
    let nombrePacienteAux= nombrePaciente, fechaSysAux= fechaSys, totalBalanceFinalAux= totalBalanceFinal;
    console.log(nombrePacienteAux, fechaSysAux, totalBalanceFinalAux); 
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "gpssandcloudservices@gmail.com",
      Password: "740A47D909E7531F0F96C05B381700AAE278",
      To: 'utpch.desarrolloix@gmail.com ',
      From: "gpssandcloudservices@gmail.com",
      Subject: "Paciente: " + nombrePacienteAux + ' (ALERTA DP)',
      Body: "Reporte de día: " + fechaSysAux + "\n" +
        "Paciente: " + nombrePacienteAux + "\n" +
        " ALERTA: Excesiva retención de líquidos.  Balance Final del día = " + totalBalanceFinalAux + "\n" +
        " ALERTA: Condición turbia de drenaje."
    }).then(
      message => console.log(message)
    ); 


  } 


  //BLOQUE DE INTRUCCIONES POR SI EL USUARIO QUIERE CERRAR SU SESIÓN 
  $(document).on('click', '.cerrarSesionCliente', function () {
    window.location.replace("http://localhost/ProyectoFiDSIX/view/iniciodeSesion.html?");
  });

  //BLOQUE DE INTRUCCIONES POR SI EL USUARIO QUIERE RETORNAR AL MENÚ 
  $(document).on('click', '.volverMenup', function () {
    window.location.replace("http://localhost/ProyectoFiDSIX/view/UserMenu.html");
  });

  //BLOQUE DE INTRUCCIONES POR SI EL USUARIO QUIERE REGISTRAR UN NUEVO VALOR  
  $(document).on('click', '.nuevoBalance', function () {
    window.location.replace("http://localhost/ProyectoFiDSIX/view/homeUsers.html");
  });


  //BLOQUE DE INSTRUCCIONES PARA CUANDO SE QUIERA EMITIR UN REPORTE DE LOS RESULTADOS  POR MEDIO DE GRÁFICAS 
  const botoncitoGraficar = document.querySelector("#Grafico");
  botoncitoGraficar.addEventListener("click", function (evento) { 
    
    function generarGrafico() {
      //SECCIÓN EN LA QUE SE CAPTURAN O SE OBTINENE LOS VALORES A GRAFICAR
      let drenaje1 = parseInt($("#drenaje1").val()),totalBalance1 = parseInt($("#totalBalance1").val());
      let drenaje2 = parseInt($("#drenaje2").val()),totalBalance2 = parseInt($("#totalBalance2").val());
      let drenaje3 = parseInt($("#drenaje3").val()),totalBalance3 = parseInt($("#totalBalance3").val());
      let drenaje4 = parseInt($("#drenaje4").val()), totalBalance4 = parseInt($("#totalBalance4").val()); 


      //Anexo de los datos de infusión, drenaje y balance para los 4 recambios de Balance Hídrico
      var datosInfusion = [2000, 2000, 2000,2000]; // Datos de infusión
      var datosDrenaje = [drenaje1, drenaje2, drenaje3, drenaje4]; // Datos de drenaje
      var datosBalance = [totalBalance1, totalBalance2, totalBalance3, totalBalance4]; // Datos de balance

      // Aquí generaremos el gráfico utilizando Chart.js, teniendo ya los datos
      var ctx = document.createElement('canvas').getContext('2d');
      var popUpWindow = window.open('', '', 'width=600,height=400');
      popUpWindow.document.body.appendChild(ctx.canvas);

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Recambio 1', 'Recambio 2', 'Recambio 3', 'Recambio 4'],
          datasets: [
            {
              label: 'Infusión (mililitros)',
              data: datosInfusion,
              backgroundColor: 'rgba(5, 67, 182, 0.836)',
            },
            {
              label: 'Drenaje (mililitros)',
              data: datosDrenaje,
              backgroundColor: 'rgba(143, 97, 12, 0.877)',
            },
            {
              label: 'Balance (mililitros)',
              data: datosBalance,
              backgroundColor: 'rgba(111, 13, 141, 0.836)',
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Análisis de Resultados del Balance Hídrico', //Título de la Gráfica
              font: {
                size: 16,
                weight: 'bold'
              }
            }
          },
          responsive: true,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                precision: 0,
              },
            },
          },
        },
      });
    }

    generarGrafico();//Llamado de la función para que se ejucte lo de crear gráficas  

  });


  

});

