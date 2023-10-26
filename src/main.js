import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import components from "@/components/UI";
import { vMaska } from "maska"

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

registerPlugins(app)

app
  .directive('maska', vMaska)
  .mount('#app')

