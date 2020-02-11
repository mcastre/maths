import Vue from 'nativescript-vue'
import App from './components/App.vue'





// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

// Plugins
Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient)

new Vue({
  render: h => h('frame', [h(App)])
}).$start()
