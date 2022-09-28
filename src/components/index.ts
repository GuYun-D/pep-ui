import type { App } from 'vue'

import Area from './area'
import Icon from './icon'
import Trend from './trend'

const components = [
  Area,
  Icon,
  Trend
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}