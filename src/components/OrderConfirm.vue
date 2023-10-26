<script>
export default {
  methods: {
    // newOrder() {
    //   this.$emit("newOrder")
    // }
  }
}
</script>

<template>
  <div class="comment">
    Заказ оплачен и теперь<br>ожидает обработки.<br>Примерное время доставки:
  </div>
  <div class="text mb-5 mt-5 d-flex align-center justify-center">
    <strong>2 дня</strong>
    <v-tooltip location="end center" origin="auto">
      <template v-slot:activator="{props}">
        <img v-bind="props" src="@/assets/help.svg" alt="help">
      </template>
      <div class="text-center">Срок зависит от протяженности<br/>маршрута и загруженности башен</div>
    </v-tooltip>
  </div>
  <div class="comment mb-8">Благодарим за пользование сервисом!</div>
  <v-btn block="true" variant="flat" color="primary" size="x-large" class="mb-4" @click="$router.push('/')">На главный экран</v-btn>
  <v-btn block="true" variant="tonal" size="x-large" class="mb-4" @click="this.$emit('newOrder')">Продолжить работу</v-btn>
</template>

<style scoped>
img {
  width: 2rem;
  height: 2rem;
  margin-left: 1rem;
}

.text {
  text-align: center;
  font-family: "Montserrat",serif;
  font-size: 1.5rem;
  position: relative;
  z-index: 2;
}

.comment {
  text-align: center;
  font-family: "Montserrat",serif;
  font-size: 1.3rem;
}
</style>
