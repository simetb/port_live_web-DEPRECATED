import {router} from './../router.js'
//////////////////////////////////////////////////////////////
//FUNCION PARA CERRAR SESION
function cierraSesion(){
	firebase.auth().signOut().then(function() {
    	router.push('/login');
        }).catch(function(error) {
       	cierra = document.getElementById('salir');
        salir.style.color = 'red'
        salir.innerHTML = 'ERROR'
                    }); 
                }

export{cierraSesion}