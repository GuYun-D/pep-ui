import type { App } from 'vue'

import Area from './area'
import Icon from './icon'

const components = [
  Area,
  Icon
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}