//TEMPLATE DE ACTUALIZACION DE LA INFORMACION DEL PERFIL
        const InfoPerfil = { template:`
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
                            
                            <h1 class="paginau navbar-brand mr-0" >Vue Js/Info/{{correo}}</h1>
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

              <h1 class="mt-5 h3">Actualizar Informacion</h1>

              <!-- INICIO DEL FORMULARIO DE INFORMACION-->
              <div class="mt-5 formulario mb-5">
            
                <p class="text-start">
                  Usuario Instagram <i class="fab fa-instagram"></i>
                </p>

                <div class="input-group mb-3">
                  <input type="text" class="inputs" placeholder="User Instagram..." id="uinstagram">
                </div>

                <p class="text-start">
                  Usuario Facebook <i class="fab fa-facebook"></i>
                </p>

                <div class="input-group mb-3">
                  <input type="email" class="inputs" placeholder="User Facebook..." id="ufacebook">              
                </div>

                <p class="text-start">
                  Usuario Twitter <i class="fab fa-twitter"></i>
                </p>

                <div class="input-group mb-3">
                  <input type="text" class="inputs" placeholder="User Twitter..." id="utwitter">
                </div>

                <p class="text-start">
                  Numero de Telefono <i class="fas fa-phone"></i>
                </p>

                <div class="input-group mb-3">
                  <input type="text" class="inputs" placeholder="Telefono..." id="utelefono">
                </div>


                <p class="text-start">Descripcion</p>

                <div class="input-group mb-3">
                  <textarea name="comentarios" class="inputs" placeholder="Descripcion..." id="udescripccion"></textarea>
              
                </div>

                <div class="Error mb-1" >
                  <span id="error"></span>
                </div>

                <div class="Correcto mb-1" >
                  <span id="bien"></span>
                </div>

                <button class="boton" id="botonesact" @click ="actualizarInfo">
                  <i class="fas fa-arrow-up"></i>&nbsp;Actualizar
                </button>
                <button type="button" @click= "irPerfil" id="btn-registro" class="boton">
                  Volver
                </button>

            </div>
            <!-- FIN DEL FORMULARIO DE INFORMACION-->
        </div>
        

          </div>

          `,methods:{
          //Metodos de formularios
            ...Vuex.mapMutations(['actualizarInfo']),
          //Metodos del Menu
            ...Vuex.mapMutations(['irPerfil','irHome','cierraSesion'])

          },computed:{
            ...Vuex.mapState(['correo'])  

          }
      }

export{InfoPerfil} 