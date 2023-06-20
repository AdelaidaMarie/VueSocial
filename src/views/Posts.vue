
<script setup lang="ts">
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import {emitter} from '../helper/emision'
import router from "../router/router";
import Modal from '../components/Modal.vue';
import moment from "moment";
const stand = ref()
const tempo = ref(moment().unix())
const file = ref()
let Error = ref(false)
const usip = ref("")
let forg = {
  headers: {
  Authorization: `Bearer ${sessionStorage.getItem('tok')}`
  }
}

function like(id) {
  let forg = {
  headers: {
  Authorization: `Bearer ${sessionStorage.getItem('tok')}`
  }
}
console.log(sessionStorage.getItem('tok'));

  axios.post(`https://bootcamp-api.itexon.net/api/posts/like/${id}`,null, {
  headers: {
  Authorization: `Bearer ${sessionStorage.getItem('tok')}`
  }
})
  .then(data => {
    console.log(data)
    location.reload()
  })
}

onMounted(() => {
loade()
Posteo()

emitter.on('Array-search', 
(data) => {
  console.log('hola emision', data);
  
  items.value = data
  if (items.value == 0) {
    Korra.value = true
    console.log(data)
   
   } else if (!data) {
    console.log(data)
location.reload()
Korra.value=false
   }
   else {
    Korra.value = false
   }
})

})
async function loade() {
  
  await axios.get('https://bootcamp-api.itexon.net/api/me', forg)
 
 .then(data => {
   console.log(data.data.data.user)
   const usap = data.data.data.user
   console.log(usap.id)
   usip.value = usap.id
   console.log(usip.value)
 })
 .catch(err => {
  console.log(err.message)
  router.push('/')
 })
}

let Korra = ref(false)
let Soka = ref(false)
let Moka = ref(false)
let Borrar = ref(false)
async function Posteo() {

await axios.get('https://bootcamp-api.itexon.net/api/posts', forg)

 .then(data => {

console.log("Array",data)

   items.value = data.data.data
   console.log(items.value)
   
 })

 }
 
const items = ref([

])
const itoms = ref([
])
function detals(id) {
  Moka.value = true
  axios.get(`https://bootcamp-api.itexon.net/api/posts/${id}`, forg)
  .then(data => {
    console.log(data.data.data.id)
itoms.value = data.data.data
console.log(itoms.value)
  })
  .catch(err => {
    console.log(err)
    Soka.value = false
  })
}
function detal(id) {
  Soka.value = true
  axios.get(`https://bootcamp-api.itexon.net/api/posts/${id}`, forg)
  .then(data => {
    console.log(data.data.data.id)
itoms.value = data.data.data
console.log(itoms.value)
  })
  .catch(err => {
    console.log(err)
    Soka.value = false
  })
}
function detol(id) {
  Borrar.value = true
  axios.get(`https://bootcamp-api.itexon.net/api/posts/${id}`, forg)
  .then(data => {
    console.log(data.data.data.id)
itoms.value = data.data.data
console.log(itoms.value)
  })
  .catch(err => {
    console.log(err)
    Soka.value = false
  })
}
function borreo(id) {
  axios.delete(`https://bootcamp-api.itexon.net/api/posts/${id}`, forg)
  .then(data => {
    console.log(data)
    location.reload()
  })
  .catch(err => {
    console.log(err)
  })
}


function loads (e) {
  const imago = document.getElementById("changion")
  console.log(imago)
  imago.src = URL.createObjectURL(e.target.files[0])
  file.value = e.target.files[0]
  console.log(file.value);

  stand.value = imago.src
  console.log(stand.value)
  window.localStorage.setItem('img', imago)
  console.log(pasta.value)
}
const pasta = ref({
       title: '',
       content: '',
       main_picture: file.value,
       publish_date: tempo,
       _method: 'put'
})
function subi(id) {
  if (itoms.value.title == 0 || itoms.value.content == 0) {
Error.value=true
  }  else {
  Error.value=false  
  
const _method = ref('put')

console.log(itoms.value)
const tormData = new FormData();
  tormData.append('title', itoms.value.title);
  tormData.append('content', itoms.value.content);
  tormData.append('main_picture', file.value);
  console.log(itoms.value.main_picture);
  tormData.append('publish_date', itoms.value.publish_date);
  tormData.append('_method', _method.value);
  console.log(itoms.value)
axios.post(`https://bootcamp-api.itexon.net/api/posts/${id}`, tormData, forg)
.then(data => {
  console.log(data)
  if (data.status = 200) {
    location.reload()
  }
})
.catch(err => {
  console.log(err)
})
}
}
</script>
<template>
<modal v-if="Borrar">
  <div>
    <p>Vas a borrar tu publicación permanentemente y no se podrá recuperar</p>
    <p>¿Estás seguro de eso?</p>
    <button class="kant btn btn-danger"
      v-on:click="borreo(itoms.id)">Borrar publicación</button>
  <button @click="Borrar=false" class="kant btn btn-primary">Cancelar</button>

  </div>
</modal>
<div class="bit">
  <button @click="$router.push({name: 'Crear'})" style="width: 65px; height: 55px; float: right;" class="btn btn-primary rounded-circle">
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="45" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
  </button>
</div>
    <div class="container posts-content" v-for="item in items" :key="item.id">

      <div class="row">
        <div class="col-lg-12">
          <div class="card cant">
            <div class="card-header containe">
              <div class="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0">
              <img v-if="item.user.profile" style="width: 60px; height: 60px; border-radius: 100%;" :src=item.user.profile.avatar class="imog">
              <p class="user">{{ item.user.name }}</p> 
            </div>   
              <p class="titulo" v-on:click="detals(item.id)">{{ item.title }}</p>
            </div>
              <div class="card-body">
                <div class="media mb-3">
