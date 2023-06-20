

<template>
  <div class="container posts-content text-center">
      <div class="row">
        <div class="col-lg-20">
          <div class="card cant">
            <div>
              <div class="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0">
                <p class="m-5">Titulo*</p>   
                <input v-model="postio.title" type="text" class="form-controll">

            </div>

            </div>
                <div class="media mb-2">
                    <label class="-label"> Imagen*
                    <input :onchange="loadeo"  class="input" accept=".png, .jpg, .jpeg"  id="file" type="file" />  
<img 
id="pet"
style="width: 1000px height: 1000px;" class="img">
</label>
    </div>
    <p class="mt-5 mb-0">Contenido*</p>
    <textarea v-model="postio.description" type="textarea" class="form-controlle m-5"></textarea>

    <div class="row mb-5 mt-5">
    <div class="col duram">
        <label class="m-5">
        <input v-model="postio.duration" type="number">
        Duración
    </label>
    </div>
    <div class="col duram m-2">
        <label class="m-5">Fecha</label>
        <input v-model="tempo" type="datetime-local" state="1">
    </div>
    <div class="col duram m-2">
    <label class="m-5">¿Es online el evento?</label>

                <label class="switch">
  <input v-bind:value="postio.online" type="checkbox">
  <span class="slider"></span>
</label>
</div>   
    </div>
    <p v-if="fail" class="m-2">Error</p>  
    <div >
<button class="btn btn-primary" @click="subida">Publicar</button>
<button class="btn btn-secondary m-1" @click="$router.push({name: 'Events'})">Cancelar</button>
</div>
</div>

</div>
</div>
</div>

</template>

<script setup lang="ts">
import axios from "axios";
import moment, {unix} from "moment";
import { ref, computed, onMounted } from "vue";
import router from "../router/router";
const file = ref()
const tempo = ref()
const fail = ref(false)

const dateStart = computed(() => {

  const startTime = moment(tempo.value).unix()
  
  
  return startTime
})

const postio = ref({
title: '',
main_picture: file.value,
description: '',
date: '',
online: 1,
duration: 3600,
  location_name: 'Discord',
  location_x: 100,
  location_y: 100

})

function loadeo (e) {
  const imago = document.getElementById('pet')
console.log(postio.value)
console.log(imago);
  imago.src = URL.createObjectURL(e.target.files[0])
  file.value = e.target.files[0]
  console.log(file.value);
console.log(postio.value)
}




async function subida() {
postio.value.date = dateStart.value



  let forg = {
  headers: {
  Authorization: `Bearer ${sessionStorage.getItem('tok')}`
  }
}
console.log(postio.value)
const dormData = new FormData();
  dormData.append('title', postio.value.title);
  dormData.append('description', postio.value.description);
  dormData.append('main_picture', file.value);
  dormData.append('date', postio.value.date);
  dormData.append('online', postio.value.online);
  dormData.append('duration', postio.value.duration);
  dormData.append('location_name', postio.value.location_name)
  dormData.append('location_x', postio.value.location_x)
  dormData.append('location_y', postio.value.location_y)
  dormData.append('max_participants', 10)
  dormData.append('published', 1)

await axios.post('https://bootcamp-api.itexon.net/api/events', dormData, forg)
.then(data => {
  console.log(data)
  router.push('/home') 
})
.catch(error => {
console.log(error)
fail.value = true
})
}

</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50
}
.duram{
    font-family: Cambria;
    margin: 5px;
}
.profile-pic {


display: flex;

position: static;


}
.form-controll {
  border-radius: 10px;
  font-size: 20px;
  font-family: Cambria;
  padding: 5px;
  margin-bottom: 1rem;
}
.form-controlle {
  border-radius: 10px;
  font-size: 20px;
  font-family: Cambria;
  padding: 5px;
  margin-bottom: 1rem;
  width: auto;
  height: 300px;
}
.-label {

  justify-content: center;
  align-items: center;
  z-index: 10000;


      margin-bottom: 0;
      cursor: pointer;
    height: 600px;
    width: 900px;
    }
    .img {
  position: relative;
    object-fit: cover;
    height: 600px;
    width: 900px;
    box-shadow: 0 0 10px 0 rgba(255,255,255,.35);

    z-index: 0;
  }
  .input{
  display: none;
}
</style>