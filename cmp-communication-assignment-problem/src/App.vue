<template>
  <div class="container">
    <ActiveUser :user="user" />
    <FormArea @add-user="addUser" />
  </div>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import FormArea from "./components/UserData.vue";
export default {
  components: {
    ActiveUser,
    FormArea,
  },
  data() {
    return {
      user: {
        name: "Adam Nowland",
        age: "33",
      },
    };
  },
  methods: {
    addUser(newUser) {
      (this.user.name = newUser.name), (this.user.age = newUser.age);
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
</style>
