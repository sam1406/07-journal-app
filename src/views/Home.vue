<template>
  <div class="home"><img src="../assets/logo.png" alt=""></div>
  <button @click="goToDayBook" type="button" name="primer" id="primer" class="btn btn-primary btn-lg btn-block">primaty</button>
  <button type="button" name="primer" id="primer" class="btn btn-secundary btn-lg btn-block">primaty</button>
  <button type="button" name="primer" id="primer" class="btn btn-success btn-lg btn-block">primaty</button>
</template>

<script>
export default {

  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  methods: {
    goToDayBook() {
      this.$router.push({ name: 'daybook-noEntry' });
    }
  }
}
</script>

<style>

</style>