<script setup>

</script>

<template>
  <v-card class="card" color="gray">
    <div class="mt-8">
      <v-row>
        <v-col cols="10" offset="1">
          <v-text-field class="field" variant="outlined" label="Номер карты" counter="16" color="primary"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10" offset="1">
          <v-text-field class="field" variant="outlined" label="Владелец карты" color="primary"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" offset="1">
          <v-text-field  variant="outlined" type="month" label="Срок действия" color="primary"></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field variant="outlined" type="password" label="CVC/CVV" color="primary"></v-text-field>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<style scoped>
.card {
  border-radius: 25px;
  height: 18rem;
  margin-bottom: 1.5em
}

.field {
  margin-bottom: -1.5em;
}
</style>
