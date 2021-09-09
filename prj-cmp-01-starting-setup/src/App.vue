<template>
  <TheHeader />
  <TheResources />
</template>

<script>
import TheHeader from './components/Layouts/TheHeader.vue';
import TheResources from './components/TheResources.vue';
export default {
  components: {
    TheHeader,
    TheResources
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
