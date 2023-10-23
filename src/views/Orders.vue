<script>

import {defineComponent} from "vue";
import Navbar from "@/components/Navbar.vue";
export default defineComponent({
  components: {
    Navbar,
  },
  data () {
    return {
      isActive: false,
      tab: null,
      isSelected: false,
      selectedItem: null,
      snackbar: false,
      messages: [
        {
          id: 1,
          date: '06/06/23',
          time: '17:22',
          sender: 'Анк-Морпорк, ул. Цветная, 8',
          receiver: 'Щеботан, пр. Алхимиков, 47',
          symbols: 150
        },
        {
          id: 2,
          date: '06/06/23',
          time: '17:22',
          sender: 'Анк-Морпорк, ул. Цветная, 8',
          receiver: 'Щеботан, пр. Алхимиков, 47',
          symbols: 150
        },
        {
          id: 3,
          date: '06/06/23',
          time: '17:22',
          sender: 'Анк-Морпорк, ул. Цветная, 8',
          receiver: 'Щеботан, пр. Алхимиков, 47',
          symbols: 150
        },
        {
          id: 4,
          date: '06/06/23',
          time: '17:22',
          sender: 'Анк-Морпорк, ул. Цветная, 8',
          receiver: 'Щеботан, пр. Алхимиков, 47',
          symbols: 150
        },
        {
          id: 5,
          date: '06/06/23',
          time: '17:22',
          sender: 'Анк-Морпорк, ул. Цветная, 8',
          receiver: 'Щеботан, пр. Алхимиков, 47',
          symbols: 150
        },
      ],
      msg_data: [
        {
          id: 1,
          route: ['АМ12', 'АМ16', 'Щ2'],
          time: 14
        },
        {
          id: 2,
          route: ['АМ12', 'АМ14', 'Щ5', 'Щ2'],
          time: 15
        },
        {
          id: 3,
          route: ['АМ12', 'АМ18', 'Щ2'],
          time: 19
        }
      ]
    }
  },
  methods: {
    onRowClick(item) {
      this.isSelected = true;
      this.selectedItem = item;
    },
    onReturnClick() {
      this.isSelected = false;
    },
  }
})
</script>

<template>
  <v-layout>
    <navbar/>
    <v-main class="mt-2">
        <v-tabs class="ml-10"
                v-model="tab"
                color="primary"
        >
          <v-tab value="new">Новые</v-tab>
          <v-tab value="old">Обработанные</v-tab>
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

        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="new">
              <v-table v-if="!isSelected" v-model="isSelected" class="bg-darkblue rounded-lg">
                <thead>
                <tr>
                  <th class="text-center">
                    #
                  </th>
                  <th>Дата</th>
                  <th>Время</th>
                  <th>Отправитель</th>
                  <th>Получатель</th>
                  <th>Символы</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr
                  v-for="item in messages"
                  :key="item.id"
                  @click="onRowClick(item)"
                >
                  <td class="text-center">{{ item.id }}</td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.time }}</td>
                  <td>{{ item.sender }}</td>
                  <td>{{ item.receiver }}</td>
                  <td>{{ item.symbols }}</td>
                  <td></td>
                </tr>
                </tbody>
              </v-table>
              <v-table v-if="isSelected" class="bg-darkblue rounded-lg">
                <thead>
                <tr>
                  <th class="text-center">
                    #
                  </th>
                  <th>Дата</th>
                  <th>Время</th>
                  <th>Отправитель</th>
                  <th>Получатель</th>
                  <th>Символы</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td class="text-center">{{ selectedItem.id }}</td>
                  <td>{{ selectedItem.date }}</td>
                  <td>{{ selectedItem.time }}</td>
                  <td>{{ selectedItem.sender }}</td>
                  <td>{{ selectedItem.receiver }}</td>
                  <td>{{ selectedItem.symbols }}</td>
                  <td></td>
                </tr>
                <tr>
                  <th></th>
                  <th colspan="3" class="font-weight-bold text-subtitle-1">
                    Оптимальные маршруты
                  </th>
                  <th class="font-weight-bold text-subtitle-1">
                    Время передачи
                  </th>
                  <th>
                    <v-btn variant="outlined" color="primary" @click="onReturnClick()">
                      <v-icon icon="mdi-keyboard-return" color="primary"></v-icon>
                    </v-btn>
                  </th>
                  <th></th>
                </tr>
                <tr
                  v-for="item in msg_data"
                  :key="item.id"
                >
                  <td class="text-center">{{ item.id }}</td>
                  <td colspan="3">
                    <template
                      v-for="i in item.route.slice(0,-1)"
                    >
                      <v-chip
                        variant="flat"
                        class="rounded"
                        color="primary"
                      >
                        {{ i }}
                      </v-chip>
                      <v-icon class="ml-1 mr-1" icon="mdi-chevron-right">
                      </v-icon>
                    </template>
                    <v-chip
                      color="primary"
                      class="rounded"
                      variant="flat"
                    >
                      {{ item.route.slice(-1).toString() }}
                    </v-chip>
                  </td>
                  <td>{{ item.time }} часов 15 минут</td>
                  <td colspan="2">
                    <v-btn variant="outlined" size="small" icon color="primary">
                      <v-icon icon="mdi-map-marker-radius" color="primary"></v-icon>
                    </v-btn>
                    <v-dialog width="25em">
                      <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" class="ml-3" size="small" variant="outlined" icon color="primary">
                          <v-icon icon="mdi-check" color="primary"></v-icon>
                        </v-btn>
                      </template>
                      <template v-slot:default="{ isActive }">
                        <v-card rounded="xl" color="darkblue">
                          <v-card-title class="bg-primary text-center py-3">
                            Подтверждение действия
                          </v-card-title>
                          <v-card-text class="text-center my-2">
                            Вы хотите поместить сообщение <span class="text-primary font-weight-black">#{{item.id}}</span> в очередь
                            для отправки по маршруту
                            <div class="mb-5"></div>
                            <template
                              v-for="i in item.route.slice(0,-1)"
                            >
                              <v-chip
                                class="rounded"
                                variant="flat"
                                color="primary"
                              >
                                {{ i }}
                              </v-chip>
                              <v-icon class="mx-1" icon="mdi-chevron-right">
                              </v-icon>
                            </template>
                            <v-chip
                              class="rounded"
                              variant="flat"
                              color="primary"
                            >
                              {{ item.route.slice(-1).toString() }}
                            </v-chip>
                          </v-card-text>
                          <v-card-actions class="mb-5 justify-center">
                            <v-btn
                              class="px-5 mr-1"
                              text="Подтвердить"
                              color="primary"
                              variant="flat"
                              size="large"
                              @click="(isActive.value = false) & (snackbar = true)"
                              rounded="lg"
                            ></v-btn>
                            <v-btn
                              class="px-5"
                              text="Отмена"
                              @click="isActive.value = false"
                              variant="flat"
                              rounded="lg"
                              color="lightgray"
                              size="large"
                            ></v-btn>
                          </v-card-actions>
                        </v-card>
                      </template>
                    </v-dialog>
                  </td>
                </tr>
                </tbody>
              </v-table>
              <v-snackbar
                :timeout="3000"
                v-model="snackbar"
                color="primary"
                rounded="lg"
              >
                <b>Сообщение #{{ selectedItem.id }} успешно помещено в очередь к отправке</b>
              </v-snackbar>
            </v-window-item>
          </v-window>
        </v-card-text>
    </v-main>
  </v-layout>
</template>

<style scoped>
</style>
