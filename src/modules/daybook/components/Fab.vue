<template>
  <button type="button" class="btn btn-primary">
    <i class="fas fa-2x" :class="icon"></i>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
      default: 'fa-plus'
    }
  },


}
</script>
<style lang="scss" scoped>
button {
  background-color: #007bff;
  border-radius: 50%;
  border: none;
  bottom: 20px;
  color: #fff;
  cursor: pointer;

  outline: none;
  position: fixed;
  right: 20px;

}
</style>