import type { App } from 'vue'

import Area from './area'
import Icon from './icon'
import Trend from './trend'
import Menu from './menu'

const components = [
  Area,
  Icon,
  Trend,
  Menu
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}