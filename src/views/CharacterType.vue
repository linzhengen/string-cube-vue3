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
          <div class="columns is-vcentered">
            <div class="column">
              <button class="button" @click="strUpper">
                大文字に変換 <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div class="column">
            <button class="button" @click="strLower">
              小文字に変換 <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div class="column is-5">
          <textarea
            class="textarea"
            :placeholder="convertedDataPlaceholder"
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

export default defineComponent({
  name: 'Uniq',
  data() {
    return {
      rawDataPlaceholder: '入力してください',
      convertedDataPlaceholder: '',
    };
  },
  setup() {
    const rawData = ref<string>('');
    const convertedData = ref<string>('');
    return {
      rawData,
      convertedData,
    };
  },
  methods: {
    strUpper() {
      this.convertedData = this.rawData.toUpperCase();
    },
    strLower() {
      this.convertedData = this.rawData.toLowerCase();
    },
  },
});
</script>
