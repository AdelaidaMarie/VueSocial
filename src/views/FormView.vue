<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import router from '../router/router'
import NavVue from '../components/Nav.vue';

    let suceso = ref(false);
    let funciona = ref(false);
    let problema = ref(false);
    let fallo = ref(false);
    let vacio = ref(false);
    let sao = ref(false);
    let num = ref(false);
const letter=/^[A-Za-z ']+$/
const user = ref({
       name: '',
       email: '',
       password: '',
})
function Storagen() {
  if(user.value.email.length<=0) {
vacio.value = true
problema.value = false
suceso.value = false
sao.value = false
num.value = false
funciona.value = false
  } else if(user.value.name.length<=0) {
sao.value = true 
problema.value = false
suceso.value = false
num.value = false
funciona.value = false
vacio.value = false
} else if(user.value.password.length<=3 ) {
console.log("La contraseña debe tener menos de tres caracteres")
problema.value = true
suceso.value = false
vacio.value = false
sao.value = false
num.value = false
funciona.value = false
}
else if(!user.value.name.match(letter) ) {
num.value = true
funciona.value = false
      suceso.value = false
problema.value = false
fallo.value = false
vacio.value = false
sao.value = false

} else {
  axios.post('https://bootcamp-api.itexon.net/api/register', user.value)
  .then(data => {
    if (data.status === 200) {
      funciona.value = true
      suceso.value = false
problema.value = false
fallo.value = false
vacio.value = false
sao.value = false
num.value = false

    }
    router.push('/')
    console.log(data.status)
  })
  

 .catch((err) => {

if (err.response.status == 202) {
problema.value = false
vacio.value = false
suceso.value = true
sao.value = false
num.value = false
funciona.value = false
console.log(err.response.data)
}
  if (err.response.status == 422) {
    suceso.value = true
    console.log('Credenciales no válidas')
    console.log(err.response.data)
    fallo.value = false
    problema.value = false
    vacio.value = false
    sao.value = false
    num.value = false
    funciona.value = false
  }
  if (err.response.status) {
    suceso.value = true
    console.log('Credenciales no válidas')
    console.log(err.response.data)
    fallo.value = false
    problema.value = false
    vacio.value = false
    sao.value = false
    num.value = false
    funciona.value = false
  console.log(err.response.status)
  }

})
}
};


</script>
<template class="body">

<NavVue />
  <h1>Bootcamp</h1>
    <h2>Registro</h2>
    <form class="form-group">
      <div>
<input pattern="[a-zA-Z]+" title="Three letter country code" v-model="user.name" type="text" class="form-controll" placeholder="Nombre completo">
</div>
  <div>
    <input v-model="user.email" required type="email" class="form-controll" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo" pattern="[^@\s]+@[^@\s]+">
  </div>
  <div>
    <input required v-model="user.password" type="password" class="form-controll" placeholder="Contraseña">
  </div>
  <div>
  </div>
  <button @click.prevent="Storagen" type="submit" class="btn btn-secondary">Registrarte</button>

</form>
<br>
<div class="form-group">
<p v-if="funciona">Cuenta creada</p>
<p v-if="suceso">Credenciales no válidas</p>
<p v-if="problema">La contraseña debe tener más de tres caracteres</p>
<p v-if="vacio">El email está vacío</p>
<p v-if="sao">El nombre está vacío</p>
<p v-if="num">Sólo puede contener letras y espacio el nombre</p>
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
</style>