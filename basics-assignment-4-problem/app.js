const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      showParagraph: true,
      inputBackground: "",
    };
  },
  computed: {
    paragraphClasses() {
      return {
        user1: this.userInput === "user1",
        user2: this.userInput === "user2",
        visible: this.showParagraph,
        hidden: !this.showParagraph,
      };
    },
  },
  methods: {
    toggleShow() {
      this.showParagraph = !this.showParagraph;
    },
  },
});

app.mount("#assignment");
