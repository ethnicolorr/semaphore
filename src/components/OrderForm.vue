<script>
import {defineComponent} from "vue";

export default defineComponent({
  props: ['onOrder'],
  data() {
    return {
      sender_full_name:'',
      recipient_full_name:'',
      sender_address:'',
      recipient_address:'',
      progress:25,
      rules: {
        required: v => !!v || 'Обязательное поле',
      }
    }
  },
  methods: {
    order() {
      if (this.sender_full_name && this.recipient_address && this.recipient_full_name) {
        this.onOrder({
          sender_full_name: this.sender_full_name,
          recipient_full_name: this.recipient_full_name,
          sender_address: this.sender_address,
          recipient_address: this.recipient_address,
        })
      }
    }
  },
})
</script>

<template>
  <div class="info mb-8">Для начала введите данные отправителя и получателя</div>
  <v-progress-linear
    color="primary"
    v-model="progress"
    :height="5"
    class="mb-8"
  ></v-progress-linear>
  <v-form>
    <v-text-field
      v-model="sender_full_name"
      label="ФИО отправителя"
      :rules="[rules.required]"
      maxlength="50"
      color="primary"
      variant="outlined"
    ></v-text-field>
    <v-text-field
      class="my-2"
      color="primary"
      label="Адрес отправителя"
      variant="outlined"
      v-model="sender_address"
      maxlength="70"
    ></v-text-field>
    <v-text-field
      color="primary"
      label="ФИО получателя"
      variant="outlined"
      :rules="[rules.required]"
      maxlength="50"
      v-model="recipient_full_name"
    ></v-text-field>
    <v-text-field
      class="my-2"
      color="primary"
      label="Адрес получателя"
      variant="outlined"
      v-model="recipient_address"
      :rules="[rules.required]"
      maxlength="70"
    ></v-text-field>
    <v-btn
      :block="true"
      type="submit"
      variant="flat"
      color="primary"
      size="x-large"
      class="mb-4"
      @click="order()"
    >
      Продолжить
    </v-btn>
  </v-form>
  <v-btn
    :block="true"
    variant="tonal"
    size="x-large"
    class="mb-4"
    @click="$router.push('/')"
  >
    Отмена
  </v-btn>
</template>

<style scoped>

</style>
