import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList }, //domain.com/teams
    { path: '/users', component: UsersList } //domain.com/users
  ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
