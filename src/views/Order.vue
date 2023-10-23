<script>
import OrderForm from "@/components/OrderForm.vue"
import PaymentForm from "@/components/PaymentForm.vue"
import OrderConfirm from "@/components/OrderConfirm.vue";
export default {
  components: {
    OrderForm, PaymentForm, OrderConfirm
  },
  data() {
    return {
      progress: 25
    }
  },
  methods: {
    addProgress() {
      this.progress += 25;
    },
    newOrder() {
      this.progress = 25;
    }
  }
}
</script>

<template>
  <v-container class="h-screen d-flex align-center">
    <v-row>
      <v-col cols="4" offset="4">
        <div class="comment mb-8" v-if="progress===25">Для начала введите данные отправителя и получателя</div>
        <div class="comment mb-8" v-if="progress===50">Теперь введите сообщение, которое хотите отправить</div>
        <div class="comment mb-8" v-if="progress===75">Всё готово, осталось только оплатить!</div>
        <div class="comment mb-8" v-if="progress>75">Операция прошла успешно!</div>
        <v-progress-linear
          color="primary"
          v-model="progress"
          :height="5"
          class="mb-8"
        ></v-progress-linear>
        <form>
          <order-form v-if="progress === 25"/>
          <v-textarea v-if="progress === 50" label="Текст сообщения" variant="outlined" color="primary" counter="400"></v-textarea>
          <payment-form v-if="progress === 75"/>
          <v-btn block="true" variant="flat" color="primary" size="x-large" class="mb-4" v-if="progress < 75" @click="addProgress()">Продолжить</v-btn>
          <v-btn block="true" variant="flat" color="primary" size="x-large" class="mb-4" v-if="progress === 75" @click="addProgress()">Подтвердить</v-btn>
        </form>
        <order-confirm v-if="progress === 100" v-on:newOrder="newOrder"/>
        <v-btn block="true" variant="tonal" size="x-large" class="mb-4" v-if="progress > 25 && progress < 100" @click="progress-=25">Назад</v-btn>
        <v-btn block="true" variant="tonal" size="x-large" class="mb-4" v-if="progress === 25" @click="$router.push('/')">Отмена</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.comment {
  text-align: center;
  font-family: "Montserrat",serif;
  font-size: 1.3rem;
}
</style>
