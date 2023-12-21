import {irRegistro,irLogin,irPerfil,irHome,irDatosPerfil,irInfoPerfil,irAdministrador,
irVideos} from './metodos/Ir.js';
import {irCargarMensajes,enviarMensaje} from './metodos/mensajes.js';
import {subirVideo,cargarVideos} from './metodos/videos.js'
import {inicioSesion} from './metodos/login.js';
import {registroUsuario} from './metodos/registro.js';
import {abreModal,cierraModal} from './metodos/modal.js';
import {cierraSesion} from './metodos/cierraSesion.js';
import {actualizarDatos} from './metodos/actDatos.js';
import {actualizarInfo} from './metodos/actInfo.js';
/////////////////////////////////////
const store = new Vuex.Store({
            state:{
                correo:"ERROR",
                descripcion:"",
                nombre:"Sin registro",
                telefono:"Sin registro",
                social:{
                    facebook:"",
                    twitter:"",
                    instagram:"",
                },
                fotos:{
                    urlPerfil:"",
                    portafolio:[],
                },
                mensajes:{
                    informacion:[],
                    cantidad:0
                },
                videos: [],
                linkVideo: ""



              },
            mutations:{
                //Metodos de login
            	irRegistro,
            	inicioSesion,
                //Metodos de Registro
                irLogin,
                registroUsuario,
                //Metodos del modal
                abreModal,
                cierraModal,
                //Metodos del menu
                cierraSesion,
                irHome,
                //Perfil
                irPerfil,
                irDatosPerfil,
                irInfoPerfil,
                //Metodos de Actualizacion de datos
                actualizarDatos,
                //Metodos para la actualizacion de informacion
                actualizarInfo,
                //Metodos Home
                irAdministrador,
                enviarMensaje,
                irVideos,
                //Metodos Administrador
                irCargarMensajes,
                //Metodos de galeria de videos
                subirVideo,
                cargarVideos
       
            },
            actions:{
                              
            }

        });

export{store}