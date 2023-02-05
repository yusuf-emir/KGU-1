<template>
  <div id="app w-screen">
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    isLogged() {
      return this.$store.state.isLogged;
    },
  },
};
</script>
<style>
body {
  background-color: #f3f4f6;
}
</style>
