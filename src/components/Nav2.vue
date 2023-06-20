

<template>
 
    <nav class="navbar d-flex p-2">
      <div class="navbar-brand mt-0 mt-lg-0">
      <a>Bootcamp</a>
    </div>
    <div class="mt-2 mt-lg-1">
    <button @click="$router.push({name: 'Posts'})" class="btn btn-primary">Posts</button>


</div>
<div class="F">
<input class="topnave" type="searchbar" v-model="search" @input="searching(search)" placeholder="Buscar.." debounce="500">
</div>      
<div class="profile-pic">

      <p class="-label">
      </p>
      <div class="justify-content-space-between mt-2">
<svg @click="show = !show" to="/form" xmlns="http://www.w3.org/2000/svg" class="pt" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
</div>
      <input accept=".png, .jpg, .jpeg" class="input" @click="isAang=true" />     
      <img class="img -label navbar-nav me-auto mb-2 mb-lg-0"
  id='output'
  width="200"
  @click="[ isAang=true, loading(), show=false]"
       />
</div>

<modal v-if="isOpen"
 title="Formul">
      <button @click="isOpen=false" class="botito">X</button>
      <p>{{ sap }}</p>

      <div class="col-md-6 offset-md-3">
                    <span class="anchor" id="formChangePassword"></span>
                    <hr class="mb-5">

    
                    <div class="">
                        <div>
                            <h3>Cambiar contraseña</h3>
                        </div>
                        <div class="card-body">
                            <form class="form" role="form" autocomplete="off">
                                <div class="form-group">
                                    <label for="inputPasswordOld">Contraseña actual</label>
                                    <input v-model="pass.old_password" type="password" class="form-control" id="inputPasswordOld">
                                </div>
                                <div class="form-group">
                                    <label for="inputPasswordNew">Nueva contraseña</label>
                                    <input v-model="pass.password" type="password" class="form-control" id="inputPasswordNew">
                                    <span class="form-text small text-muted">
                                            Debe ser una contraseña de más de cuatro caracteres <em>y</em> no tener espacios.
                                        </span>
                                </div>
                                <div class="form-group">
                                    <button @click.prevent="Chan" type="submit" class="btn btn-success">Guardar</button>
                                </div>
                                <br>
                                <div class="form-group">
                                <p v-if="problem">Error</p>
                                <p v-if="suce">Correcto</p>
                                </div>
                            </form>
                        </div>
                    </div>
         

                </div>
</modal>
<modal class="d-flex" v-if="isAang"
 title="Forme">

 <div class="card mb-4 mb-xl-0">
  <div class="card-header">
    <button @click="isAang=false" class="botito">X</button>
    Cambiar foto de perfil
  </div>
  <div class="card-body text-center">
    <label class="-labeli">
      <input v-on:change="loade" class="input" accept=".png, .jpg, .jpeg" id="file" type="file" />
   
                    <img id='atput' width="350" class="img-account-profile rounded-circle">
                  </label>
                </div>
                <button v-on:click="loadF" class="btn btn-primary">Guardar</button>
                </div>
</modal>
    </nav>

    <router-view />
    <div class="sidebar" v-show="show">
<a @click="[ isAang=true, loading(), show=false]">Cambiar avatar</a>
<a @click="[isOpen=true, show=false]">Cambiar contraseña</a>
<hr>
<a @click="isClon">Desconectar</a>
</div>
  </template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'
import router from '../router/router'
import Modal from '../components/Modal2.vue'
import {emitter} from '../helper/emision'

const search = ref("")


async function searching(item: string) {
if (!item) {
  emitter.emit('Array-search', null)
emitter.emit('Array', null)

console.log(item)
} else {
await axios.get(`https://bootcamp-api.itexon.net/api/search?query=${item}`, forg)
  .then(data => {
console.log(data.data.data)
emitter.emit('Array-search', data.data.data.posts)
emitter.emit('Array', data.data.data.events)
const mot = emitter
console.log(mot)

}) 
.catch(error => {
  emitter.emit('Array-search', null)
emitter.emit('Array', null)
  })

  
}
}
const user = ref({
       email: '',
       password: '',

})
//<button @click="$router.push({name: 'Events'})" class="btn btn-primary">Eventos</button>
async function isClon() {
await axios.post('https://bootcamp-api.itexon.net/api/logout', user, forg)
  .then(data => {
    console.log(data.data)
    sessionStorage.removeItem('tok')
    sessionStorage.removeItem('sap')
    router.push('/')
  })
}
  let show = ref(false)
  let problem = ref(false)
  let suce = ref(false)
  let isAang = ref(false)
  let isOpen = ref(false)

const pass = ref({
  old_password: '',
  password: ''
})

async function Chan() {
await axios.post('https://bootcamp-api.itexon.net/api/update-password', pass.value, forg)
.then(data => {
  console.log(data.data)
problem.value = false
suce.value = true
if (data.status = 200) {
isOpen.value = false
axios.post('https://bootcamp-api.itexon.net/api/logout', user, forg)
router.push('/')
}
})
.catch((error) => {
console.log(error.message)
problem.value=true
suce.value = false
})
}

