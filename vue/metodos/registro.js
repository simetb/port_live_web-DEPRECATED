//METODO PARA REGISTRARSE
function registroUsuario(){
   //datos
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;
    var numero = false;
    var igual = false;
    var error = document.getElementById('error');

    //Verificamos si tiene un numero
    for(var i = 0;i<password.length;i++){           
        if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
                        numero = true;
        }
                   
    }

    //Error de numero
    if(numero == false){
        error.innerHTML = "La contraseña tiene que tener minimo un numero";
    }

    //Verificando que las passwords sean iguales
    if (password == password2){
        igual = true;
    }else{
        error.innerHTML = "Las contraseña no coinciden";
        }

    //Veririficando que el campo de Email no este vacio
    if(email == ""){
        error.innerHTML = "Email no puede estar Vacio";
    }

    //Registrando el usuario
    
    if (numero == true && igual == true && email != "") {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            var correcto = document.getElementById('correcto');
            correcto.innerHTML = "Usuario registrado correctamente";
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var error = document.getElementById('error');
                if (errorMessage == "Password should be at least 6 characters") {
                    error.innerHTML = "La Contraseña debe tener 6 caracteres como minimo"
                }else if (errorMessage == "The email address is already in use by another account.") {
                    error.innerHTML = "El correo ya esta en uso"
                }else if (errorMessage == "The email address is badly formatted.") {
                    error.innerHTML = "El correo esta mal escrito";
                }
            });
                        
    
    }
   
}


export{registroUsuario}



                    

                    