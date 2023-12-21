import {store} from './../store.js'
////////////////////////////////////////////////////////////////////////////////
const Home = { template: `

                 <div> 
                 <!-- INICIO DEL NAVBAR -->
                       <header class="anima_header animate__animated animate__fadeInLeft">
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
                            
                            <h1 class="paginau navbar-brand mr-0" >Vue Js/Perfil/{{correo}}</h1>
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

                    <!-- INICIO DEL HEADER BANNER -->
                       
                        <div class="infohome container">
                      
                          <content>
                              <h3>
                                Un portafolio puede ser tu  
                                <span class="pbold pgreen">
                                  MEJOR LLAVE
                                </span>
                              </h3>

                              <p>
                                Actualiza,Interactua y Arma tu Portafolio
                              </p>

                              <div class="d-flex justify-content-center mt-5">

                                <button class="boton2 mx-1"  @click="irVideos">
                                  Galeria de Videos
                                </button>
                                <button class="boton2 mx-1" @click="irAdministrador">
                                  Vista Administrador
                                </button>

                              </div>
                          </content>
                        </div>
                      <!-- FIN DEL HEADER BANNER -->

                      <!-- INICIO DEL NOMBRE Y DESCRIPCION -->

                        <div class="cajadescripcion p-5 d-flex bd-highlight container" >
                          <div class="subcajadescripcion flex-fill bd-highlight">
                            <p class="mt-2 h3 pgreen pbold pcenter">
                              {{nombre}}
                            </p>
                          </div>
                          <div class="subcajadescripcion flex-fill bd-highlight">
                            <p class="mt-2" style="text-align: center;font-size: 15px;">
                              {{descripcion}}
                            </p>
                          </div>
                        </div>
                      <!-- FIN DEL NOMBRE Y DESCRIPCION -->


                      <!--INICIO DE LAS CAJAS INFORMATIVAS-->
                        <div class="cajainformativa d-flex bd-highlight container">
                          <div class="cajainf p-2 flex-fill bd-highlight">
                            <div style="text-align: center;" class="mt-5">
                              <h3>Servicios</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                              </p>
                            </div>
                          </div>

                          <div @click = "abreModal" class="cajamensaje p-2 flex-fill bd-highlight position-relative">
                            <div class="pcenter position-absolute top-50 start-50 translate-middle">
                              <i class="fas fa-inbox" style="font-size: 50px"></i>
                              <p>Comunicarse con Administrador</p>
                            </div>
                          </div>

                          <div class="cajainf p-2 flex-fill bd-highlight">
                            <div style="text-align: center;" class="mt-5">
                              <i class="fas fa-code h3"></i>
                              <h3>Negocio de Programacion</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                              </p>
                            </div>
                          </div>
                        </div>

                        <!--FIN DE LAS CAJAS INFORMATIVAS-->






                        <!--INICIO DE PORTAFOLIO-->
                        <div class="container coscuro">

                          <div class="pcenter pgreen">
                              <h2 class="pt-3">Portafolio</h2>
                          </div>

                            <div class="flex-fill bd-highlight">
                                <img v-for="(item, index) of videos" v-bind:src="item.imagenvideo" width="18%"
                                class="mx-2 my-1 imagenPortafolio" @click="reproducirModal(index)">
                            </div>
                        </div>
                        <!--FIN DE PORTAFOLIO-->







                        <!--INICIO DE LA CAJA MODAL-->
                        
                        <div id="my-modal" class="modal">
                          <div class="modal-example">
                            <div class="header-modal">
                              
                            </div>
                            <div class="modal-body" style="margin-top:0px">
                              <div  class="coscuro pgreen container p-5 mt-5 animate__animated animate__fadeInLeft">
                              <span @click="cierraModal" class="close">X</span>
                                <h3 class="pcenter">Enviar Mensaje</h3>
                                <hr style="height: 4px;border-radius: 100px">

                                 <nav class="navbar navbar-expand-lg">
                                    <div class="container-fluid">
                                      <div class="input-group mx-1" >
                                      <textarea name="comentarios" class="form-mensaje " placeholder="Mensaje..." 
                                      id="umensaje">
                                      </textarea>      
                                    </div>

                                    <div class="navbar-collapse" id="navbarNavM" style="width:5%;">
                                      <ul class="navbar-nav">
                                        <li class="nav-item mx-1">
                                          <div class="input-group pt-1 ">
                                            <button class="btn" id="boton-video" @click="enviarMensaje" >
                                              <i class="fas fa-arrow-alt-up"></i>
                                            </button>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </nav>
                                <hr style="height: 4px;border-radius: 100px">
                                <div class="Correcto fs-3"  
                                id="mensajeEnviado">
                                </div>

                                <div class="Error fs-3"  
                                id="mensajeError">
                                </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        <!--FINAL DE LA CAJA MODAL-->


                             <!--INICIO DE LA CAJA MODAL-->
                        
                        <div id="my-modalv" class="modal">
                          <div class="modal-example">
                            <div class="header-modal">
                              
                            </div>
                            <div class="modal-body">
                              <div  class="coscuro pgreen container p-5 mt-5 animate__animated animate__fadeInLeft"
                              style="background:none">
                              <span @click="cerrarModal" class="close">X</span>
                                <div class="flex-fill bd-highlight">
                                <h3>Nombre: <span id="nombreVideo" class="pwhite">nombre</span></h3>
                                <h3>Clase: <span id="ClaseVideo" class="pwhite">Clase</span></h3>
                                <h3>Subclase: <span id="SubClaseVideo" class="pwhite">subclase</span></h3>
                                </div>
                                

                                <hr style="height: 4px;border-radius: 100px">

                                 <nav class="navbar navbar-expand-lg">
                                    <div class="container-fluid">
                                      <div class="input-group mx-1" >
                                      <iframe width="560" height="315" v-bind:src="'https://youtube.com/embed/'+linkVideo" 
                                       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                                       clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                                       style="margin: auto">
                                       </iframe>   
                                    </div>
                                  </div>
                                </nav>
                                <hr style="height: 4px;border-radius: 100px">
                                <div class="Correcto fs-3"  
                                id="mensajeEnviado">
                                </div>

                                <div class="Error fs-3"  
                                id="mensajeError">
                                </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        <!--FINAL DE LA CAJA MODAL-->

      </div>


            `,methods: {
                //Metodos del modal
                ...Vuex.mapMutations(['abreModal','cierraModal']),
                //Metodos del menu
                ...Vuex.mapMutations(['cierraSesion']),
                ...Vuex.mapMutations(['irPerfil']),
                ...Vuex.mapMutations(['irHome']),

                //Metodos del home 
                ...Vuex.mapMutations(['irAdministrador']),
                ...Vuex.mapMutations(['enviarMensaje']),
                ...Vuex.mapMutations(['irVideos']),
/////////////////////////////////////////////////////////////////////////////////////////////
                reproducirModal(index){
                  var modal = document.getElementById('my-modalv');
                  var nombre = document.getElementById('nombreVideo');
                  var clase = document.getElementById('ClaseVideo');
                  var subclase = document.getElementById('SubClaseVideo');
                  
                  store.state.linkVideo = store.state.videos[index].enlacevideo

                  nombre.innerHTML = store.state.videos[index].nombrevideo
                  clase.innerHTML = store.state.videos[index].clasevideo
                  subclase.innerHTML = store.state.videos[index].subclasevideo
                  
                  modal.style.display = 'block';
                },
/////////////////////////////////////////////////////////////////////////////////////////////
                cerrarModal(){
                  var modal = document.getElementById('my-modalv');
                  modal.style.display = 'none';
                },
/////////////////////////////////////////////////////////////////////////////////////////////                        
                
            },
            //AQUI VAN LOS mapState
            computed:{
                ...Vuex.mapState(['nombre']),
                ...Vuex.mapState(['descripcion']),
                ...Vuex.mapState(['correo']),
                ...Vuex.mapState(['videos']),
                ...Vuex.mapState(['linkVideo'])
                }

        }


export{Home}