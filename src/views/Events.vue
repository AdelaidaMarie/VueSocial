<template>
    <div class="dom container h-100 justify-content-center align-items-center" v-if="Cartago">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-emoji-dizzy" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M9.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zm-5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zM10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
</svg>
<div>
<h1 class="titulo">No hay eventos</h1>
</div>
</div>
<div class="bit">
  <button @click="$router.push({name: 'CrearEv'})" style="width: 65px; height: 55px; float: right;" class="btn btn-primary rounded-circle">
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="45" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
  </button>
</div>
    <div class="container text-center posts-content" v-for="item in items.reverse()" :key="item.id">
      <div class="row">
        <div class="col-lg-11">
          <div class="card cant">
            <div>
              <div class="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0">
              <img v-if="item.user.profile" style="width: 60px; height: 60px; border-radius: 100%;" :src=item.user.profile.avatar class="imog">
              <p class="user">{{ item.user.name }}</p> 
            </div>   
              <p class="titulo">{{ item.title }}</p>
              <p>{{ moment.unix(item.date).format("DD-MM-YYYY") }}</p>
            </div>

                <div class="media mb-2">
<img  :src=item.main_picture style="width: 500px;" class="img-thumbnail" alt="Responsive image">
<div class="w-35 p-3 mw-100">
<p>{{ item.description }}</p>
</div>
    </div>
    <div class="card-footer containe">
      {{ item.likes }} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg> {{ item.shares }} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
</svg> {{ item.comments.length}} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
</svg>
{{ item.participants.length }}<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>
<a v-if="item.location">{{ item.location.name }} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-geo" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
</svg>
</a>
      </div>
      <div>
      <button class="kant btn btn-primary" v-if="item.user.id == usip" v-on:click="detal(item.id)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
  <path fill-rule="evenodd" 
  d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
</svg> Editar </button>
      <button class="kant btn btn-danger" v-if="item.user.id == usip" 
      v-on:click="borreo(item.id)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
  <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
</svg> Borrar</button>

      </div>
</div>
</div>
</div>
</div>


</template>

<script setup lang="ts">
import axios from "axios";
import moment from "moment";
import { onMounted, ref } from "vue";
import { emitter } from "../helper/emision";
import router from "../router/router";


const Cartago = ref(false)

const items = ref([

])
const usip = ref("")
onMounted(() => {
enseñar()
loaw()
emitter.on('Array', 
(data) => {
  console.log('hola emision', data);
  
  items.value = data
  if (items.value <= 0) {
    Cartago.value = true
   } else if(data = 0){
enseñar()
   }
   else {
    Cartago.value = false
   }
})
})
let forg = {
  headers: {
  Authorization: `Bearer ${sessionStorage.getItem('tok')}`
  }
}
function enseñar() {
axios.get('https://bootcamp-api.itexon.net/api/events', forg)
.then(data => {
  console.log(data.data.data)
  console.log("Array",data)

     items.value = data.data.data
   console.log(items.value)
   
})
}
async function loaw() {
  
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
const itoms = ref([])
function detals(id) {
  Moka.value = true
  axios.get(`https://bootcamp-api.itexon.net/api/events/${id}`, forg)
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
  axios.get(`https://bootcamp-api.itexon.net/api/events/${id}`, forg)
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
  axios.delete(`https://bootcamp-api.itexon.net/api/events/${id}`, forg)
  .then(data => {
    console.log(data)
    location.reload()
  })
  .catch(err => {
    console.log(err)
  })
}

</script>

<style scoped>
.tex{
  word-wrap: break-word;
}
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
  background-color: rgb(255, 255, 255);
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
    margin-top:30px;

        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        display: block;
}
.titulo{
  font-size: 30px;
  font-family: 'Cambria';
  
}
.contenido {
  font-size: 15px;
  font-family: 'Cambria';
  margin-top: 20px;
  margin-bottom: 20px;
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
.bata {
z-index: 9;
}

</style>