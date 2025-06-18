// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld,
  },
  {
    path: "/todos",
    name: "Todos",
    component: () => import("@/components/Todos.vue"), // criaremos depois
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
