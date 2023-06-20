<script setup lang="ts">
import axios from 'axios'
import { ref,onMounted, Ref } from 'vue'
import router from '../router/router'
import NavVue from '../components/Nav3.vue';

let suceso = ref(false);
    let funciona = ref(false);
    let problema = ref(false);
    let fallo = ref(false);
    let conex = ref(false);
    let vacio = ref(false);
    let checked: Ref<boolean> = ref(false);
    const user = ref({
       email: '',
       password: '',

})

onMounted(() => {
  if (localStorage.getItem('ki')){
  const ki = localStorage.getItem('ki')
  user.value.email = ki

}
})

async function login() {

  if(user.value.email.length<=0) {
console.log("Campo vacío")
problema.value = false
vacio.value = true
suceso.value = false
conex.value = false
} else if(user.value.password.length<=3 ) {
  console.log("La contraseña debe tener menos de tres caracteres")
problema.value = true
suceso.value = false
vacio.value = false
} else {
 await axios.post('https://bootcamp-api.itexon.net/api/login', user.value)
  .then(data => {
    if (data.status === 200) {
      funciona.value = true
      suceso.value = false
problema.value = false
fallo.value = false
conex.value = false
      router.push('/home')
      console.log(data)

sessionStorage.setItem("tok", data.data.data.access_token);
sessionStorage.setItem("sap", data.data.data.user.name);
    }
    if (checked.value) {
    localStorage.setItem('ki', user.value.email)
  } else {
    localStorage.removeItem('ki')
  }
  })
  .catch((err) => {
if (!err.response) {
  console.log('No hay conexión')
  conex.value = true
  problema.value = false
  suceso.value = false
  conex.value = false
  vacio.value = false
}
if (err.response.status == 202) {
problema.value = false
fallo.value = true
conex.value = false
vacio.value = false
console.log(err.response.data)
}
  if (err.response.status == 401) {
    suceso.value = true
    console.log('Credenciales no validas')
    console.log(err.response.data)
    fallo.value = false
    problema.value = false
    conex.value = false
    vacio.value = false
  }

  console.log(err.response.status)

})
}
}

</script>

<template>
<NavVue />
    <h1>Bootcamp</h1>
    <h2>Inicio de sesión</h2>
  <form class="form-group">
  <div>
    <input type="email" v-model="user.email" class="form-controll" placeholder="Correo" required />
  </div>
  <div>
    <input type="password" v-model="user.password" minlength="4" class="form-controll" placeholder="Contraseña"/>
  </div>
      <div class="form-group">
        <input class="check" type="checkbox" v-model="checked"/>
        <label class="checkel" > Recordar </label>
    </div>
    <br>
  <div class="form-group">
  <button class="btn btn-secondary" @click.prevent="login" type="button">Iniciar sesión</button>
</div>
</form>
<br>
<div class="form-group">
      <router-link to="/forgot">Contraseña olvidada</router-link>
    </div>
<br>
<div class="form-group">
<p v-if="suceso">Credenciales no válidas</p>
<p v-if="problema">La contraseña debe tener más de tres caracteres</p>
<p v-if="fallo">Correo no válido</p>
<p v-if="conex">Sin conexión</p>
<p v-if="vacio">Correo vacío</p>
</div>

</template>
<style scoped>
.form-group {
  font-family: Cambria;
    font-size: 20px;
    width: 100%;
    border-radius: 10px;
    color:rgb(0, 0, 0);
text-align: center;
}
.form-controll {
  background-color: #3a2832;
  border-radius: 10px;
  color:aliceblue;
  font-size: 20px;
  font-family: Cambria;
  padding: 5px;
  margin-bottom: 1rem;
}

h1 {
  font-family: Cambria;
  font-size: 3.2em;
  line-height: 1.1;
  color:rgb(88, 87, 87);
  text-align: center;
}
h2 {
  font-family: monospace;
  line-height: 1.1;
  color:rgb(0, 0, 0);
  text-align: center;
}
button {
  font-family: Cambria;
  font-size: 20px;

}
.checkel {
  font-family: Cambria;
  line-height: 1.1;
  color:rgba(0, 0, 0, 0.973);
  margin: 5px;
}
placeholder {
  color: white;
}
</style>