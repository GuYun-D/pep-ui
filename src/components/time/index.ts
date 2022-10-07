import type { App } from 'vue'
import Time from './src/index.vue'

export default {
  install(app: App) {
    app.component('pep-time', Time)
  }
}