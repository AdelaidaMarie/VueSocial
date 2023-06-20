

<script setup lang="ts">

import axios from 'axios';
import { computed, ref } from 'vue';
import Nav2 from '../components/Nav2.vue';
let forg = {
  headers: {
  Authorization: `Bearer ${sessionStorage.getItem('tok')}`
  }
}



</script>
<template>
    <div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
<Nav2 />

<div>

</div>

</template>
<style scoped>

div{
    text-align: center;
    background-color: white;
    margin: 0px;
}
</style>