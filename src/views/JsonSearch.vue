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
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">JsonPath</label>
                <p class="control">
                  <input
                    class="input has-text-centered"
                    type="text"
                    v-model="jsonPath"
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <button class="button" @click="search">
                Search <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <button class="button" @click="toYaml">
                To YAML <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
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
import { JSONPath } from 'jsonpath-plus';
import yaml from 'js-yaml';
import { handleClipboard } from '@/composables/clipboard';

export default defineComponent({
  name: 'JsonSearch',
  data() {
    return {
      jsonPath: '$.itemList.results.*.manageNumber.fieldValue',
      rawDataPlaceholder: '',
      convertedDataPlaceholder: '',
    };
  },
  setup() {
    const rawData = ref<string>(`{
  "itemList" : {
    "numFound" : 1,
    "results" : [ {
      "shopId" : "356763",
      "itemType" : "NORMAL",
      "draftItem" : false,
      "image" : {
        "location" : {
          "fieldValue" : "https://image.rakuten.co.jp/shopload/cabinet/image225/99yyh-039_1.jpg",
          "thumbnailUrl" : "https://tshop.r10s.jp/shopload/cabinet/image225/99yyh-039_1.jpg"
        },
        "alt" : {
          "fieldValue" : "ニットカーディガンレディース韓国風"
        }
      },
      "title" : {
        "fieldValue" : {
          "ja-JP" : "ニットカーディガン レディース 韓国風"
        },
        "errorMessage" : { }
      },
      "pc" : {
        "fieldValue" : {
          "ja-JP" : "ニットソー/上品 大人 女性/秋冬"
        },
        "errorMessage" : { }
      },
      "standardPrice" : {
        "fieldValue" : {
          "currency" : "JPY",
          "amount" : "5850"
        }
      },
      "taxRate" : {
        "fieldValue" : "0.1"
      },
      "taxIncluded" : {
        "fieldValue" : true
      },
      "manageNumber" : {
        "fieldValue" : "99yyh-039"
      },
      "inventoryType" : {
        "fieldValue" : "SKU"
      },
      "variantMappedInventories" : {
        "fieldValue" : {
          "139683" : {
            "quantity" : "12"
          },
          "139684" : {
            "quantity" : "15"
          }
        }
      },
      "purchasablePeriod" : {
        "fieldValue" : { }
      },
      "hideItem" : {
        "fieldValue" : true
      },
      "accessPassword" : { },
      "searchVisibility" : {
        "fieldValue" : "ALWAYS_VISIBLE"
      },
      "itemPointUp" : {
        "pointRate" : { },
        "start" : { },
        "end" : { }
      },
      "isDeleted" : false,
      "isAsuraku" : true
    } ]
  }
}`);
    const convertedData = ref<string>('');
    return {
      rawData,
      convertedData,
      handleClipboard,
    };
  },
  methods: {
    jsonPathSearch() {
      return JSONPath({
        path: this.jsonPath,
        json: JSON.parse(this.rawData),
      });
    },
    search() {
      this.convertedData = JSON.stringify(this.jsonPathSearch(),
        null,
        '  ');
    },
    toYaml() {
      this.convertedData = yaml.dump(this.jsonPathSearch());
    },
  },
});
</script>
