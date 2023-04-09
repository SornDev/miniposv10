import './bootstrap';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia";
const pinia = createPinia();
import Sidebar from './components/Sidebar.vue'
import './service/axios';
import Pagination from './components/Pagination.vue'
import Cleave from 'vue-cleave-component'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import CardDashboard from './components/CardDashboard.vue'


const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(Cleave)
app.use(VueSweetalert2)
app.component('carddashboard',CardDashboard)
app.component('sidebar',Sidebar)
app.component('pagination',Pagination)
app.mount('#app')
