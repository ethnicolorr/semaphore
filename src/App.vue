<template id="app">
  <router-view />
</template>

<script>

import {defineComponent} from "vue";
import MyInput from "@/components/UI/MyInput.vue";

export default defineComponent({
  components: {MyInput}
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Montserrat+Alternates:wght@500&display=swap');

#app {
  background-color: #1E1D24;
  min-height: 100vh;
}
</style>
