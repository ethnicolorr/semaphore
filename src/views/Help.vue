<script>

</script>

<template>
  <v-container class="h-screen d-flex align-center">
    <v-row>
      <v-col cols="4" offset="4">
        <img src="../assets/icon.svg" alt="paper-plane">
        <h1 class="title">СеМаФоР</h1>
        <div class="text py-10">Упс! Тут пока ничего нет</div>
        <v-btn block="true"
               variant="flat"
               color="primary"
               size="x-large"
               class="my-10"
               @click="$router.push('/')"
        >
          Вернуться
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
img {
  position:absolute;
  margin-top: -3em;
  margin-left: -7.5em;
  width: 13em;
  height: 13em;
  z-index: 1;
}

.title {
  position: relative;
  text-align: center;
  font-family: "Montserrat Alternates",serif;
  font-size: 4.5rem;
  font-weight: normal;
  z-index: 2;
}

.text {
  text-align: center;
  font-family: "Montserrat",serif;
  font-size: 1.2rem;
  position: relative;
  z-index: 2;
}
</style>
