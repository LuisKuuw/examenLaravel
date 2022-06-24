<script>
import Inicio from './Inicio.vue';

export default {
  components: {
    Inicio
  }
}
</script>

<template>
    <div class="container">
        <Inicio/>
        <router-view />
    </div>
</template>
