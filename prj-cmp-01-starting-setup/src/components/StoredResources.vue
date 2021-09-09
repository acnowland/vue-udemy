<template>
  <ul>
    <ResourceCard
      v-for="resource in resources"
      :key="resource.id"
      :id="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    />
  </ul>
</template>

<script>
import ResourceCard from './ResourceCard.vue';
export default {
  components: {
    ResourceCard
  },
  inject: ['resources']
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
