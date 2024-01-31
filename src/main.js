
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'
import { createApp } from 'vue/dist/vue.esm-bundler';
import store from './stores/storeConfigs';
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router'
const app = createApp(App)
const pinia = createPinia();

window.Swal = Swal;
const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
})
window.toast = toast

app.use(router)
app.use(store);
app.use(pinia)

// console.log('app', app);

app.mount('#app')
