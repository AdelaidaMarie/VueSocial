

<template>
  <div class="container text-center posts-content">
      <div class="row">
        <div class="col-lg-13">
          <div class="card cant">
            <div class="containe">
              <div class="col-md-6 col-lg-5 ml-auto align-items-center mt-4 mt-md-0">
            </div>
            <p>Titulo*</p>   
              <input v-model="postio.title" type="text" class="container form-controll">
            </div>
              <div>
                <div class="media mb-3 m-1">
                      <div class="media mb-2">
                      <p>Imagen*</p>
                      <label class="-label">
                    <input class="input" :onchange="loadeo" accept=".png, .jpg, .jpeg"  id="file" type="file" />     
                    <img 
                    
                    id='pat' class="img img-thumbnail d-block mx-auto">
                  </label>
       </div>
       <div class="mt-5">
       <p>Contenido*</p>
       
<textarea v-model="postio.content" placeholder="¿Qué está pasando?" type="text" class="container contenido"></textarea>
</div>
</div>
      <div>
<button class="btn btn-primary m-1" @click="subida">Publicar</button>
<button class="btn btn-secondary m-1" @click="$router.push({name: 'Posts'})">Cancelar</button>
<p v-if="fail" class="m-2">Error</p>
<p v-if="foto" class="m-2">No hay foto</p>
<p v-if="titulo" class="m-2">Uno o más campos están vacíos</p>
    
</div>
</div>
</div>

</div>
</div>
</div>

</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import moment from "moment";
import router from "../router/router";
const stand = ref()
const tempo = ref(moment().unix())
const file = ref()
const fail = ref(false)
const foto = ref(false)
const titulo = ref(false)

onMounted(() => {
})

function loadeo (e) {
  const imago = document.getElementById('pat')
console.log(postio.value)
console.log(imago);
  imago.src = URL.createObjectURL(e.target.files[0])
  file.value = e.target.files[0]
  console.log(file.value);

  stand.value = imago.src
  console.log(stand.value)
  window.localStorage.setItem('img', imago)
console.log(postio.value)
}
const postio = ref({
       title: '',
       content: '',
       main_picture: file.value,
       publish_date: tempo
})

function subida() {
  if(postio.value.title.length==0 || postio.value.content.length==0) {
    titulo.value = true
    foto.value = false
  } else if(!file.value) {
    foto.value = true
    titulo.value = false
  } else {
  let forg = {
  headers: {
  Authorization: `Bearer ${sessionStorage.getItem('tok')}`
  }
}

console.log(postio.value)
const dormData = new FormData();
  dormData.append('title', postio.value.title);
  dormData.append('content', postio.value.content);
  dormData.append('main_picture', file.value);
  console.log(postio.value.main_picture)
  dormData.append('publish_date', postio.value.publish_date);
axios.post('https://bootcamp-api.itexon.net/api/posts', dormData, forg)
.then(data => {
  console.log(data)

  router.push('/home') 
  if (data.status = 200) {
    fail.value = false


  }
})
.catch(error => {
  console.log(error)
  fail.value = true
})
  }
}

</script>

<style scoped>
.contenido {
  font-size: 20px;
  font-family: Cambria;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 200px;
  max-width: 600px;



}
.posts-content {

  margin-top:20px;
    position: static;

}
.form-controll {
  border-radius: 10px;
  font-size: 20px;
  font-family: Cambria;
  padding: 5px;
  max-height: 100px;
  max-width: 300px;

  display: inline-block;
}
.form-controlle {
  border-radius: 10px;
  font-size: 20px;
  font-family: Cambria;
  padding: 5px;
  margin-bottom: 1rem;
  max-width: 400px;
  height: 300px;
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
  min-height: 100px;
  min-width: 100px;
  height: auto;
  width: auto;
  box-shadow: 0 0 10px 0 rgba(255,255,255,.35);
display: flex;
  z-index: 0;
}
.input{
display: none;
}
.containe {
    margin: 20px;
  justify-content: right;
        align-items: right;
        background-color: white;
}
</style>