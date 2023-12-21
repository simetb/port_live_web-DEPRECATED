import {store} from './../store.js'
/////////////////////////////////////////////////////////////////////////////////////
const Videos = {template:`
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
                            
                            <h1 class="paginau navbar-brand mr-0" >Vue Js/Videos/{{correo}}</h1>
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

                    <!-- INICIO FORMULARIO SUBIR VIDEO -->
     
    <div class="container p-5 mt-3 pgreen pcenter">
      <h3>Subir Video</h3>
      <hr style="height: 4px;border-radius: 100px">

       <nav class="bg-gris-claro navbar navbar-expand-lg">
        <div class="container-fluid">
          <div class="input-group mx-1" id="Nombre-video">    
              <input type="text" class="inputs" placeholder="Nombre VID" id="NombreVID" >
          </div>
          <div class="navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item pt-1 mx-1">
                <select class="input-selector" id="ClaseVID" >
                  <option selected>Clase</option>
                  <option value="WEB">Web</option>
                  <option value="APP ESCRITORIO ">Aplicacion Escritorio</option>
                  <option value="TELEFONO">Telefono</option>
                </select>
              </li>
              <li class="nav-item pt-1 mx-1 subClase">
                 <select class="input-selector" id="SubclaseVID" >
                  <option selected>SubClase</option>
                  <option value="VUE">Vue</option>
                  <option value="JAVA">Java</option>
                  <option value="PYTHON">Python</option>
                </select>
              </li>

              <li class="nav-item">
                <span class="mi-archivo">
                  <input type="file" name="mi-archivo" id="mi-imagen">
                </span>
                <label for="mi-imagen" id="mi-archivos" class="mx-1 p-1 mt-1">
                  <span id="mi-archivospan" class="px-3 pbold">
                    <i class="far fa-images h4" ></i>&nbsp;&nbsp;Subir</span>
                </label>
              </li>

              <li class="nav-item mx-1 mt-1" id="Contiene-enlacevideo">                            
                <input type="text" class="inputs" placeholder="Enlace Compartido" id="EnlaceVID">
              </li>

              <li class="nav-item mx-1">
                <div class="input-group pt-1 " id="Contiene-btnvideo">
                  <button class="greenboton" @click="subirVideo" id="botonvideo">
                    <i class="fas fa-arrow-alt-up"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- FIN FORMULARIO SUBIR VIDEO -->
      <hr style="height: 4px;border-radius: 100px">

      <!-- INICIO FILTRO SUBIR VIDEO -->
      <h3>Filtro:</h3>
      <select class="inputs" id="Filtro" >
                  <option selected>Clase</option>
                  <option value="WEB">Web</option>
                  <option value="APP ESCRITORIO ">Aplicacion Escritorio</option>
                  <option value="TELEFONO">Telefono</option>
      </select>

      <div class="d-flex justify-content-center mt-3">
        <button class="boton" @click="cargarVideos">Cargar Videos</button>
      </div>
    </div>
    <!-- FIN FILTRO SUBIR VIDEO -->

    <!-- INICIO RESULTADOS -->
    <div class="container p-3 mt-1 pgreen pcenter">
      <h3> Resultados</h3>
      <hr style="height: 4px;border-radius: 100px">

        <div v-for="(item, index) of videos">

          <div class="container mt-2 d-flex cajaInformacion">
            <div>
              <img v-bind:src="item.imagenvideo" class="imagenVideo">
            </div>
            <div class="mt-4 mx-3" id="contenedorNombre">
              <h3>Nombre</h3>
              <h5 class="pwhite">{{item.nombrevideo}}</h5>             
            </div>
            <div class="mt-4 mx-3" id="contenedorClase">
              <h3>Clase</h3>
              <h5 class="pwhite">{{item.clasevideo}}</h5>             
            </div>
            <div class="mt-4 mx-3" id="contenedorSubClase">
              <h3>Subclase</h3>
              <h5 class="pwhite">{{item.subclasevideo}}</h5>             
            </div>
            <div class="mt-4 mx-3" id="contenedorEnlace">
              <h3>Enlace</h3>
              <div>
                <p class="pwhite">{{item.enlacevideo}}</p> 
              </div>          
            </div>
            <div id="Botones">
              <button class="greenboton"  @click="reproducirModal(index)"><i class="fas fa-play"></i></button>

              <button class="blueboton" @click="editarVideo(index)"><i class="fas fa-cog"></i></button>            

              <button class="redboton" style="background-color:red;" @click="eliminarVideo(index)">
                <i class="fas fa-trash"></i>
              </button>
            </div>            
           
          </div>


        </div>
    </div>
   <-- FIN RESULTADOS  -->

     <div id="my-modalv" class="modal" >
      <div class="modal-example">
        <div class="header-modal">
                              
        </div>
          <div class="modal-body">
            <div  class="coscuro pgreen container p-5 mt-5 animate__animated animate__fadeInLeft"
            style="background:none">
            <!-- CERRAR MODAL -->
              <span @click="cerrarModal" class="close">X</span>
                  <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                     <!-- VIDEO AQUI -->
                     
                     <iframe width="560" height="315" v-bind:src="'https://youtube.com/embed/'+linkVideo" 
                     title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                     clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                     style="margin: auto">
                     </iframe>

                    </div>
                  </nav>
            </div>
          </div>
        </div>
  </div>
                        <!--FINAL DE LA CAJA MODAL-->

</div>`,
    methods: {
        ...Vuex.mapMutations(['irPerfil','irHome','cierraSesion']),
        ...Vuex.mapMutations(['subirVideo']),
        ...Vuex.mapMutations(['cargarVideos']),


        //Metodo para eliminar un video
        //////////////////////////////////////////////////////////////////////////////
        eliminarVideo(index){
          var user = firebase.auth().currentUser;
          firebase.database().ref('/videos/'+user.uid+"/"+store.state.videos[index].keyvideo).remove().then(function(){
            store.state.videos.splice(index,1);
                    }); 
        },
        //Reproducir Modal
        //////////////////////////////////////////////////////////////////////////////
        reproducirModal(index){
          var modal = document.getElementById('my-modalv');
          console.log()
          store.state.linkVideo = store.state.videos[index].enlacevideo
          console.log()
          modal.style.display = 'block';
        },
        //////////////////////////////////////////////////////////////////////////////
        cerrarModal(){
          var modal = document.getElementById('my-modalv');
          modal.style.display = 'none';
        },
        ///////////////////////////////////////////////////////////////////////////////
        editarVideo(index){
          var user = firebase.auth().currentUser;

           //Datos del video
          var nombreVideo = document.getElementById("NombreVID").value;
          var clase = document.getElementById("ClaseVID").value;
          var subclase = document.getElementById("SubclaseVID").value;
          var imagen = document.getElementById('mi-imagen').files[0];
          var enlace = document.getElementById('EnlaceVID').value;

          if (nombreVideo) {
            firebase.database().ref('/videos/'+user.uid+'/'+store.state.videos[index].keyvideo).update({
              nombrevideo: nombreVideo
            });
            store.state.videos[index].nombrevideo = nombreVideo;
          }

          if(clase != "Clase"){
            firebase.database().ref('/videos/'+user.uid+'/'+store.state.videos[index].keyvideo).update({
              clasevideo: clase
            });
            store.state.videos[index].clasevideo = clase;
          }

          if(subclase != "SubClase"){
            firebase.database().ref('/videos/'+user.uid+'/'+store.state.videos[index].keyvideo).update({
              subclasevideo: subclase
            });
            store.state.videos[index].subclasevideo = subclase;
          }

          if (enlace) {
            firebase.database().ref('/videos/'+user.uid+'/'+store.state.videos[index].keyvideo).update({
              enlacevideo: enlace
            });
            store.state.videos[index].enlacevideo = enlace;
          }

          if (imagen) {
             var newkey = firebase.database().ref().child('videos').push().key;
            //Creamos la referencia
            var storageRef = firebase.storage().ref('/fotovideos/'+ user.uid + '/' + newkey + imagen.name );
            //Subimos la imagen
            var uploadTask = storageRef.put(imagen);
            uploadTask.on('state_changed', function(snapshot){
              },function(error){
              //En caso de error al subir la imagen
              console.log(error)
                },function(){
                //Subirmos los datos
                    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                      firebase.database().ref('videos/'+user.uid+'/'+store.state.videos[index].keyvideo+'/').update({
       
                        imagenvideo: downloadURL,

                          },(error) => {
                            if (error) {
                                //En caso de no subir los datos
                                console.log(error)
                            }else{
                              store.state.videos[index].imagenvideo = downloadURL;
                            }
                      });
                    });
                  });
          }
//////////////////////////////////////////////////////////////////////////////////////

        }

            },computed:{
              ...Vuex.mapState(['correo']),
              ...Vuex.mapState(['videos']),
              ...Vuex.mapState(['linkVideo'])
          }

}


export {Videos}