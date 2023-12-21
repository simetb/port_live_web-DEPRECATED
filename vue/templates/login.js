//TEMPLATE DEL LOGIN
const Login = { template:`
        <!--Inicio del header-->
        <div>
            <header>
            <nav class="header-noUser navbar container">
              <div class="container-fluid">
                <div class="titulo d-flex flex-row bd-highlight ">
                    <div class="p-2 bd-highlight">
                        <img src="img/logoVue.png" alt="" width="100" height="84">
                    </div>
                    <div class="titulo mt-4 bd-highlight">
                        <h2>
                            <span class="pwhite">Port</span>LIVE
                        </h2>
                    </div>     
                </div>
                <h1 class="pagina navbar-brand">Vue Js/Login</h1>
              </div>
            </nav>
            </header>

            <!--Final del header-->


            <!--Comienzo de formulario-->

            <div class="pcenter pgreen container mb-5">
                <h1 class="mt-5 h3">Ingreso al sistema</h1>

                <div class="formulario mt-5">
                    <i class="fas fa-user-astronaut mb-3" style="font-size: 60px"></i>
                    <br>
                    <p class="text-start">
                        Email
                    </p>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Email..." id="email" style="background-color: #202C39;color: #42b883;font-size: bold" required>
                    </div>
                    <p class="text-start">
                        Password
                    </p>
                    <div class="input-group mb-2">
                        <input type="password" class="form-control" placeholder="Password..." id="password" style="background-color: #202C39;color: #42b883;font-size: bold" required>
                    </div>
                    <div class="Error mb-1" >
                        <span id="error"></span>
                    </div>
                
                    <button  @click="inicioSesion" class="boton">Comencemos</button>
                    <button  @click="irRegistro" class="boton">No tengo cuenta</button>

                </div>
        
            </div>

            <!--Fin del formulario-->

        </div>
        `,methods: {
                ...Vuex.mapMutations(['irRegistro']),
                ...Vuex.mapMutations(['inicioSesion'])
                
            },
     }


export{Login}