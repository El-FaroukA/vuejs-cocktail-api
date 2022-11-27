import MainMenu from "./components/MainMenu.js";
import App from "./App.js";
import router from "./router/index.js";

const options = {
    data() {
      return {};
    },
    components: {
      MainMenu,
      App
    },
  };
  
  const app = Vue.createApp(options);
  
  app.use(router);
  
  app.mount("#app");
  