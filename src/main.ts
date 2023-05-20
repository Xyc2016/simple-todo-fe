import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import './style.css'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'ant-design-vue/dist/antd.css';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
library.add(faCheckSquare)

createApp(App).use(Antd)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
