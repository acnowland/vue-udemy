<template>
  <div class="formArea">
    <form>
      <label for="fullname">Enter Your New Friend</label>
      <input
        type="text"
        id="fullname"
        name="fullname"
        v-model="friend.friendName"
      />
      <label for="phoneNumber">Phone Number:</label>
      <input type="text" id="phoneNumber" v-model="friend.phoneNumber" />
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="friend.email" />
      <button @click="submitFriend">Submit New Friend</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      friend: {
        friendName: "",
        phoneNumber: "",
        email: "",
      },
    };
  },
  methods: {
    submitFriend() {
      event.preventDefault();
      this.$emit("add-friend", this.friend);
      (this.friend.friendName = ""),
        (this.friend.phoneNumber = ""),
        (this.friend.email = "");
    },
  },
};
</script>
