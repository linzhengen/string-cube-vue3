import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/brands.scss';
import '@/scss/app.scss';

createApp(App).use(store, key).use(router).mount('#app');
