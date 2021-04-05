import {store} from './../store.js';
////////////////////////////////////////////////////
function getNombre(){
	var user = firebase.auth().currentUser;
    store.state.nombre = "Sin nombre Registrado...";                  
    if(user.displayName == null){
    	store.state.nombre = "Sin nombre Registrado...";
   	}else{
        store.state.nombre =  user.displayName;
    }
}

function getCorreo(){
	var user = firebase.auth().currentUser;
    if(user != null){
    	store.state.correo = user.email;
    } else{
        store.state.correo = "Usuario inexistente"
    }
}

function getDescripcion(){
	var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
    	var descripcion = (snapshot.val() && snapshot.val().UserDescripcion) || 'Sin Descripcion registrada';                        
        store.state.descripcion = descripcion;
        });
}

function getTelefono(){
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
        var telefono = (snapshot.val() && snapshot.val().UserTelefono) || 'Sin Registro';
        store.state.telefono = telefono;
        });
                        
}

function getFotoPerfil(){
    var user = firebase.auth().currentUser;
    if (user.photoURL == null) {
        store.state.fotos.urlPerfil =  "img/Usuarioimg.png"
    }else{                          
        store.state.fotos.urlPerfil = user.photoURL
    }

}

function getFacebook(){
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
        var facebook = (snapshot.val() && snapshot.val().UserFacebook) || 'Sin Registro';
        store.state.social.facebook = facebook;
                        });
                     
}

function getInstagram(){
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
        var facebook = (snapshot.val() && snapshot.val().UserInstagram) || 'Sin Registro';
        store.state.social.instagram = facebook;
                        });

}

function getTwitter(){
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
        var facebook = (snapshot.val() && snapshot.val().UserTwitter) || 'Sin Registro';
        store.state.social.twitter = facebook;
                        });

}
export {getNombre,getCorreo,getDescripcion,getTelefono,getFotoPerfil,
getFacebook,getInstagram,getTwitter}