<img v-on:click="detals(item.id)" :src=item.main_picture style="width: 100%" class="img-thumbnail d-block mx-auto" alt="Responsive image">
<p class="contenido">{{ item.content }}</p>
    </div>
    <div class="card-footer containe">
     {{ item.likes }} <svg v-on:click="like(item.id)" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
  
</svg> {{ item.shares }} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
</svg> {{ item.comments.length}} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
</svg>
      </div>

      <div>
      <button class="kant btn btn-primary" v-if="item.user.id == usip" v-on:click="detal(item.id)">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
  <path fill-rule="evenodd" 
  d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
</svg> Editar </button>
<button class="kant btn btn-danger" v-if="item.user.id == usip"  v-on:click="detol(item.id)">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-octagon-fill" viewBox="0 0 16 16">
  <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
</svg> Borrar </button>
      </div>
</div>
</div>
</div>
</div>

</div>

<div class="dom container h-100 justify-content-center align-items-center" v-if="Korra">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-emoji-dizzy" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M9.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zm-5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zM10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
</svg>
<h1 class="titulo">No hay publicaciones</h1>
</div>
<modal v-if="Soka">
  <div class="container posts-content" :key="itoms.id">

<div class="row">
  <div class="col-lg-12">
    <div class="card cant">
      <div class="card-header containe">
        <div class="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0">
          <img v-if="itoms.user.profile" 
          style="width: 60px; height: 60px; border-radius: 100%;" 
          :src="itoms.user.profile.avatar" class="imog">  
          <p class="user">{{ itoms.user.name }}</p>
          </div>
<input class="titulo" type="text" v-model="itoms.title" />
</div>
<label class="-label">
<input :onchange="loads" accept=".png, .jpg, .jpeg"  class="input" id="file" type="file" />
<p>Recuerda cambiar la imagen antes de actualizar</p>
<img id="changion" class="img img-thumbnail d-block mx-auto" :src="itoms.main_picture">
</label>
<div class="card-body">
                <div class="media mb-3">
<textarea class="contentew" style="width: 1000px; height: 200px" type="text" v-model="itoms.content">
                </textarea>
</div>
<div>
  <p v-if="Error">Uno o dos campos están vacíos</p>
  
<button v-on:click="subi(itoms.id)" class="btn kant btn-primary">Actualizar</button>


<button @click="Soka=false" class="btn kant btn-secondary">Cancelar</button>


</div>
</div>
</div>
</div>
</div>
</div>

</modal>
<modal v-if="Moka">
  <div class="container posts-content overflow-auto" :key="itoms.id">

<div class="row">
  <div class="col-lg-12">
    <div class="card cant">
      <div class="card-header containe">
        <div class="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0">
          <img v-if="itoms.user.profile" 
          style="width: 60px; height: 60px; border-radius: 100%;" 
          :src=itoms.user.profile.avatar class="imog">  
          <p class="user">{{ itoms.user.name }}</p>
          </div>
<p class="titulo" type="text">{{ itoms.title }}</p>
</div>
<img id="changion" class="ramen img-thumbnail d-block mx-auto" :src="itoms.main_picture">
<div class="card-body">
                <div class="media mb-3">
<p class="contenido" type="text">{{ itoms.content }}</p>
</div>
<div class="card-footer containe">
      {{ itoms.likes }} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg> {{ itoms.shares }} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
</svg> {{ itoms.comments.length}} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
</svg>
      </div>
<div>
<button @click="Moka=false" class="btn btn-primary">Cerrar</button>
</div>
</div>
</div>
</div>
</div>
</div>

</modal>

</template>
<style scoped>

.ramen {
  width: auto;
  height: 500px;
}
.dom {
font-family: monospace;

  width: 20%;
  padding: 30px;

}
.bit {
  margin-left: 30px;
  justify-content: right;
  align-items: right;
  padding: 34.5px;

  position: fixed;
  width: 100%;
  height: 1px;
  bottom: 4%;
  z-index: 100;
}
.kant {
  margin: 10px;
  height: 40px;
  width: 180px;
}
.cant {
  background-color: rgba(0, 255, 247, 0.605);
  border-radius: 5%;
}
.containe {
    margin: 20px;
  justify-content: right;
        align-items: right;
        background-color: white;
}

.user {
  font-size: 20px;
  font-family: Cambria;

  display: flex;
  margin: 10px;
}
.cont {
  margin: 20px;


}
.posts-content{
    margin-top:20px;
    position: static;
}
.titulo{
  font-size: 30px;
  font-family: 'Cambria';
}
.contenido {
  font-size: 20px;
  font-family: Cambria;
  margin-top: 20px;
  margin-bottom: 20px;
}
.contentew {
  font-size: 20px;
  font-family: 'Cambria';
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 600px;
}
.ui-w-40 {
    width: 40px !important;
    height: auto;
}
.default-style .ui-bordered {
    border: 1px solid rgba(24,28,33,0.06);
}
.image {
  align-content: center;
}
.-label {

justify-content: center;
align-items: center;
z-index: 10000;


    margin-bottom: 0;
    cursor: pointer;

  max-height: auto;
  max-width: auto;
  }
  .img {
position: relative;
  object-fit: cover;
  height: 600px;
  width: 1050px;

  box-shadow: 0 0 10px 0 rgba(255,255,255,.35);
display: flex;
  z-index: 0;
}
.input{
display: none;
}

</style>