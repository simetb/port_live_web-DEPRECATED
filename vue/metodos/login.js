import {router} from './../router.js';
import {getNombre,getCorreo,getDescripcion} from './infoUsuario.js';
//////////////////////////////////////////////////////////////////////////
//Funcion para Iniciar sesion con usuario y correo
function inicioSesion(){
	let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;    

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
        router.push('/home')
        getNombre()
        getCorreo()
        getDescripcion()
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var error = document.getElementById('error');
        console.log(errorMessage)
        if (errorMessage == "There is no user record corresponding to this identifier. The user may have been deleted.") {
            error.innerHTML = "El correo no corresponde a ningun usuario";
        }else if (errorMessage == "The email address is badly formatted.") {
            error.innerHTML = "El correo esta mal escrito";
        }else if (errorMessage == "The password is invalid or the user does not have a password.") {
            error.innerHTML = "Contraseña Invalida";
        }
    });

}

export{inicioSesion}