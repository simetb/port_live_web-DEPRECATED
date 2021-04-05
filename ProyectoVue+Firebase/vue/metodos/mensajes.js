import {store} from './../store.js';
import {router} from './../router.js';
//////////////////////////////////////////////////
//Funcion para cargar los mensajes
function irCargarMensajes(){
    router.push('/mensajes')
    firebase.database().ref('/mensajes/').once('value').then(function(snapshot){
        //REINICIAMOS LAS VARIABLES
        store.state.mensajes.informacion = [];
        store.state.mensajes.cantidad = 0;
        //INGRESAMOS A LOS MENSAJES CON SUS RESPECTIVAS KEYS
        var mensajes = snapshot.val();
        for(let key in mensajes){
            firebase.database().ref('/mensajes/'+key).once('value').then(function(snapshot){
                var infomensajes = snapshot.val();
                //Almacenamos la informacion
                if(!infomensajes.leido){
                    store.state.mensajes.cantidad++;
                    store.state.mensajes.informacion.unshift(infomensajes);
                }else{
                    store.state.mensajes.informacion.push(infomensajes);
                }
            });
        }
    });

}

function enviarMensaje(){
    //Pedimos el usuario
    var user = firebase.auth().currentUser;
    //Entramos a la base de datos con nuestra key de usuario
    firebase.database().ref('/users/'+ user.uid).once('value').then(function(snapshot){
        //Variables a utilizar
        var mensajes = document.getElementById("umensaje").value;//Guarda el mensaje
        var newkey = firebase.database().ref().child('mensajes').push().key;//Crea una key
        var usuario = snapshot.val();//Guarda la informacion del usuario
        //Verficamos que el campo de mensaje no este vacio
        if (mensajes) {
            //Creamos en la referencia mensajes/ un nuevo campo con su llave
            firebase.database().ref('mensajes/'+newkey+'/').set({
            mensaje: mensajes,
            nombreusuario: user.displayName,
            telefonousuario: usuario.UserTelefono,
            correo: user.email,
            leido: false,
            keymensaje:newkey
            //Captamos si hubo un error
            },(error) => {
                if (error) {
                    var mal = document.getElementById('mensajeError');
                    mal.innerHTML = "Ocurrio un Error Inesperado...";
                } else {
                    var bien = document.getElementById('mensajeEnviado');
                    bien.innerHTML = "Mensaje Enviado";
                }
            });
        }else{
            //Si el campo de mensaje esta vacio:
            var mal = document.getElementById('mensajeError');
            mal.innerHTML = "No puede enviar un mensaje vacio...";
        }
        
    });
}


export {irCargarMensajes,enviarMensaje}