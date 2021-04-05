import {store} from './../store.js'
///////////////////////////////////////////////////////////
const Mensajes = {template: `
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
                                Mensajes/{{correo}}
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

    

     <div class="pcenter pgreen container p-5 mt-4">
      <!--Inicio de mensajes Administrador -->
      <h3>Mensajes sin leer&nbsp;{{mensajes.cantidad}}</h3>
      <hr>
        <div>
          <div class="cajaMensajes my-1 " v-for="(item, index) of mensajes.informacion" :key='index'>
            <div class="d-flex bd-highlight " id="animaMensaje">

              <div class="my-5">
                <h3>Nombre</h3>
                <p class = "pwhite" fs-6>{{item.nombreusuario}}</p>
              </div>
      
              <div class="my-5">
                <h3>Telefono</h3>
                <p class = "pwhite" fs-6>{{item.telefonousuario}}</p>
              </div>

              <div class="my-5 cajaInfoMensajes">
                <h3>Correo</h3>
                <p class = "pwhite fs-6">{{item.correo}}</p>
              </div>

              <ul>
                <li>
                  <button class="pbold mx-1" :class="{'blueboton': item.leido, 'greenboton' : !item.leido}" @click="leerMensaje(index)">
                    <i class = "fas" :class="{'fa-check-double': item.leido, 'fa-check' : !item.leido}"></i>
                  </button>
                </li>
                <li>
                  <button class="redboton pbold mx-1" @click="EliminarMensaje(index)">
                    <i class="fas fa-trash"></i>  
                  </button>
                </li>
              </ul>

            <div> 
          </div>   
        </div>
       </div>
      </div>
      <!--Fin de mensajes Administrador -->
   
     <!--INICIO DE LA CAJA MODAL-->
                        
                        <div id="my-modal" class="modal">
                          <div class="modal-example">
                            <div class="header-modal">
                              
                            </div>
                            <div class="modal-body">
                              <div  class="coscuro pgreen container p-5 mt-5 animate__animated animate__fadeInLeft">
                              <span @click="cierraModal" class="close">X</span>
                                <h3 class="pcenter">Mensaje</h3>
                                <hr style="height: 4px;border-radius: 100px">
                                 <nav class="navbar navbar-expand-lg">
                                    <div class="p-2 flex-fill bd-highlight pwhite fs-4" style="width: 35%">
                                      <p id="Mensaje"></p>
                                    </div>
                                  </nav>
                                    <div class="navbar-collapse" id="navbarNavM">
                                      <ul class="navbar-nav">
                                        <li class="nav-item mx-1">
                                          <div class="input-group pt-1 ">
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </nav>
                                <hr style="height: 4px;border-radius: 100px">
                            </div>
                          </div>
                        </div>
                        </div>
                        <!--FINAL DE LA CAJA MODAL-->




    </div>
            `,methods: {
              //Metodos del modal
              ...Vuex.mapMutations(['cierraModal']),
              //Metodos del menu
              ...Vuex.mapMutations(['irPerfil','irHome','cierraSesion']),
              //////////////////////////////////////////////////////////////////////
              //Metodo para meter el mensaje en el modal y leerlo
              leerMensaje(index){
                var cajaModal = document.getElementById('Mensaje');
                var modal = document.getElementById('my-modal');
                var leido = store.state.mensajes.informacion[index].leido;
                if (!leido) {
                  firebase.database().ref('mensajes/'+store.state.mensajes.informacion[index].keymensaje+'/').update({
                    leido: true,
                  },(error) => {
                    if (error) {
                      console.log("Error al actualizar el estado");
                    } else {
                      store.state.mensajes.cantidad --;
                      store.state.mensajes.informacion[index].leido = true;
                      var final = store.state.mensajes.informacion[index];
                      store.state.mensajes.informacion.splice(index,1);
                      store.state.mensajes.informacion.push(final);
                    }
                  });
                }

                cajaModal.innerHTML = store.state.mensajes.informacion[index].mensaje;
                modal.style.display = 'block';
              },
              ////////////////////////////////////////////////////////////////////////////////////////////
              //Metodo para eliminar el mensaje
              EliminarMensaje(index){
                firebase.database().ref('/mensajes/'+store.state.mensajes.informacion[index].keymensaje).remove().then(function(){
                        if (!store.state.mensajes.informacion[index].leido){
                          store.state.mensajes.cantidad --;
                        }
                        store.state.mensajes.informacion.splice(index,1);
                    });
                },
              /////////////////////////////////////////////////////////////////////////////////////////////  
            },computed:{
              ...Vuex.mapState(['correo']),
              ...Vuex.mapState(['mensajes'])
            }
        }


export{Mensajes}