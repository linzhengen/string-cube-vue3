<template>
  <section class="section">
    <div class="container has-text-centered">
      <div class="columns">
        <div class="column is-5">
          <textarea
            class="textarea is-focused"
            :placeholder="rawDataPlaceholder"
            style="height: 100vh;"
            v-model="rawData"
          >
          </textarea>
        </div>
        <div class="column is-2">
          <button class="button" @click="convert">
            重複削除 <i class="fas fa-arrow-right"></i>
          </button>
        </div>
        <div class="column is-5">
          <textarea
            class="textarea"
            :placeholder="convertedDataPlaceholder"
            readonly
            style="height: 100vh;"
            v-model="convertedData"
            @click="handleClipboard(convertedData, $event)"
          ></textarea>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import _ from 'lodash';
import { handleClipboard } from '@/composables/clipboard';

export default defineComponent({
  name: 'Uniq',
  data() {
    return {
      rawDataPlaceholder: '',
      convertedDataPlaceholder: '',
    };
  },
  setup() {
    const rawData = ref<string>('aaa\nbbb\nccc\naaa');
    const convertedData = ref<string>('');
    return {
      rawData,
      convertedData,
      handleClipboard,
    };
  },
  methods: {
    convert() {
      const list = this.rawData.split('\n').filter((v) => v.trim().length > 0);
      this.convertedData = _.uniq(list).join('\n');
    },
  },
});
</script>
