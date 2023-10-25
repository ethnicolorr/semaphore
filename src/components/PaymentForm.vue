<script>
export default {
  data() {
    return {
      card_number:'',
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
  <v-card class="rounded-xl mb-8 py-5" color="gray">
    <div class="mt-5">
      <v-row>
        <v-col cols="10" offset="1">
          <v-text-field
            variant="outlined"
            label="Номер карты*"
            color="primary"
            maxlength="19"
            v-model="card_number"
            :value="formatCardNumber"
            @input="updateValue"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="my-n5">
        <v-col cols="10" offset="1">
          <v-text-field
            variant="outlined"
            label="Владелец карты*"
            color="primary"
            maxlength="22"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="my-n3">
        <v-col cols="6" offset="1">
          <v-text-field
            variant="outlined"
            label="MM/YY*"
            color="primary"
            type="month"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            variant="outlined"
            label="CVC/CVV*"
            color="primary"
            maxlength="3"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<style scoped>
</style>
