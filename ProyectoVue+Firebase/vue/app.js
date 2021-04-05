//STORE
import {store} from './store.js';
//ROUTER
import {router} from './router.js';
//Informacion del usuario
import {getNombre,getCorreo,getDescripcion,getTelefono,getFotoPerfil,
getFacebook,getInstagram,getTwitter,getVideos} from './metodos/infoUsuario.js';
//Animaciones
import {animaHeader} from './metodos/animaciones.js';


//------------------------------------------------------------------------------------------------------
//INICIALIZACION DEL VUE
const app = new Vue({
    router,
    el: '#app',
    store: store,
    computed: {
        ...Vuex.mapState(['social'])
    }
});

//------------------------------------------------------------------------------------------------------
//COMPRUEBA SESION ACTIVA
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //Informacion Personal
    getNombre()
    getCorreo()
    getDescripcion()
    getTelefono()
    getFotoPerfil()
    getFacebook()
    getInstagram()
    getTwitter()
    getVideos()
    //Animaciones
    animaHeader()
  } else {
    router.push('/login');
  }
});

