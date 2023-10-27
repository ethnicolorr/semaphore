<template>
  <div class="rounded-lg px-3 py-3 bg-gray" v-if="task.title"> <!--костыль-->
    <v-row>
      <v-col class="title">{{task.title}}</v-col>
      <v-menu location="start">
        <template v-slot:activator="{ props }">
          <v-btn
            icon
            variant="text"
            v-bind="props"
          >
            <v-icon icon="mdi-dots-horizontal"></v-icon>
          </v-btn>
        </template>
        <v-list bg-color="gray">
          <v-menu location="end" open-on-hover>
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props">
                <v-list-item-title>
                  <v-icon icon="mdi-list-status" class="mr-2"></v-icon>
                  Статус
                  <v-icon icon="mdi-chevron-right" class="ml-8"></v-icon>
                </v-list-item-title>
              </v-list-item>
            </template>
            <v-list bg-color="gray">
              <v-list-item v-for="s in status" :key="s.id">
                <v-list-item-title @click="changeStatus(task.id)">{{ s.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-list-item>
            <v-list-item-title>
              <v-icon icon="mdi-circle-edit-outline" class="mr-2"></v-icon>
              Изменить
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-icon icon="mdi-trash-can-outline" class="mr-2"></v-icon>
              Удалить
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
    <v-chip variant="flat" size="small" class="my-2 mr-1 rounded" v-if="task.type" color="birch">{{task.type}}</v-chip>
    <v-chip variant="flat" size="small" v-if="task.tower" color="pink" class="rounded">{{task.tower}}</v-chip>
    <v-row align="center">
      <v-col sm="1">
        <v-avatar size="small">
          <v-img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
          ></v-img>
        </v-avatar>
      </v-col>
      <v-col class="ml-4">
        <p class="date">{{task.date.substring(11,16)}}</p>
        <p class="date">{{task.date.substring(8,10)}}/{{task.date.substring(5,7)}}/{{task.date.substring(2,4)}}</p> <!--костыль-->
      </v-col>
    </v-row>

  </div>
</template>
<script>

export default {
  data() {
    return {
      status: [
        {
          id: 1,
          title: 'Отложено'
        },
        {
          id: 2,
          title: 'Открыто'
        },
        {
          id: 3,
          title: 'В работе'
        },
        {
          id: 4,
          title: 'Решено'
        }
      ]
    }
  },
  props: {
    task: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    // formatDate(date) {
    //   return `${date.getMonth()}/${date.getYear()}`
    // }
  },
  methods: {
    changeStatus(task) {
      // task.
    }
  }
};
</script>

<style>
.title {
  font-family: "Montserrat",serif;
}

.date {
  font-family: "Montserrat",serif;
  font-size: 1.3ch;
  color: #9C9C9C;
}
</style>
