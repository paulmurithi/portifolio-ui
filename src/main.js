import Vue from "vue";
import App from "./App.vue";
import store from "./store";

// add bootstrap vue
import BootstrapVue from 'bootstrap-vue'

// add bootstrap css files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// add font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

// library.add(faUserSecret)
library.add(faTwitter)
library.add(faFacebookF)
library.add(faInstagram)
library.add(faLinkedinIn)
library.add(faWhatsapp)
library.add(faGooglePlusG)
library.add(faAngleDoubleDown)



// smooth page scrolling animation
import Scrollspy from 'vue2-scrollspy'
// use default options
Vue.use(Scrollspy)
Vue.use(BootstrapVue)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
