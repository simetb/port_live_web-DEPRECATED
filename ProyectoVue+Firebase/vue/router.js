import {Login} from './templates/login.js';
import {Registro} from './templates/registro.js';
import {Home} from './templates/home.js';
import {Profile} from './templates/profile.js';
import {DatosPerfil} from './templates/datosPerfil.js';
import {InfoPerfil} from './templates/infoPerfil.js';
import {Administrador} from './templates/administrador.js';
import {Mensajes} from './templates/mensajes.js';
import {Videos} from './templates/videos.js';
 //------------------------------------------------------------------------------------------------------
 //ROUTER  
    const routes = [
    { path: '/login', component: Login },
    { path: '/registro', component: Registro},
    { path: '/home', component: Home},
    { path: '/perfil',component: Profile},
    { path: '/datosPerfil', component: DatosPerfil},
    { path: '/infoPerfil', component: InfoPerfil},
    { path: '/administrador', component: Administrador},
    { path: '/mensajes', component: Mensajes},
    { path: '/videos', component: Videos}
    ]

    const router = new VueRouter({
    routes // short for `routes: routes`
    })


export{router}