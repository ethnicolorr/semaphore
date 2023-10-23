<script>

import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      show: false,
    }
  }
})
</script>

<template>
  <v-container class="h-screen d-flex align-center">
    <v-row>
      <v-col cols="4" offset="4">
          <img src="@/assets/icon.svg" alt="paper-plane">
          <h1 class="title">СеМаФоР</h1>
          <div class="text pb-10">Корпоративный портал</div>
          <v-form>
            <v-text-field color="primary" label="Логин" variant="outlined"></v-text-field>
            <v-text-field color="primary" label="Пароль" variant="outlined"
                          :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show ? 'text' : 'password'"
                          @click:append-inner="show = !show"
            ></v-text-field>
            <v-btn block="true" color="primary" variant="flat" size="x-large" class="mt-1">Войти</v-btn>
          </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Montserrat+Alternates:wght@500&display=swap');

.title {
  text-align: center;
  font-family: "Montserrat Alternates",serif;
  font-size: 4rem;
  font-weight: normal;
  position: relative;
  z-index: 2;
}

.text {
  text-align: center;
  font-family: "Montserrat",serif;
  font-size: 1.5rem;
  position: relative;
  z-index: 2;
}

img {
  position:absolute;
  margin-top: -3em;
  margin-left: -7.5em;
  width: 13em;
  height: 13em;
  z-index: 1;
}
</style>