let forg = {
  headers: {
  Authorization: `Bearer ${sessionStorage.getItem('tok')}`
  }
}
onMounted(() => {
  loading()
})

async function loading() {
  
 await axios.get('https://bootcamp-api.itexon.net/api/me', forg)

.then(data => {
  (console.log(data.data.data.user.name)),
  (console.log(data.data)),
  (console.log(data.data.data.user.profile.avatar)),
  (document.getElementById('output') as HTMLImageElement).src = data.data.data.user.profile.avatar;  
  (document.getElementById('atput') as HTMLImageElement).src = data.data.data.user.profile.avatar;  

})
.catch(error =>{
  console.log(error)



})
}
const file = ref()


const sap = sessionStorage.getItem('sap')
function loade (e) {
  const imag = document.getElementById("atput")
  console.log(imag)
  imag.src = URL.createObjectURL(e.target.files[0])
  file.value = e.target.files[0]
  console.log(file.value);
}
async function loadF() {

  const formData = new FormData();
  formData.append('avatar', file.value)
 await axios.post('https://bootcamp-api.itexon.net/api/me/profile/update', formData, forg)
  .then(data => {
console.log(data.status)
if (data.status == 200) {
  (document.getElementById('output') as HTMLImageElement).src = data.data.data.avatar;
console.log(data)
isAang.value = false
location.reload()
}  
})
  .catch(error => {
    console.log(error)
    if (error.response.status == 422) {
    alert('La foto es demasiado grande')
    }
    console.log(error)
    
  })

};


</script>

<style scoped>
.pa {
position: relative;
display: flex;
margin-inline: 20px;
cursor: pointer;
width: 100%;
}
.imga {
   position: absolute;
    object-fit: cover;
    height: 150px;



  }
.sidebar {
height: 150px;
width: 150px;
position: absolute;
bottom: 75%;
left: 90%;
background-color: rgb(255, 255, 255);
font-size: 14px;
display: block;
}
.img-account-profile {
    height: 350px;
    width: 350px;
}
.rounded-circle {
    border-radius: 50% !important;
}
.card {
    box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
}
.card .card-header {
    font-weight: 500;
}
.card-header:first-child {
    border-radius: 0.35rem 0.35rem 0 0;
}
.card-header {
    padding: 1rem 1.35rem;
    margin-bottom: 0;
    background-color: rgba(33, 40, 50, 0.03);
    border-bottom: 1px solid rgba(33, 40, 50, 0.125);
}
.sidebar a {
padding: 8px;
display: block;
cursor: pointer;
}
.sidebar hr {
display: block;

}
.body-text {
margin-left: 150px;
font-size: 18px;
}
.ba {
  background-color: white;
  font-family: monospace;
  border-radius: 100px;
  white-space: nowrap;
  margin: 15px;
  justify-content: right;
  align-items: right;
  text-align: left;
  position: relative;
}
.botito {
  background-color: transparent;
}
.F {
  font-family: Cambria;
position: inherit;
display: inline;
left: 19%;
max-width: auto;
margin-right: 2em;
margin-left: 2em;
}
.topnave {

  border-radius: 10px;
  align-items: right;
}


.form-group {
  font-family: Cambria;
    font-size: 20px;
    width: 100%;
    border-radius: 10px;
    color:rgb(0, 0, 0);
text-align: center;

}
.form-control {
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
  color:rgba(0, 0, 0, 0.973);
}
h2 {
  font-family: Cambria;
  line-height: 1.1;
  color:rgba(0, 0, 0, 0.664);
}
button {
  font-family: Cambria;
  width: 6em;
  height: 40px;
  margin-inline: 5px;
  background-color: rgba(126, 126, 255, 0.598);
}

button a.active {
  background-color: #ffffff;
}
.check {
  font-family: Cambria;
  line-height: 1.1;
  color:rgba(247, 247, 247, 0.973);
}
nav{
  background-color: rgba(126, 126, 255, 0.598);
  margin: 0 auto;

  font-family: Cambria;

}
nav a {
  font-weight: bold;
  color: #000000a4;
}
.pp {
  font-weight: bold;
  color: #000000;
  cursor: pointer;
  font-family: 'Edu NSW ACT Foundation', monospace;
  font-size: 19px;
  text-align: right;
}
.pt{

  cursor: pointer;

}
.profile-pic {
margin-right: 2em;
margin-left: 2em;
  display: flex;

 position: static;

 
}

.input{
  display: none;
}
.img {
  position: absolute;
    object-fit: cover;
    width: 45px;
    height: 45px;
    box-shadow: 0 0 10px 0 rgba(255,255,255,.35);
    border-radius: 100px;
    z-index: 0;
  }
    .-label {
      display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
      transition: background-color .2s ease-in-out;
      border-radius: 100px;
      margin-bottom: 0;
      cursor: pointer;
    height: 45px;
    width: 45px;
    }
    .-labeli {
      justify-content: center;
  align-items: center;
      display: flex;
      cursor: pointer;
    height: 300px auto;
    width: 300px auto;
    z-index: 10000;
    margin-bottom: 0;
    border-radius: 100px;
    }

</style>