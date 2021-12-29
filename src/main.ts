import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { continueCalculation } from "./utils/age-calculator";

continueCalculation(); // Singleton Instance creation in store
createApp(App).use(store).use(router).mount("#app");
