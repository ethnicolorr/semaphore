<script>
import Navbar from "@/components/Navbar.vue";
import draggable from "vuedraggable";
import TaskCard from "@/components/TaskCard.vue";

export default {
  components: {
    Navbar,
    TaskCard,
    draggable
  },
  data() {
    return {
      tab: null,
      mock_task: { // костыль
        id: 0,
        title: "123",
        date: "2023-10-21T09:00:53",
        type: "Обзор",
        tower: "13"
      },
      columns: [
        {
          title: "Отложено",
          tasks: [
            {
              id: 0,
              date: "2023-10-21T09:00:53",
              type: "Mock",
              tower: "0"
            },
            {
              id: 1,
              title: "Обзор загорожен",
              date: "2023-10-21T09:00:53",
              type: "Обзор",
              tower: "АМ12"
            },
            {
              id: 2,
              title: "Поломка рычагов",
              date: "2023-10-21T09:00:53",
              type: "Панели",
              tower: "АМ12"
            },
            {
              id: 5,
              title: "Обзор загорожен",
              date: "2023-10-21T09:00:53",
              type: "Обзор",
              tower: "АМ12"
            }
          ]
        },
        {
          title: "Открыто",
          tasks: [
            {
              id: 6,
              date: "2023-10-21T09:00:53",
              type: "Mock",
              tower: "0"
            },
            {
              id: 7,
              title: "Обзор загорожен",
              date: "2023-10-21T09:00:53",
              type: "Обзор",
              tower: "АМ12"
            },
            {
              id: 8,
              title: "Поломка рычагов",
              date: "2023-10-21T09:00:53",
              type: "Панели",
              tower: "АМ12"
            }
          ]
        },
        {
          title: "В работе",
          tasks: [
            {
              id: 9,
              title: "Обзор загорожен",
              date: "2023-10-21T09:00:53",
              type: "Обзор",
              tower: "АМ12"
            },
            {
              id: 11,
              title: "Поломка рычагов",
              date: "2023-10-21T09:00:53",
              type: "Панели",
              tower: "АМ12"
            },
            {
              id: 12,
              title: "Поломка рычагов",
              date: "2023-10-21T09:00:53",
              type: "Панели",
              tower: "АМ12"
            },
            {
              id: 13,
              date: "2023-10-21T09:00:53",
              type: "Mock",
              tower: "0"
            },
          ]
        },
        {
          title: "Решено",
          tasks: [
            {
              id: 14,
              title: "Поломка рычагов",
              date: "2023-10-21T09:00:53",
              type: "Панели",
              tower: "АМ12"
            },
            {
              id: 15,
              title: "Обзор загорожен",
              date: "2023-10-21T09:00:53",
              type: "Обзор",
              tower: "АМ12"
            },
            {
              id: 16,
              date: "2023-10-21T09:00:53",
              type: "Mock",
              tower: "0"
            },
          ]
        }
      ]
    }
  }
}

</script>

<template>
<v-layout>
  <navbar/>
  <v-main class="mt-2">
    <v-tabs class="ml-10"
            v-model="tab"
            color="primary"
    >
      <v-tab value="tasks">Обзор</v-tab>
      <v-tab value="dashboard">Доска</v-tab>
      <v-spacer></v-spacer>
      <v-btn icon variant="text">
        <v-icon icon="mdi-magnify" color="primary"></v-icon>
      </v-btn>
      <v-btn icon variant="text">
        <v-icon icon="mdi-filter-outline" color="primary"></v-icon>
      </v-btn>
      <v-btn icon variant="text" class="mr-10">
        <v-icon icon="mdi-sort" color="primary"></v-icon>
      </v-btn>
    </v-tabs>
    <v-divider></v-divider>

    <v-window v-model="tab">
      <v-window-item value="dashboard">
        <v-layout class="px-10 pt-1" row>
          <div
            v-for="column in columns"
            :key="column.title"
            class="py-3 mr-5 column-width"
          >
            <div class="d-flex flex-row align-center mb-1">
              <p class="title mr-4">{{column.title}}</p>
              <p class="count text-grey-lighten-1">{{column.tasks.length - 1}}</p>
              <v-spacer></v-spacer>
              <v-btn icon variant="text">
                <v-icon icon="mdi-plus" size="x-large" color="primary"></v-icon>
              </v-btn>
            </div>
            <div class="rounded-lg bg-darkblue px-3 py-1">
              <draggable
                :list="column.tasks"
                group="tasks"
                v-model="column.tasks"
                item-key="id"
              >
                <template
                  v-for="task in column.tasks"
                  :key="task.id"
                  #item="{element}"
                >
                  <task-card
                    :task="element"
                    class="cursor-move my-3"
                  ></task-card>
                </template>
              </draggable>
            </div>
          </div>
        </v-layout>
      </v-window-item>
    </v-window>
  </v-main>
</v-layout>
</template>

<style scoped>

.column-width {
  min-width: 320px;
  width: 320px;
}

.title {
  text-align: left;
  font-family: "Montserrat",serif;
  font-size: 1.2rem;
}

.count {
  font-family: "Montserrat",serif;
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
