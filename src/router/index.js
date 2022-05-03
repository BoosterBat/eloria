import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/SiteHome.vue"
import Characters from "@/views/SiteCharacters.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/characters",
    name: "Characters",
    component: Characters,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;