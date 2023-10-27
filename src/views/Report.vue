<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar
  },
  data() {
    return {
      snackbar: false,
      isOk: null,
      defSelected: [],
      defectIds: [],
      defectTypeIds: [],
      comment: [],

      defs: [
        {
          id: 1,
          title: 'Панели',
          types: [
            {
              id: 0,
              title: 'Дефект 1'
            },
            {
              id: 1,
              title: 'Дефект 2'
            },
          ]
        },
        {
          id: 2,
          title: 'Обзор',
          types: [
            {
              id: 0,
              title: 'Дефект 1'
            },
            {
              id: 1,
              title: 'Дефект 2'
            },
          ]
        },
        {
          id: 3,
          title: 'Освещение',
          types: [
            {
              id: 0,
              title: 'Дефект 1'
            },
            {
              id: 1,
              title: 'Дефект 2'
            },
          ]
        }
      ],

      defects: {
        1: 'Панели',
        2: 'Обзор',
        3: 'Освещение'
      },
      types: [
        {
          defect_types: {
            0: 'Дефект 1',
            1: 'Дефект 2',
            2: 'Дефект 3'
          }
        },
        {
          defect_types: {
            3: 'Дефект 1',
            4: 'Дефект 2',
            5: 'Дефект 3'
          }
        },
        {
          defect_types: {
            6: 'Обзор загорожен',
            7: 'Дефект 2',
            8: 'Дефект 3',
            9: 'Дефект 4'
          }
        },
      ]
    }
  },
  methods: {
    addDef(arr, def) {
      if(arr.indexOf(def) === -1)
        arr.push(def)
      else
        arr.splice(arr.indexOf(def))
    },
    sendReport() {
      this.defSelected.length = 0;
      this.snackbar = true;
      // здесь должен быть post
      this.isOk = null;
      this.defectIds.length = 0;
      this.defectTypeIds.length = 0;
    },
    cancel() {
      this.defectIds.length = 0;
      this.defectTypeIds.length = 0;
      this.isOk = null;
      this.defSelected.length = 0;
    }
  }
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
      <div v-if="isOk === 0">
        <div class="text_report">Где возник дефект?</div>
        <v-btn-toggle multiple="true" class="mt-5" color="primary" v-model="defSelected">
          <v-btn
            rounded="lg"
            class="btn mr-3"
            v-for="i in defs"
            :key="defs.id"
            @click="addDef(this.defectIds, i)"
          >
            {{i.title}}
          </v-btn>
        </v-btn-toggle>
        <v-divider class="my-6"></v-divider>
      </div>
      <div v-if="isOk === 0" v-for="i in defectIds" :key="defectIds.id">
        <div class="text_report">{{i.title}}: выберите тип дефекта</div>
        <v-btn-toggle multiple="true" class="mt-5" color="primary">
          <v-btn
            class="mr-3 btn"
            rounded="lg"
            v-for="j in defectIds.find(id => id === i).types"
            :key="j.id"
            @click="addDef(this.defectTypeIds, j)"
          >{{j.title}}</v-btn>
        </v-btn-toggle>
        <v-divider class="my-6"></v-divider>
      </div>
      <div class="mb-8">
        <v-btn rounded="lg" size="x-large" class="mr-3 btn" color="primary" @click="sendReport">Подтвердить</v-btn>
        <v-btn rounded="lg" size="x-large" class="btn" @click="cancel">Сброс</v-btn>
      </div>
      <v-snackbar
        :timeout="3000"
        v-model="snackbar"
        color="primary"
        rounded="lg"
      >
        <b>Отчёт успешно отправлен!</b>
      </v-snackbar>
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
