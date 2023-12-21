const DatosPerfil = {template:`
        	<div>
        	 <!-- INICIO DEL NAVBAR -->
                       <header class="anima_header">
                        <nav class="header-noUser navbar navbar-expand-lg container transition bg">
                          <div class="container-fluid p-0">

                            <div class="cajamenu d-flex flex-row bd-highlight ">
                              <div class="p-2 bd-highlight">
                                <img src="img/logoVue.png" alt="" width="100" height="84">
                              </div>
                              <div class="mt-4 bd-highlight">
                                <h2>
                                  <span class="pwhite">Port</span>LIVE
                                </h2>
                              </div> 
                              <div class="d-flex flex-row bd-highlight mt-4">
                                <button class="menu-nav">Info</button>
                                <button class="menu-nav">Contacto</button>
                                <button class="menu-nav">Programacion</button>
                              </div>    
                            </div>
                            
                            <h1 class="paginau navbar-brand mr-0" >Vue Js/Datos/{{correo}}</h1>
                          </div>

                                <nav class="navegacion">
                                    <ul class="menu">
                                        <li><button><i class="fas fa-cogs"></i></button>
                                            <ul class="submenu">
                                                <li>
                                                  <button @click="irHome">
                                                    <i class="fas fa-home"></i>
                                                    &nbsp;&nbsp;Home
                                                  </button>
                                                </li>
                                                <li>
                                                  <button @click="irPerfil">
                                                    <i class="fas fa-user-cog"></i>
                                                    &nbsp;&nbsp;Perfil
                                                  </button>
                                                </li>
                                                <li>
                                                  <button id="salir" @click="cierraSesion">
                                                    <i class="fas fa-power-off"></i>
                                                    &nbsp;&nbsp;Salir
                                                  </button>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                                </nav>
                    </header>

                    <!-- FIN DEL NAVBAR -->

     

      <div class="container pcenter pgreen">

        <h1 class="mt-5 h3">Actualizar Datos</h1>

         <!-- Inicio del Formulario -->
          <div class="formulario mt-5 mb-5">
            <div class="mb-3">
              <img v-bind:src="fotos.urlPerfil" class="fotoform">
              <span class="mi-archivo">
			           <input type="file" name="mi-archivo" id="mi-imagen">
			        </span>
			        <label for="mi-imagen" id="mi-archivol">
				        <span id="mi-archivospan">
                  <i class="fas fa-upload pwhite"></i>
                  &nbsp Seleccionar Img
                </span>
			        </label>
			      </div>

            <div class="mb-2 Error" >
                <span id="ErrorIMG"></span>
            </div>

            <p class="text-start">Actualizar Nombre</p>
            <div class="input-group mb-3">
              <input type="text" class="inputs" placeholder="Nombre..." id="nombre">
            </div>
            
            <p class="text-start">Actualizar Email</p>

            <div class="input-group mb-3">
              <input type="email" class="inputs" placeholder="Email..." id="email">
            </div>

            <h2 class="h5 pgreen pcenter pbold">Actualizar Contrasena</h2>
            <p class="text-start">Contrasena</p>
            <div class="input-group mb-3">
              <input type="password" class="inputs" placeholder="Password..." id="contrasena" >
            </div>
            
            <p class="text-start">Repetir Contrasena</p>
            <div class="input-group mb-3">
              <input type="password" class="inputs" placeholder="Password..." id="contrasena2">  
            </div>
            <!-- ////////////////////////////////////////////////////////ERROR DATOS O SUBIDA EXITOSA-->
            <div class="mb-2 Error" >
                <span  id="Error"></span>
            </div>
             <div class="mb-2 Correcto" >
                <span  id="Bien"></span>
            </div>

            <button class="boton mx-1" @click ="actualizarDatos">
              <i class="fas fa-arrow-up" style="color: white"></i>&nbsp;Actualizar
            </button>
            <button @click ="irPerfil" class="boton mx-1">
              Volver
            </button>

          </div>
          <!-- Fin del Formulario -->
      </div>
         
  </div>`,methods:{
            

             /*Metodos del menu*/
             ...Vuex.mapMutations(['irHome']),
             ...Vuex.mapMutations(['irPerfil']),
             ...Vuex.mapMutations(['cierraSesion']),
             ...Vuex.mapMutations(['actualizarDatos'])
        	},computed:{
              ...Vuex.mapState(['correo']),
              ...Vuex.mapState(['fotos'])
              
        	}
        }
    




export{DatosPerfil}