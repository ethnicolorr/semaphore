<script>
export default {
  data () {
    return {
      drawer: true,
      rail: true,
    }
  },
}
</script>

<template>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        :permanent="true"
        @click="rail = false"
        color="gray"
      >

        <v-list-item
          prepend-avatar="@/assets/paperplane.svg"
          :nav="true"
        >
          <template v-slot:append>
            <div class="title">
              СеМаФоР
            </div>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" :nav="true" color="birch" base-color="gray" variant="flat">
          <v-list-item prepend-icon="mdi-email-fast" title="Заказы" value="signal" @click="$router.push('/orders')"></v-list-item>
          <v-list-item prepend-icon="mdi-text-box-search" title="Диагностика" value="report" @click="$router.push('/report')"></v-list-item>
          <v-list-item prepend-icon="mdi-calendar-check" title="Задачи" value="tasks" @click="$router.push('/tasks')"></v-list-item>
          <v-list-item prepend-icon="mdi-map-marker-radius" title="Карта" value="map"></v-list-item>
          <v-divider class="my-2"></v-divider>
          <v-list-item prepend-icon="mdi-account-box" title="Профиль" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-message-text" title="Контакты" value="contacts"></v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<style scoped>
.title {
  font-family: 'Montserrat Alternates',serif;
  margin-right: 1rem;
  font-size: 1.3rem;
}
</style>
