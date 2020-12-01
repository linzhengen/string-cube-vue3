<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a
            class="navbar-item"
            href="/"
          >
            <img
              src="@/assets/logo.png"
              alt="String Cube"
            >
          </a>
          <span
            :class="{'is-active': menuBurger}"
            class="navbar-burger burger"
            @click="toggleBurger(!menuBurger)"
          >
            <span />
            <span />
            <span />
          </span>
        </div>
        <navbar :class="{ 'is-active': menuBurger }" />
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Navbar from '@/components/App/Navbar.vue';
import { useStore } from 'vuex';
import { key } from '@/store';

export default defineComponent({
  name: 'AppHeader',
  components: {
    Navbar,
  },
  setup() {
    const store = useStore(key);
    return {
      menuBurger: computed(() => store.getters.menuBurger),
      toggleBurger: (isShow: boolean) => store.dispatch('toggleBurger', isShow),
    };
  },
});
</script>
