$(document).ready(function () {
  //BLOQUE DE INSTRUCCIONES PARA CUANDO SE QUIERA DESCARGAR EL REPORTE PDF CON LOS RESULTADOS 
  const botoncitoDescargar = document.querySelector("#Descargar");
  botoncitoDescargar.addEventListener("click", function (evento) {


    // Por medio de las siguientes líneas traemos los valores a mostrar en el PDF

    var contenidoTituloHospital = document.getElementById("TituloHospital").innerHTML; //Aquí traemos el nombre nuestro centro médico 
    var contenidoTituloUnidad = document.getElementById("TituloUnidad").innerHTML; //Aquí traemos el nombre nuestro centro médico
    let fecha = "Fecha Registro = " + $("#fechaTrast").val();
    var contenidoTituloPac = document.getElementById("TituloNombre").innerHTML;//Aquí traemos el nombre del paciente. 
    let totalBalance1 = parseInt($("#totalBalance1").val());
    let totalBalance2 = $("#totalBalance2").val();
    let totalBalance3 = parseInt($("#totalBalance2").val());
    let totalBalance4 = parseInt($("#totalBalance4").val());
    let totalinfusion = parseInt($("#totalinfusion").val());
    let totaldrenaje = parseInt($("#totaldrenaje").val());
    let sistole = parseInt($("#sistole").val());
    let diastole = parseInt($("#diastole").val());
    let pulso = parseInt($("#pulsoPaciente").val());
    var contenidoparraPresion = " ";
    var contenidoparraPresionFin = " ";
    var contenidoparraPulso = " ";
    var contenidoparraPulsoFin = " ";
    var contenidoValorPresion = " ";
    var contenidoValorPulso = " ";


    //Sección del código para concatenar los mesanjes que aparecerán en el PDF según sea el caso 

    let totalbalanceFinal = parseInt($("#totalbalanceFinal").val());
    if (((sistole == 0) || (isNaN(sistole))) || ((diastole == 0) || (isNaN(diastole)))) {
      contenidoValorPresion = "No Hubo regitro de Presión Arterial " + '\n';
    } else {
      contenidoValorPresion = "Presión Arterial registrada = " + sistole + "/" + diastole + '\n';
    }

    if ((pulso == 0) || isNaN(pulso)) {
      contenidoValorPulso = "No Hubo registro de Frecuencia Cardíaca " + '\n';
    } else {
      contenidoValorPulso = "Frecuencia Cardíaca registrada = " + pulso + '\n';
    }

    var contenidoRecambio1 = "Balance del Recambio 1= " + totalBalance1 + '\n';
    var contenidoRecambio2 = "Balance del Recambio 2= " + totalBalance2 + '\n';
    var contenidoRecambio3 = "Balance del Recambio 3= " + totalBalance3 + '\n';
    var contenidoRecambio4 = "Balance del Recambio 4= " + totalBalance4 + '\n';
    var contenidoInfusion = "Total de Infusión registrada = " + totalinfusion + '\n';
    var contenidoDrenaje = "Total de Drenaje registrada = " + totaldrenaje + '\n\n';
    var contenidoBalanceFinal = "Balance Hídrico Final Obtenido  = " + totalbalanceFinal + '\n';
    var contenidoTituloResultado = document.getElementById("TituloResultadoPdf").innerHTML;
    var contenidoparrafo = document.getElementById("parrafoContenido").innerHTML;
    let contenidoparrafoFin = contenidoparrafo.replace(/<strong>/g, "").replace(/<\/strong>/g, ""); //Esta línea permite el eliminar las estiquetas de una string; 

    let padrePresion = document.getElementById("ResultadoPresion"); //Condición para controlar si el contenedor está vacío o no 
    if (padrePresion.innerHTML != " ") {
      contenidoparraPresion = document.getElementById("paPresion").innerHTML;
      contenidoparraPresionFin = contenidoparraPresion.replace(/<strong>/g, "").replace(/<\/strong>/g, "");
    }

    let padrePulso = document.getElementById("ResultadoPulso"); //Condición para controlar si el contenedor está vacío o no 
    if (padrePulso.innerHTML != " ") {
      contenidoparraPulso = document.getElementById("paPulso").innerHTML;
      contenidoparraPulsoFin = contenidoparraPulso.replace(/<strong>/g, "").replace(/<\/strong>/g, ""); //Esta línea permite el eliminar las estiquetas de una string;
    }


    var contenido = contenidoTituloHospital + '\n' + contenidoTituloUnidad + '\n' + fecha + '\n\n' + contenidoTituloPac + '\n\n'
      + contenidoValorPresion + contenidoValorPulso + '\n' + contenidoRecambio1 + contenidoRecambio2 + contenidoRecambio3 + contenidoRecambio4
      + contenidoInfusion + contenidoDrenaje + contenidoBalanceFinal
      + '\n' + contenidoTituloResultado + '\n\n' + contenidoparrafoFin + '\n\n' + contenidoparraPresionFin + '\n\n' + contenidoparraPulsoFin;

    // Creamos un nuevo documento PDF con el objeto jsPDF que será asignado a la variable doc
    var doc = new jsPDF();

    // Agregremos la variable que posee el contenido (que en teoría ya debe estar cargado después del proceos de concatenación), al documento PDF
    doc.text(contenido, 10, 10, {
      width: 10,
    });

    // Y con esto al iniciarse y terminar la descargar este será el nombre con el que se guardará  
    doc.save("Balance_hídrico_Centro_GEJAZE_UTP.pdf");
  });
});