<template>
  <div
    class="navbar-menu"
  >
    <div class="navbar-start">
      <div class="navbar-item is-hoverable">
        <router-link :to="{ name: 'Home' }" class="navbar-link is-arrowless">
          重複削除
        </router-link>
      </div>
      <div class="navbar-item is-hoverable">
        <router-link :to="{ name: 'CharacterType' }" class="navbar-link is-arrowless">
          文字種変換
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { key } from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNavbar',
  setup() {
    const store = useStore(key);
    console.log(store.state.menuBurger);
  },
});

</script>
