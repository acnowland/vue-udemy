<template>
  <div class="user-content">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style scoped>
.user-content {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
