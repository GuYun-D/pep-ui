import type { App } from 'vue'
import Menu from './src/index.vue'
import InfiniteMenue from './src/menu'

export default {
  install(app: App) {
    app.component('pep-menu', Menu)
    app.component('pep-infinte-menu', InfiniteMenue)
  }
}