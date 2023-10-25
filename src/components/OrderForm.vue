<script>
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      sender_full_name:'',
      recipient_full_name:'',
      sender_address:'',
      recipient_address:'',
      rules: {
        required: v => !!v || 'Обязательное поле',
      }
    }
  },
  methods: {
  }
})
</script>

<template>
  <v-text-field
    color="primary"
    label="ФИО отправителя"
    variant="outlined"
    v-model="sender_full_name"
    :rules="[rules.required]"
    maxlength="50"
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
</template>

<style scoped>

</style>
