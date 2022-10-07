import type { App } from 'vue'

import Area from './area'
import Icon from './icon'
import Trend from './trend'
import Menu from './menu'
import Progress from './progress'
import time from './time'

const components = [
  Area,
  Icon,
  Trend,
  Menu,
  Progress,
  time
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}