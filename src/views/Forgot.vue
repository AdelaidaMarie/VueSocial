<script setup lang="ts">
import Nav from '../components/Nav.vue';
import { ref } from 'vue'
import axios from 'axios'
let vacio = ref(false);
let respuesta = ref(false);
let fallo = ref(false);

const user = ref({
       email: '',
})
 async function lambda() {
  if(user.value.email.length<=0) {
    vacio.value = true
    respuesta.value = false
    fallo.value = false
  } else {
    
await axios.post('https://bootcamp-api.itexon.net/api/forgot-password', user.value)
.then(data => {
  respuesta.value = true
  fallo.value = false
  vacio.value = false
})
  .catch((err) => {
    if (err.response.status) {
      fallo.value = true
      respuesta.value = false
      vacio.value = false
  console.log(err.response.status)
  }

})
}
 }
</script>


<template>
  <Nav />
  <h3>¿Has olvidado tu contraseña?</h3>

  <form class="form-group">
  <div>
    <input type="email" v-model="user.email" class="form-controll" placeholder="Correo" required />
  </div>
  <div class="form-group">
  <button @click.prevent="lambda" class="btn btn-secondary" type="button">Solicitar contraseña</button>
</div>
</form>
<br>
<div class="form-group">
<p v-if="vacio">Está vacío</p>
<p v-if="respuesta">Se ha enviado un email a tu correo</p>
<p v-if="fallo">Correo no válido</p>
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
h3 {
  font-family: monospace;
  color:rgb(0, 0, 0);
  text-align: center;
  margin: 0.5em;

}
button {
  font-family: Cambria;
  font-size: 30px;
}

</style>