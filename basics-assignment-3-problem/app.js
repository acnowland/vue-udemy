const app = Vue.createApp({
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    calculatedValue() {
      if (this.value < 35) {
        return "Not There Yet";
      } else if (this.value > 35) {
        return "Too Much!";
      } else {
        return "Exactly 35!";
      }
    },
  },
  watch: {
    calculatedValue() {
      const that = this;
      setTimeout(() => {
        that.value = 0;
      }, 5000);
    },
  },
  methods: {
    calculatingValue(num) {
      this.value += num;
    },
  },
});

app.mount("#assignment");
