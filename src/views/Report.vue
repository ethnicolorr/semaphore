<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar
  },
  data() {
    return {
      isOk: true,
      defectIds: [],
      defectTypeIds: [],
      comment: [],
      defects: {
        0: 'Панели',
        1: 'Обзор',
        2: 'Освещение'
      },
      defect_Types: {
        0: 'Дефект 1',
        1: 'Дефект 2',
        2: 'Дефект 3'
      }
    }
  },
}
</script>

<template>
  <v-layout>
    <navbar/>
    <v-main class="ml-10 mt-8">
      <div class="text_report">Имеются ли неполадки в оборудовании и/или окружении, мешающие корректной работе системы?</div>
      <v-btn-toggle v-model="isOk" mandatory class="mt-5" color="primary">
        <v-btn rounded="lg" class="mr-3 btn">Да</v-btn>
        <v-btn rounded="lg" class="btn">Нет</v-btn>
      </v-btn-toggle>
      <v-divider class="my-6"></v-divider>
      <div v-if="!isOk">
        <div class="text_report">Где возник дефект?</div>
        <v-btn-toggle multiple="true" class="mt-5" v-model="defectIds" color="primary">
          <v-btn
            rounded="lg"
            class="btn mr-3"
            v-for="i in defects"
            :key="defects[i]"
          >
            {{i}}
          </v-btn>
        </v-btn-toggle>
        <v-divider class="my-6"></v-divider>
      </div>
      <div v-if="!isOk" v-for="i in defectIds" :key="defectIds[i]">
        <div class="text_report">{{defects[i]}}: выберите тип дефекта</div>
        <v-btn-toggle multiple="true" class="mt-5" v-model="defectTypeIds" color="primary">
          <v-btn class="mr-3 btn" rounded="lg" v-for="def in defect_Types" :key="defect_Types[def]">{{def}}</v-btn>
        </v-btn-toggle>
        <v-divider class="my-6"></v-divider>
      </div>
      <div class="mb-8">
        <v-btn rounded="lg" size="x-large" class="mr-3 btn" color="primary">Подтвердить</v-btn>
        <v-btn rounded="lg" size="x-large" class="btn">Отмена</v-btn>
      </div>
    </v-main>
  </v-layout>
</template>

<style scoped>
.text_report {
  font-family: 'Montserrat',serif;
  font-size: 1.2rem;
}

.btn {
  background-color: #2B2A31;
}
</style>
