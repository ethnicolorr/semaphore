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
    class="rounded-lg my-input"/>
</template>

<style>
.my-input {
  background-color: #2B2A31;
}

.my-input:hover {
  outline: 2px solid #619B9B !important;
}

.my-input:focus {
  outline: 2px solid #619B9B !important;
}
</style>
