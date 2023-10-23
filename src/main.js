import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import components from "@/components/UI";
import router from "@/router";

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

registerPlugins(app)

app
  .use(router)
  .mount('#app')
