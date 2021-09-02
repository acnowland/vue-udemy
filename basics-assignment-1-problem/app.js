const app = Vue.createApp({
  data() {
    return {
      myName: "Adam Nowland",
      myAge: 33,
      myAgeInFive: 38,
      randomNum: 0,
      picture:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.medicalnewstoday.com%2Farticles%2F322868&psig=AOvVaw1Omxw1ss3pMVOye4wei2By&ust=1630608588807000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDlncq43vICFQAAAAAdAAAAABAD",
      inputValue: "Adam",
    };
  },
  methods: {
    favoriteNumber() {
      const newRandomNum = Math.random();
      return newRandomNum;
    },
  },
});

app.mount("#assignment");
