<template>
  <section class="section">
    <div class="container has-text-centered">
      <div class="columns">
        <div class="column is-4 has-text-centered" style="height: 90vh;">
          <h1 class="title">体積重量計算</h1>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">縦</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input"
                         type="number"
                         v-model="length"
                         @change="calc"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">横</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input"
                         type="number"
                         v-model="width"
                         @change="calc"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">高さ</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input"
                         type="number"
                         v-model="height"
                         @change="calc"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">IATA</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input"
                         type="number"
                         v-model="iata"
                         @change="calc"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">体積重</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <p class="is-size-3">{{ dimensionalWeight }}</p>
                </div>
                <p class="help is-danger">
                  体積重=縦☓横☓高さ/IATA
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">単価</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input"
                         type="number"
                         v-model="unitPrice"
                         @change="calc"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">個数</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input"
                         type="number"
                         v-model="unit"
                         @change="calc"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">輸送費</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <p class="is-size-3">{{ price }}</p>
                </div>
                <p class="help is-danger">
                  輸送費=単価☓体積重
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DimensionalWeight',
  data() {
    return {
      width: 0,
      height: 0,
      length: 0,
      iata: 5000,
      unitPrice: 24,
      unit: 1,
      dimensionalWeight: 0,
      price: 0,
    };
  },
  methods: {
    calc() {
      this.dimensionalWeight = (this.width * this.height * this.length) / this.iata;
      if (Number.isInteger(this.dimensionalWeight) === false) {
        const weight = Math.floor(this.dimensionalWeight);
        if (this.dimensionalWeight <= weight + 0.5) {
          this.dimensionalWeight = weight + 0.5;
        } else {
          this.dimensionalWeight = weight + 1;
        }
      }
      this.price = this.dimensionalWeight * this.unitPrice * this.unit;
    },
  },
});
</script>

<style>
</style>
