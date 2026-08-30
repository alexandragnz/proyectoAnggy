import App from "./App.vue";
import "./style.css";
import { createSSRApp } from "vue";
import { createRouterInstance } from "./router";
import { createHead } from "@unhead/vue/client";

export function createApp() {
  const app = createSSRApp(App);
  const router = createRouterInstance();
  const head = createHead();

  app.use(router);
  app.use(head);

  return { app, router, head };
}
