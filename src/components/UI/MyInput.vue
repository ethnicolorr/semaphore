<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value)
    }
  }
}
</script>

<template>
  <input
    :value="modelValue"
    @input="updateInput"
    type="text"
    class="rounded-lg my-input py-4 pl-4"/>
</template>

<style>
.my-input {
  background-color: #49454F;
}

.my-input:focus {
  outline: none;
}
</style>
