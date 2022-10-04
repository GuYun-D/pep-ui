import type { App } from 'vue'

import Area from './area'
import Icon from './icon'
import Trend from './trend'
import Menu from './menu'
import Progress from './progress'

const components = [
  Area,
  Icon,
  Trend,
  Menu,
  Progress
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}