<template>
  <div
    class="navbar-menu"
  >
    <div class="navbar-start">
      <div class="navbar-item is-hoverable">
        <a
          class="navbar-link is-arrowless"
        >重複削除</a>
      </div>
      <div class="navbar-item is-hoverable">
        <a
          class="navbar-link is-arrowless"
        >差分抽出</a>
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
