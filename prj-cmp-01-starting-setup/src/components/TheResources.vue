<template>
  <base-card>
    <base-button
      @click="setSelected('stored-resources')"
      :mode="selectedTab === 'stored-resources' ? null : 'flat'"
    >
      Stored Resources
    </base-button>
    <base-button
      @click="setSelected('add-resource')"
      :mode="selectedTab === 'add-resource' ? null : 'flat'"
    >
      Add Resource
    </base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
  components: {
    StoredResources,
    AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'Official Vue.JS documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Google Search LInk',
          link: 'https://google.com'
        }
      ]
    };
  },
  methods: {
    setSelected(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(id) {
      const indexOfItem = this.storedResources.findIndex(res => res.id === id);
      this.storedResources.splice(indexOfItem, 1);
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource
    };
  }
};
</script>
