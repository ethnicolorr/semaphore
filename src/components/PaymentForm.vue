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
      rules: {
        required: v => !!v,
      }
    }
  },
  computed: {
    formatCardNumber(){
      return this.card_number ? this.card_number.match(/[0-9]{1,4}/g).join(' ') : '';
    }
  },
  methods: {
    updateValue(e){
      this.card_number = e.target.value.replace(/ /g,'');
    }
  }
}

</script>

<template>
  <v-card class="rounded-xl d-flex justify-center text-center py-7 mb-8" color="gray">
    <v-col>
      <v-row justify="center">
        <my-input
          class="input"
          v-model="card_number"
          required
          placeholder="Номер карты*"
          v-maska
          data-maska="#### #### #### ####"/>
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
        />
        <my-input
          class="input3"
          v-model="cvv"
          required
          placeholder="CVC/CVV*"
          v-maska
          data-maska="###"
        />
      </v-row>
    </v-col>
  </v-card>
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
