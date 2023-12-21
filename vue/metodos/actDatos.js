//Importamos la STORAGE
import {store} from '../store.js'; 
////////////////////////////////////////////////
function actualizarDatos(){
	//Usuario de Firebase y Storage
	var user = firebase.auth().currentUser;
	var storage = firebase.storage();
	//Datos
	var nombre = document.getElementById("nombre").value;
	var email = document.getElementById('email').value;
	let contrasena = document.getElementById('contrasena').value;
    var contrasena2 = document.getElementById('contrasena2').value;
    var file = document.getElementById('mi-imagen').files[0];
	//Errores
	var error = document.getElementById("Error");
	var errorIMG = document.getElementById("ErrorIMG");
	//Todo bien
	var bien = document.getElementById("Bien");


	//Acuatlizar Nombre
	if (nombre) {
		user.updateProfile({
			displayName: nombre,
		}).then(function() {
			store.state.nombre = nombre;
			bien.innerHTML = "Datos Actualizados"
		}).catch(function(error) {
			error.innerHTML = "Error al actualizar el nombre"		
		});
	}
	////////////////////////////ERRORES EMAIL
	//Actualizar Email
	if (email){
		user.updateEmail(email).then(function() {
			store.state.correo = email;
			bien.innerHTML = "Datos Actualizados"
		}).catch(function(error) {
			var errorMessage = error.message;
			error.innerHTML = "Error al actualizar el correo"
		});
	}
	////////////////////////////ERRORES CONTRASE;A
	//Actualizar Password
	if (contrasena) {
		if (contrasena2) {
			var numero = false;
    		var igual = false;
			//Comprobamos los requisitos de cambio de password
			for(var i = 0;i<contrasena.length;i++){
            	if(contrasena.charCodeAt(i) >= 48 && contrasena.charCodeAt(i) <= 57){
                	numero = true;
                }
            }
                   
                        
            if(numero == false){
            	error.innerHTML = "La contraseña debe tener un valor numerico"
            }

            if (contrasena == contrasena2){
            	igual = true;
            }else{
            	error.innerHTML = "Las contraseñas no coinciden"
            }
            if(numero == true && igual == true){
            	user.updatePassword(contrasena).then(function() {
                	bien.innerHTML = "Datos Actualizados"
				}).catch(function(error) {
					var errorMessage = error.message;
					if (errorMessage == "Password should be at least 6 characters") {
                    	error.innerHTML = "La Contraseña debe tener 6 caracteres como minimo"
                	}
				});
			}
					
		}
	}
	//Actualizar Foto
	if (file) {
		var storageRef = storage.ref('/ImagenUsuarios/'+file.name);
		var uploadTask = storageRef.put(file);
		uploadTask.on('state_changed', function(snapshot){
			}, function(error){
   				errorIMG.innerHTML = "Error al subir la imagen"
				},function(){
					uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
						user.updateProfile({
							photoURL: downloadURL
						});
						store.state.fotos.urlPerfil = downloadURL; 
        				bien.innerHTML = "Datos Actualizados"
        			});

				});
	}
}
export{actualizarDatos}