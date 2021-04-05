import {store} from "./../store.js";
////////////////////////////////////////////////////////////////////////////////////
function subirVideo(){
    //Iniciamos el usuario
    var user = firebase.auth().currentUser;
    //Creamos una KEY
    var newkey = firebase.database().ref().child('videos').push().key;
    //Datos del video
    var nombre = document.getElementById("NombreVID").value;
    var clase = document.getElementById("ClaseVID").value;
    var subclase = document.getElementById("SubclaseVID").value;
    var imagen = document.getElementById('mi-imagen').files[0];
    var enlace = document.getElementById('EnlaceVID').value;
    //Cajas de los respectivos datos
    var cajaNombre = document.getElementById('NombreVID');
    var cajaClase = document.getElementById('ClaseVID');
    var cajaSubClase = document.getElementById('SubclaseVID');
    var cajaImagen = document.getElementById('mi-archivos');
    var cajaEnlace = document.getElementById('EnlaceVID');


    //Estilos predeterminados
    cajaNombre.style = "border-color: white";
    cajaClase.style = "border-color: white";
    cajaSubClase.style = "border-color: white";
    cajaImagen.style = "border: solid 1px transparent";
    cajaEnlace.style = "border-color: white";


    //Comprobamos los campos
    if(nombre  && clase != "Clase" && subclase != "SubClase"  && enlace  && imagen){
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
                firebase.database().ref('videos/'+user.uid+'/'+newkey+'/').set({
                    nombrevideo: nombre,
                    clasevideo: clase,
                    subclasevideo: subclase,
                    imagenvideo: downloadURL,
                    enlacevideo: enlace,
                    keyvideo:newkey

                },(error) => {
                        if (error) {
                            //En caso de no subir los datos
                            console.log(error)
                        }else{
                            cajaNombre.style = "border-color: green";
                            cajaClase.style = "border-color: green";
                            cajaSubClase.style = "border-color: green";
                            cajaImagen.style = "border: solid 1px green";
                            cajaEnlace.style = "border-color: green";
                        }
                    });

            });
        });

    }else{//Error en caso de no existir
        if (!nombre) {
            cajaNombre.style = "border-color:red"
        }
        if (clase == "Clase") {
            cajaClase.style = "border-color:red"
        }
        if (subclase == "SubClase"){
            cajaSubClase.style = "border-color: red";
        }

        if (!imagen){
            cajaImagen.style = "border: solid 1px red";
        }

        if (!enlace) {
            cajaEnlace.style = "border-color: red";
        }
    }    
  
}



function cargarVideos(){
    //Cargamos el usuario
    var user = firebase.auth().currentUser;
    //Cargamos los videos del usuario
    firebase.database().ref('/videos/'+ user.uid).once('value').then(function(snapshot){
        //Reiniciamos el array de videos
        store.state.videos = [];
        //Almacenamos la informacion
        var videos = snapshot.val();
        //Almacenamos la informacion de todos los videos por su key
        for(let key in videos){
            firebase.database().ref('/videos/'+user.uid+'/'+key).once('value').then(function(snapshot){
                //Filtro
                var filtro = document.getElementById("Filtro").value;
                //Almacenamos la informacion del video
                var infovideos = snapshot.val();
                //Analizamos el almacenamiento por filtro
                if (filtro=="Clase") {
                    store.state.videos.push(infovideos); 
                }else if (filtro == "WEB" && infovideos.clasevideo == "WEB") {
                    store.state.videos.push(infovideos); 
                }else if(filtro == "APP ESCRITORIO " && infovideos.clasevideo == "APP ESCRITORIO " ){
                    store.state.videos.push(infovideos);
                }else if(filtro == "TELEFONO" && infovideos.clasevideo == "TELEFONO"){
                    store.state.videos.push(infovideos);
                }

            });
        }
        
    });
}


export {subirVideo,cargarVideos}

   
    
    