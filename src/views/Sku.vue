<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-5">
          <div class="field">
            <label class="label">代表コード</label>
            <p class="control">
              <input
                class="input"
                type="text"
                placeholder="PRODUCT-CODE"
                v-model="productCode"
              >
            </p>
          </div>
          <div class="field">
            <label class="label">SKU1</label>
            <p class="control">
              <textarea
                class="textarea"
                :placeholder="sku1Placeholder"
                v-model="sku1"
              >
              </textarea>
            </p>
          </div>
          <div class="field">
            <label class="label">SKU2</label>
            <p class="control">
              <textarea
                class="textarea"
                :placeholder="sku2Placeholder"
                v-model="sku2"
              >
              </textarea>
            </p>
          </div>
        </div>
        <div class="column is-2">
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">区切り記号</label>
                <p class="control">
                  <input
                    class="input has-text-centered"
                    type="text"
                    v-model="glue"
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <button class="button" @click="create">
                SKUコード生成 <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="column is-5">
          <textarea
            class="textarea"
            :placeholder="skuProductCodePlaceholder"
            readonly
            style="height: 100vh;"
            v-model="skuProductCode"
            @click="handleClipboard(skuProductCode, $event)"
          ></textarea>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { handleClipboard } from '@/composables/clipboard';

export default defineComponent({
  name: 'Sku',
  data() {
    return {
      glue: '-',
      sku1Placeholder: 'BK\nDP',
      sku2Placeholder: 'M\nL',
      skuProductCodePlaceholder: 'PRODUCT-CODE-BK-M\nPRODUCT-CODE-BK-L\nPRODUCT-CODE-DP-M\nPRODUCT-CODE-DP-L\n',
    };
  },
  setup() {
    const productCode = ref<string>('');
    const sku1 = ref<string>('');
    const sku2 = ref<string>('');
    const skuProductCode = ref<string>('');
    return {
      productCode,
      sku1,
      sku2,
      skuProductCode,
      handleClipboard,
    };
  },
  methods: {
    create() {
      const sku1List = this.sku1.split('\n').filter((v) => v.trim().length > 0);
      const sku2List = this.sku2.split('\n').filter((v) => v.trim().length > 0);
      const sku = [];
      sku1List.forEach((s1) => {
        sku2List.forEach((s2) => {
          sku.push(
            `${this.productCode}${this.glue}${s1}${this.glue}${s2}`,
          );
        });
      });
      this.skuProductCode = sku.join('\n');
    },
  },
});
</script>
