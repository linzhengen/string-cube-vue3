<template>
  <section class="section">
    <div class="container has-text-centered">
      <div class="columns">
        <div class="column is-5">
          <div class="columns">
            <div class="column">
              <h1 class="title">A</h1>
              <textarea
                class="textarea is-focused is-primary"
                :placeholder="baseDataPlaceholder"
                style="height: 32vh;"
                v-model="baseData"
              >
              </textarea>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <h1 class="title">B</h1>
              <textarea
                class="textarea is-focused is-danger"
                :placeholder="targetDataPlaceholder"
                style="height: 32vh;"
                v-model="targetData"
              >
              </textarea>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div class="columns is-vcentered">
            <div class="column">
              <button class="button" @click="getDiffB">
                A→B差分 <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <button class="button" @click="getDiffA">
                B→A差分 <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <button class="button" @click="getDiffAB">
                AB差分 <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <button class="button" @click="getSame">
                共通抽出 <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="column is-5">
          <textarea
            class="textarea"
            :placeholder="comparedDataPlaceholder"
            readonly
            style="height: 100vh;"
            v-model="compareData"
            @click="handleClipboard(compareData, $event)"
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
  name: 'Diff',
  data() {
    return {
      baseDataPlaceholder: 'a\nb',
      targetDataPlaceholder: 'b\nc',
      comparedDataPlaceholder: 'a',
    };
  },
  setup() {
    return {
      baseData: ref<string>(''),
      targetData: ref<string>(''),
      compareData: ref<string>(''),
      handleClipboard,
    };
  },
  methods: {
    getSame() {
      const baseList = this.toList(this.baseData);
      const targetList = this.toList(this.targetData);
      this.compareData = _.intersection(baseList, targetList).join('\n');
    },
    getDiffA() {
      const baseList = this.toList(this.baseData);
      const targetList = this.toList(this.targetData);
      this.compareData = _.differenceWith(baseList, targetList, _.isEqual).join('\n');
    },
    getDiffB() {
      const baseList = this.toList(this.baseData);
      const targetList = this.toList(this.targetData);
      this.compareData = _.differenceWith(targetList, baseList, _.isEqual).join('\n');
    },
    getDiffAB() {
      const baseList = this.toList(this.baseData);
      const targetList = this.toList(this.targetData);
      this.compareData = _.union(
        _.differenceWith(baseList, targetList, _.isEqual),
        _.differenceWith(targetList, baseList, _.isEqual),
      ).join('\n');
    },
    toList(data: string) {
      return data.split('\n').filter((v) => v.trim().length > 0);
    },
  },
});
</script>
