
import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/main.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
createApp(App).mount('#app')
