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
      <div class="navbar-item is-hoverable">
        <router-link :to="{ name: 'Compare' }" class="navbar-link is-arrowless">
          文字比較
        </router-link>
      </div>
      <div class="navbar-item is-hoverable">
        <router-link :to="{ name: 'Sku' }" class="navbar-link is-arrowless">
          SKUコード生成
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNavbar',
});

</script>
