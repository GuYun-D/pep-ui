import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as Icons from '@element-plus/icons'
import { toLine } from './utils'

const app = createApp(App)

console.log(Icons);


for (let i in Icons) {
  // i = 组件名称
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}

app.use(router).use(ElementPlus).mount('#app')
