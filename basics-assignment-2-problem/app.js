const app = Vue.createApp({
  data() {
    return {
      firstInput: "",
      secondInput: "",
      confirmedInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("You Clicked Me!");
    },
    modifyFirstInput(event) {
      this.firstInput = event.target.value;
    },
    modifySecondInput(event) {
      this.secondInput = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.secondInput;
    },
  },
});

app.mount("#assignment");
