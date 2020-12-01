<template>
  <section class="section">
    <div class="container has-text-centered">
      <div class="columns">
        <div class="column is-5">
          <textarea
            class="textarea is-focused"
            placeholder="入力してください"
            style="height: 100vh;"
            v-model="data"
          >
          </textarea>
        </div>
        <div class="column is-2">
          <button class="button is-large" @click="convert">
            変換 <i class="fas fa-arrow-right"></i>
          </button>
        </div>
        <div class="column is-5">
          <textarea
            class="textarea"
            placeholder=""
            readonly
            style="height: 100vh;"
            v-model="convertedData"
          ></textarea>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import _ from 'lodash';

export default defineComponent({
  name: 'Index',
  setup() {
    const data = ref<string>('');
    const convertedData = ref<string>('');
    return {
      data,
      convertedData,
    };
  },
  methods: {
    convert() {
      const list = this.data.split('\n').filter((v) => v.trim().length > 0);
      this.convertedData = _.uniq(list).join('\n');
    },
  },
});
</script>
