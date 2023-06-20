<template>
    <nav class="form-group">
      <router-link to="/form">Registrarse</router-link>
      
    </nav>
    <router-view />
  </template>
<script setup lang="ts">

</script>

<style scoped>
.form-group {
    font-family: monospace;
    font-size: 20px;
    width: 100%;
    border-radius: 10px;
    color:aliceblue;
}
.form-control {
  background-color: #213547;
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
  color:rgba(247, 247, 247, 0.973);
}
h2 {
  font-family: monospace;
  line-height: 1.1;
  color:rgba(255, 255, 255, 0.664);
}
button {
  background-color: rgba(255, 255, 255, 0.342);
  font-family: Cambria;
}
.check {
  font-family: Cambria;
  line-height: 1.1;
  color:rgba(247, 247, 247, 0.973);
}
nav{
  text-align: center;
  margin: 0 auto;
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #686868;
}
nav a.active {
  color: #000000;
}
</style>