<template>
  <div>
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script lang="ts">
import AppHeader from '@/components/App/Header.vue';
import AppFooter from '@/components/App/Footer.vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    AppFooter,
    AppHeader,
  },
})
export default class Layout extends Vue {
}
</script>
