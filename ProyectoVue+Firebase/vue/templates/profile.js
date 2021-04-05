const Profile = { template: `

    <div>
        			  <!-- INICIO DEL NAVBAR -->
                       <header>
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
                            
                            <h1 class="paginau navbar-brand mr-0" >Vue Js/Home/{{correo}}</h1>
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



                    <!-- INICIO INFORMACION USUARIO-->
    <div class="pcenter container p-2 pgreen bg-gris">
        <div class="cajaPerfil">
        	<h1 class="mb-5 titulo-releno">Informacion del Usuario</h1>

        	<div class="d-flex justify-content-evenly">
        	   <div class="contenedor-imagen-perfil">
                    <img  class="imagen-perfil" v-bind:src="fotos.urlPerfil" >
                </div>
    	    	
                <div class="pjustify">
    	    	    <h3>Usuario:<span class="h2 pwhite"> {{nombre}}</span></h3>

    	    	    <h3>Correo:<span class="correop pwhite"> {{correo}}</span></h3>
    	    	
                    <h3>Telefono:<span class="h2 pwhite"> {{telefono}}</span></h3>
    	    	</div>
        	</div>


        	<div class="pcenter cajaVerdeDescripcion" >
                
        		<h3 class="titulo-releno-mini p-1">Descripcion</h3>
        		<p class="mt-3 container pwhite pbold">{{descripcion}}</p>
        	</div>


        	<div class=" social d-flex justify-content-center">
        		<div>
        		    <h3 class="facebook">
                        <i class="fab fa-facebook"></i>
                    </h3>
        		
                    <span class="pwhite pbold">{{social.facebook}}</span>	
        		</div>

        		<div>
        		    <h3 class="instagram">
                        <i class="fab fa-instagram"></i>
                    </h3>
        		    <span class="pwhite pbold">@{{social.instagram}}</span>
        		</div>

        		<div>
        		    <h3 class="twitter">
                        <i class="fab fa-twitter"></i>
                    </h3>
        		    <span class="pwhite pbold">@{{social.twitter}}</span>	
        		</div>

        	</div>
        	<div class="d-flex justify-content-center mb-3">
        	    <button class="boton mt-5 mx-3" @click = "irDatosPerfil">
                    <i class="fas fa-cog"></i> Datos Perfil
                </button>
        	    <button class="boton mt-5 mx-3" @click = "irInfoPerfil">
                    <i class="fas fa-cog"></i> Info Perfil
                </button>
    	   </div>
    </div>

</div>
                <!-- FINAL INFORMACION USUARIO-->
</div>
        	`,methods: {
                 //Metodos del menu
                ...Vuex.mapMutations(['cierraSesion']),
                ...Vuex.mapMutations(['irPerfil']),
                ...Vuex.mapMutations(['irHome']),
                /*Metodos Del Perfil*/
                ...Vuex.mapMutations(['irDatosPerfil']),
                ...Vuex.mapMutations(['irInfoPerfil']),
            },
            computed:{
                //Informacion del usuario
                ...Vuex.mapState(['nombre']),
                ...Vuex.mapState(['descripcion']),
                ...Vuex.mapState(['correo']),
                ...Vuex.mapState(['telefono']),
                ...Vuex.mapState(['fotos']),
                ...Vuex.mapState(['social']),
            }
        }


export {Profile}