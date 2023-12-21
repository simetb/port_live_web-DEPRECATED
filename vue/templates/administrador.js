const Administrador = {template: `


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
                            
        <h1 class="paginau  pred navbar-brand mr-0" >
            Vue Js/Admin/{{correo}}
        </h1>
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


  <div class="container mb-5">
                 
    <!-- Inicio del Menu Administrador -->
    <content>
      <div id = "formularioAdmin" class="mt-5 pgreen pcenter formulario">         
        <ul class="grupoBotones">
          <li><h3>Menu Admin</h3></li>
          <li><button class="boton inhabilitado">Componentes web</button></li>
          <li><button class="boton inhabilitado">Galeria de Videos</button></li>
          <li><button class="boton crojo" @click = "irCargarMensajes">Mensajes</button></li>
        </ul>                     
      </div>
    </content> 
    <!-- Fin del Menu Administrador -->                  
  
  </div>
</div>  
            `,methods: {

                //Metodos del menu
                ...Vuex.mapMutations(['irPerfil','irHome','cierraSesion']),
                //Metodos del menuAdmin
                ...Vuex.mapMutations(['irCargarMensajes'])


            },computed:{
                ...Vuex.mapState(['correo'])
            }
        }


export{Administrador}