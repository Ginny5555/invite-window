import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import './assets/global.css';
import  VueTheMask  from 'vue-the-mask';

createApp(App).use(store).use(router).use(VueTheMask).mount("#app");
