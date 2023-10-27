<script>
export default {
  props: ['onMsg', 'onReturn'],
  data() {
    return {
      progress: 50,
      message:'',
      rules: {
        required: v => !!v || 'Обязательное поле',
      },
    }
  },
  methods: {
    msg() {
      if (this.message) {
        this.onMsg({
          message: this.message,
        })
      }
    },
    back() {
      this.onReturn({
        progress: this.progress
      })
    }
  }
}
</script>

<template>
  <div class="info mb-8">Теперь введите сообщение, которое хотите отправить</div>
  <v-progress-linear
    color="primary"
    v-model="progress"
    :height="5"
    class="mb-8"
  ></v-progress-linear>
  <v-form>
    <v-textarea
      label="Текст сообщения"
      variant="outlined"
      color="primary"
      counter="400"
      maxlength="400"
      class="mb-2"
      :clearable="true"
      :auto-grow="true"
      rows="8"
      v-model="message"
      :rules="[rules.required]">
    </v-textarea>
    <v-btn
      :block="true"
      type="submit"
      variant="flat"
      color="primary"
      size="x-large"
      class="mb-4"
      @click="msg()"
    >
      Продолжить
    </v-btn>
  </v-form>
  <v-btn
    :block="true"
    variant="tonal"
    size="x-large"
    class="mb-4"
    @click="back()"
  >
    Назад
  </v-btn>
</template>

<style scoped>

</style>
