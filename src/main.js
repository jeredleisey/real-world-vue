import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import 'nprogress/nprogress.css'

const GStore = reactive({ flashMessage: '' })

// 1. This code sets up automatic Component registration using the require.context function
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

const app = createApp(App)

// 2. This is the heart of setting up the required components so they don't have to be registered each time
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  app.component(componentName, componentConfig.default || componentConfig)
})

app.use(store).use(router).provide('GStore', GStore).mount('#app')
