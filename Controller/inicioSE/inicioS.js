$(document).ready(function(){

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

    registre_link.addEventListener('click', ()=>{
        wrapper.classList.add('active');
        wrapperB2.classList.remove('active-popup');
    });

    login_link.addEventListener('click', ()=>{
        wrapper.classList.remove('active');
        wrapperB2.classList.remove('active-popup');
    });


    BtnPopup.addEventListener('click', ()=>{
        wrapper.classList.add('active-popup');
        wrapperB2.classList.remove('active-popup');
         $('#ContenedorPadreA').show();
         $('#ContenedorPadreB').hide(); 
    });

    iconoClose.addEventListener('click', ()=>{
        wrapper.classList.remove('active-popup');
        wrapperB2.classList.remove('active-popup');
    });


    Carrusel.addEventListener('click', ()=>{
        wrapperB2.classList.add('active-popup');
        wrapper.classList.remove('active-popup');
         $('#ContenedorPadreA').hide(); 
         $('#ContenedorPadreB').show(); 
        
       
    });

    iconoClose2.addEventListener('click', ()=>{
        wrapperB2.classList.remove('active-popup');
    });


     $('#Ingreso').hide();//Esto mantiene 

     
    
     //SECCIÓN EN DONDE SE HACE USO Y CONTROL DEL FORMULARIO Y LOS DATOS ENVIADOS PARA ASÍ PODER MANIPULAR EL TEMA DE LA SESIÓN 
    $('#UsuarioForm').submit(function (e) {  
        e.preventDefault();//Este método es para cancelar el comportamiento que por defecto los formularios al darle submit norefresquen la página

        let usuario= $('#Correo').val(); 
        let password =  $('#contrasena').val(); 
        localStorage.setItem('usuario', usuario);//Con esto logramos almacenar el nombre del usuario de forma local y así poderlo usar en otras páginas del proyecto 
        let contadorModal= 0; 
        localStorage.setItem('contadorModal', contadorModal);//Esto para controlar que el modal de bienvenida sólo aparezca cuando se inicia otra sesión. 


        if(((usuario=="usuario_MD")&&(password=="nefrologodp")||(usuario=="usuario_ENF")&&(password=="enfermeriadp")||(usuario=="usuario_PD")&&(password=="pacientedp"))){
            window.location.replace("http://localhost/ProyectoFiDSIX/view/UserMenu.html");
            
            $('#UsuarioForm').trigger('reset');
        }else{
            $('#Ingreso').modal('show');
            $('#UsuarioForm').trigger('reset');//Aquí limpiamos los datos del Formulrio
        }
         
    });

});

