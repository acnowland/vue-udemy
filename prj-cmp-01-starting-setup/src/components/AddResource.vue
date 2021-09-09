<template>
  <base-dialog v-if="isInvalidInput" @close="closeDialog">
    <template #default>
      <p>
        Sorry, one or more of your input fields are blank or has an invalid
        entry
      </p>
      <p>Please try again</p>
    </template>
    <template #actions>
      <button @click="closeDialog">Close</button>
    </template>
  </base-dialog>

  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title: </label>
        <input id="title" type="text" name="title" v-model="title" />
      </div>
      <div class="form-control">
        <label for="description">Description: </label>
        <textarea
          name="description"
          id="description"
          rows="3"
          v-model="description"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link: </label>
        <input id="link" type="url" name="link" v-model="link" />
      </div>
      <base-button type="submit">Add Resource</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      title: '',
      description: '',
      link: '',
      isInvalidInput: false
    };
  },
  methods: {
    submitData() {
      if (this.title === '' || this.description === '' || this.link === '') {
        this.isInvalidInput = true;
        return;
      }
      this.addResource(this.title, this.description, this.link);
    },
    closeDialog() {
      this.isInvalidInput = false;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
