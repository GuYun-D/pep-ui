import type { App } from 'vue'
import Icon from './src/index.vue'

export default {
  install(app: App) {
    app.component('pep-icon', Icon)
  }
}