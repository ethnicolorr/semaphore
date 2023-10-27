<script>

import OrderForm from "@/components/OrderForm.vue"
import PaymentForm from "@/components/PaymentForm.vue"
import OrderConfirm from "@/components/OrderConfirm.vue"
import MessageForm from "@/components/MessageForm.vue"
export default {
  components: {
    OrderForm, MessageForm, PaymentForm, OrderConfirm
  },
  data() {
    return {
      progress: 25,
      sender_full_name:'',
      recipient_full_name:'',
      sender_address:'',
      recipient_address:'',
      message:'',
      rules: {
        required: v => !!v || 'Обязательное поле',
      },
    }
  },
  methods: {
    newOrder() {
      this.progress = 25;
    },
    onReturn() {
      this.progress -= 25;
    },
    onData(data) {
      console.log('msgData', data);
      this.progress += 25;
    },
  }
}
</script>

<template>
  <v-container class="h-screen d-flex align-center">
    <v-row>
      <v-col cols="4" offset="4">
        <order-form v-if="progress === 25" :onOrder="onData"/>
        <message-form v-if="progress === 50" :onMsg="onData" :onReturn="onReturn"/>
        <payment-form v-if="progress === 75" :onPayment="onData" :onReturn="onReturn"/>
        <order-confirm v-if="progress === 100" v-on:newOrder="newOrder"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
