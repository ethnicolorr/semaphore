<script>
import MyInput from "@/components/UI/MyInput.vue";

export default {
  components: {MyInput},
  data() {
    return {
      card_number:'',
      card_owner:'',
      expire_date:'',
      cvv:'',
      receipt: '',
      progress:75,
      rules: {
        required: v => !!v,
      }
    }
  },
  props: ['onPayment', 'onReturn'],
  methods: {
    confirm() {
      if (this.card_number.length === 19 && this.card_owner && this.expire_date.length === 5 && this.cvv.length === 3) {
        this.onPayment({
          receipt: this.receipt
        })
      }
      else return alert('Пожалуйста, введите данные в корректном формате')
    },
    back() {
      this.onReturn({
        progress: this.progress
      })
    }
  }
}

</script>

<template>
  <div class="info mb-8">Всё готово, осталось только оплатить!</div>
  <v-progress-linear
    color="primary"
    v-model="progress"
    :height="5"
    class="mb-8"
  ></v-progress-linear>
  <v-form @submit.prevent>
    <v-card class="rounded-xl d-flex justify-center text-center py-7 mb-8" color="gray">
      <v-col>
        <v-row justify="center">
          <my-input
            class="input"
            v-model="card_number"
            required
            placeholder="Номер карты*"
            v-maska
            data-maska="#### #### #### ####"
            maxlength="19"
          />
        </v-row>
        <v-row justify="center">
          <my-input
            class="input my-4"
            v-model="card_owner"
            required
            placeholder="Владелец карты*"
            type="text"
            maxlength="22"
          />
        </v-row>
        <v-row justify="center">
          <my-input
            class="input2 mr-3"
            v-model="expire_date"
            required
            placeholder="Cрок действия*"
            v-maska
            data-maska="##/##"
            maxlength="5"
          />
          <my-input
            class="input3"
            v-model="cvv"
            required
            placeholder="CVC/CVV*"
            v-maska
            data-maska="###"
            maxlength="3"
          />
        </v-row>
      </v-col>
    </v-card>
    <v-btn
      :block="true"
      type="submit"
      variant="flat"
      color="primary"
      size="x-large"
      class="mb-4"
      @click="confirm()"
    >
      Продолжить
    </v-btn>
  </v-form>
  <v-btn
    :block="true"
    variant="tonal"
    size="x-large"
    class="mb-4"
    @click="back()"
  >
    Назад
  </v-btn>
</template>

<style scoped>

.input {
  width: 88%
}

.input2 {
  width: 52%
}

.input3 {
  width: 33%
}

</style>
