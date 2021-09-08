<template>
  <div class="form-area">
    <form>
      <label for="name">Input Name:</label>
      <input type="text" id="name" v-model="fullName" />
      <label for="age">Input Age: </label>
      <input type="text" id="age" v-model="currentAge" />
      <input type="submit" @click="submitNewUser" />
    </form>
  </div>
</template>

<script>
export default {
  emits: ["new-user"],
  data() {
    return {
      fullName: "",
      currentAge: "",
    };
  },
  methods: {
    submitNewUser() {
      event.preventDefault();
      let newUser = {};
      newUser.name = this.fullName;
      newUser.age = this.currentAge;
      this.$emit("add-user", newUser);

      (this.fullName = ""), (this.currentAge = "");
    },
  },
};
</script>

<style scoped>
.form-area {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
