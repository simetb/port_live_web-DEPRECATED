import {store} from './../store.js';
/////////////////////////////////////////////////////
function actualizarInfo(){
	//Usuario de firebase
	var user = firebase.auth().currentUser;
	//Variables de uso
	var instagram = document.getElementById('uinstagram').value;
	var facebook = document.getElementById('ufacebook').value;
	var twitter = document.getElementById('utwitter').value;
	var telefono = document.getElementById('utelefono').value;
	var descripcion = document.getElementById('udescripccion').value;
	//Error y Correcto
	var error = document.getElementById('error');
	var bien = document.getElementById('bien');

	if (instagram) {
		firebase.database().ref('users/'+user.uid).set({
		UserInstagram: instagram,
		UserFacebook: store.state.social.facebook,
		UserTwitter: store.state.social.twitter,
		UserTelefono: store.state.telefono,
		UserDescripcion: store.state.descripcion
		}
		,(error) => {
			if (error) {
				error.innerHTML = "Error al actualizar los datos"
				
			}else {
				bien.innerHTML = "Datos Actualizados"
				store.state.social.instagram = instagram
			}
			});
	}

	if (facebook) {
		firebase.database().ref('users/'+user.uid).set({
		UserInstagram: store.state.social.instagram,
		UserFacebook: facebook,
		UserTwitter: store.state.social.twitter,
		UserTelefono: store.state.telefono,
		UserDescripcion: store.state.descripcion
		}
		,(error) => {
			if (error) {
				error.innerHTML = "Error al actualizar los datos"
				
			}else {
				bien.innerHTML = "Datos Actualizados"
				store.state.social.facebook = facebook
			}
			});
	}

	if (twitter) {
		firebase.database().ref('users/'+user.uid).set({
		UserInstagram: store.state.social.instagram,
		UserFacebook: store.state.social.facebook,
		UserTwitter: twitter,
		UserTelefono: store.state.telefono,
		UserDescripcion: store.state.descripcion
		}
		,(error) => {
			if (error) {
				error.innerHTML = "Error al actualizar los datos"
			}else {
				bien.innerHTML = "Datos Actualizados"
				store.state.social.twitter = twitter
			}
			});
	}

	if (telefono) {
		firebase.database().ref('users/'+user.uid).set({
		UserInstagram: store.state.social.instagram,
		UserFacebook: store.state.social.facebook,
		UserTwitter: store.state.social.twitter,
		UserTelefono: telefono,
		UserDescripcion: store.state.descripcion
		}
		,(error) => {
			if (error) {
				error.innerHTML = "Error al actualizar los datos"
			}else {
				bien.innerHTML = "Datos Actualizados"
				store.state.telefono = telefono
			}
			});
	}

	if (descripcion) {
		firebase.database().ref('users/'+user.uid).set({
		UserInstagram: store.state.social.instagram,
		UserFacebook: store.state.social.facebook,
		UserTwitter: store.state.social.twitter,
		UserTelefono: store.state.telefono,
		UserDescripcion: descripcion
		}
		,(error) => {
			if (error) {
				error.innerHTML = "Error al actualizar los datos"
			}else {
				bien.innerHTML = "Datos Actualizados"
				store.state.descripcion = descripcion
			}
			});
	}

}

export{actualizarInfo}