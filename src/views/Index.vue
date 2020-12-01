<template>
  <section class="section">
    <div class="container has-text-centered">
      <div class="columns">
        <div class="column is-5">
          <textarea class="textarea is-focused" placeholder="入力してください" style="height: 100vh;">
          </textarea>
        </div>
        <div class="column is-2">
          <button class="button is-large">変換 <i class="fas fa-arrow-right"></i>
          </button>
        </div>
        <div class="column is-5">
          <textarea class="textarea" placeholder="" readonly style="height: 100vh;"></textarea>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Index extends Vue {}
</script>
