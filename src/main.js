
import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/main.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

// carousel inicio
// import { createApp } from 'vue';
// import App from './App.vue';
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';


const app = createApp( App );
app.use( VueSplide );
app.mount( '#app' );
// fim

AOS.init();
// createApp(App).mount('#app')
