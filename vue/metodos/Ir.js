import {router} from './../router.js'
////////////////////////////////////////////////////////////////////////////////////////////////////7
//REDIRECCIONAMIENTO DE SPA PARA LOS BOTONES

function irRegistro(){
	router.push("/registro")
}

function irLogin(){
	router.push("/login")
}

function irHome(){
	router.push("/home")
}

function irPerfil(){
	router.push("/perfil")
}

function irDatosPerfil(){
	router.push("/datosPerfil")
}

function irInfoPerfil(){
	router.push("/infoPerfil")
}

function irAdministrador(){
	router.push('/administrador')
}

function irVideos(){
	router.push('/videos')
}

export{irRegistro,irLogin,irHome,irPerfil,irDatosPerfil,irInfoPerfil,irAdministrador,irVideos}