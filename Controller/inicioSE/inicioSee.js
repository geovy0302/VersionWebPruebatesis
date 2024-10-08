$(document).ready(function () {


    $('#IngresoA').hide();//Esto mantiene

    const wrapper = document.querySelector('.wrapper');
    const wrapperB2 = document.querySelector('.wrapper2');
    const login_link = document.querySelector('.register_login');
    const registre_link = document.querySelector('.login-register');
    const BtnPopup = document.querySelector('.btnLogin-popup');
    const iconoClose = document.querySelector('.icon-close');
    const Carrusel = document.querySelector('.carrusel');
    const iconoClose2 = document.querySelector('.icon-closeB2');

    /* $('#ContenedorPadreB').hide();//Est  */
    /* $('#ContenedorPadreA').hide();  */

    registre_link.addEventListener('click', () => {
        wrapper.classList.add('active');
        wrapperB2.classList.remove('active-popup');
    });

    login_link.addEventListener('click', () => {
        wrapper.classList.remove('active');
        wrapperB2.classList.remove('active-popup');
    });


    BtnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
        wrapperB2.classList.remove('active-popup');
        $('#ContenedorPadreA').show();
        $('#ContenedorPadreB').hide();
    });

    iconoClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
        wrapperB2.classList.remove('active-popup');
    });


    Carrusel.addEventListener('click', () => {
        wrapperB2.classList.add('active-popup');
        wrapper.classList.remove('active-popup');
        $('#ContenedorPadreA').hide();
        $('#ContenedorPadreB').show();


    });

    iconoClose2.addEventListener('click', () => {
        wrapperB2.classList.remove('active-popup');
    });


    //Formulario de Inicio de Sesión 

    $('#UsuarioForm').submit(function (e) {
        const postDatos = {
            'cedula_Usuario': $('#userCedula').val(),
            'contrasena': $('#contrasena').val(),
        };
        console.log(postDatos);

        $.ajax({
            type: 'POST',
            url: 'https://www.sistecsolutions.net/ehealth/ApisTesis/Login%20BDT/login.php',
            data: postDatos,
            dataType: 'json', // Establece el tipo de datos esperado
            success: function(response) {
                // Verifica si la respuesta es un arreglo
                if (Array.isArray(response)) {
                    // Procesa la respuesta como un arreglo
                    let userData = response[0];
                    let processInfo = response[response.length - 1];
        
                    if (processInfo.process === "Datos_de_user_encontrados") {
                        // Almacena los datos del usuario
                        let idUsuario = userData.Id_Usuario;
                        let nombre = userData.NombreC_U;
                        let apellido = userData.Apellido_CU;
                        let cedula = userData.Cedula_DNI;
                        let email = userData.E_mail;
                        let contadorModal= 0; 
        
                        // Aquí puedes almacenar los datos en localStorage o donde desees
                        localStorage.setItem("idUsuario", idUsuario);
                        localStorage.setItem("nombre", nombre);
                        localStorage.setItem("apellido", apellido);
                        localStorage.setItem("cedula", cedula);
                        localStorage.setItem("email", email);
                        localStorage.setItem('contadorModal', contadorModal);//Esto para controlar que el modal de bienvenida sólo aparezca cuando se inicia otra sesión. 
                
        
                        // Redirigir o mostrar un mensaje de éxito
                        console.log("Inicio de Sesión Exitoso");
                        window.location.replace("http://localhost/MyMedicRec/View/MenuUserPrincipal.html");
                    }
                } else {
                    // Si no es un arreglo, se asume que es un objeto
                    if (response.process === "Datos_de_user_No_encontrados") {
                        //alert(response.message); // Muestra el mensaje de error
                        console.log("Usuario no encontrado");
                        $('#IngresoA').modal('show');
                        $('#UsuarioForm').trigger('reset'); // Para limpiar el formulario
                    }
                }
            },
            error: function(error) {
                console.log("Error: ", error);
            }
        });


        e.preventDefault(); //Este método es para cancelar el comportamiento que por defecto los formularios al darle submit no refresquen la página
    });


});

