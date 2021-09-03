const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      input: "",
      showTasks: true,
    };
  },

  methods: {
    addTask() {
      this.tasks.push(this.input);
    },

    toggleShow() {
      this.showTasks = !this.showTasks;
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
});

app.mount("#assignment");
