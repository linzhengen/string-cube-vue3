import { createApp } from 'vue';
import { ElMessage } from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import { store, key } from './store';

import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/brands.scss';
import '@fortawesome/fontawesome-free/scss/regular.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import '@/scss/app.scss';

createApp(App)
  .use(store, key)
  .use(router)
  .use(ElMessage)
  .mount('#app');
