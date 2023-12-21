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

function getVideos(){
    //Cargamos el usuario
    var user = firebase.auth().currentUser;
    //Cargamos los videos del usuario
    firebase.database().ref('/videos/'+ user.uid).once('value').then(function(snapshot){
        //Reiniciamos el array de videos
        store.state.videos = [];
        //Almacenamos la informacion
        var videos = snapshot.val();
        //Almacenamos la informacion de todos los videos por su key
        for(let key in videos){
            firebase.database().ref('/videos/'+user.uid+'/'+key).once('value').then(function(snapshot){
                //Almacenamos la informacion del video
                var infovideos = snapshot.val();
                store.state.videos.push(infovideos); 

            });
        }
        
    });
}
export {getNombre,getCorreo,getDescripcion,getTelefono,getFotoPerfil,
getFacebook,getInstagram,getTwitter,getVideos}