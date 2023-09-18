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
      jsonPath: '$.skuItemList.results.*.itemBasicInfo.manageNumber.fieldValue',
      rawDataPlaceholder: '',
      convertedDataPlaceholder: '',
    };
  },
  setup() {
    const rawData = ref<string>(`{
  "skuItemList" : {
    "numFound" : 1,
    "results" : [ {
      "shopId" : "356763",
      "itemId" : 10035435,
      "itemType" : "NORMAL",
      "image" : {
        "imageUrl" : {
          "fieldValue" : "https://image.rakuten.co.jp/shopload/cabinet/image444/98shisyr-001_1.jpg"
        },
        "thumbnailUrl" : "https://tshop.r10s.jp/shopload/cabinet/image444/98shisyr-001_1.jpg",
        "alt" : {
          "fieldValue" : "ハイネックリブニットトップス長袖韓国風トップス長袖ニットソー女性タイトトップス【メール便送料無料】"
        }
      },
      "itemBasicInfo" : {
        "manageNumber" : {
          "fieldValue" : "98shisyr-001"
        },
        "itemNumber" : {
          "fieldValue" : "98SHISYR-001"
        },
        "title" : {
          "fieldValue" : "ハイネック リブニットトップス 長袖韓国風 トップス 長袖 ニットソー 女性タイトトップス【メール便送料無料】"
        },
        "tagline" : {
          "fieldValue" : "韓国風 トップス/長袖 ニットソー/女性タイトトップス"
        },
        "showItem" : {
          "fieldValue" : false
        },
        "searchVisibility" : {
          "fieldValue" : true
        }
      },
      "itemPriceInfo" : {
        "taxRate" : {
          "fieldValue" : "0.1"
        },
        "taxIncluded" : {
          "fieldValue" : true
        }
      },
      "orderInfo" : {
        "purchasablePeriod" : {
          "fieldValue" : { }
        },
        "displayNormalCartButton" : {
          "fieldValue" : true
        }
      },
      "itemPointUp" : {
        "pointOptimizationFlag" : {
          "fieldValue" : false
        },
        "pointRate" : { },
        "start" : { },
        "end" : { }
      },
      "variationInfo" : {
        "variationInfoVariants" : [ {
          "selectorValues" : {
            "fieldValue" : {
              "カラー" : "ベージュ",
              "サイズ" : "ワンサイズ"
            }
          },
          "skuManageNumber" : {
            "fieldValue" : "98SHISYR-001-BE-FF"
          },
          "merchantDefinedSkuManageNumber" : {
            "fieldValue" : "98SHISYR-001-BE-FF"
          },
          "standardPrice" : {
            "fieldValue" : "3406"
          },
          "quantity" : {
            "fieldValue" : "0"
          },
          "showSku" : {
            "fieldValue" : false
          },
          "skuImage" : {
            "imageUrl" : {
              "fieldValue" : "https://image.rakuten.co.jp/shopload/cabinet/image444/98shisyr-001-be.jpg"
            },
            "thumbnailUrl" : "https://tshop.r10s.jp/shopload/cabinet/image444/98shisyr-001-be.jpg",
            "alt" : { }
          },
          "isAsuraku" : false
        }, {
          "selectorValues" : {
            "fieldValue" : {
              "カラー" : "ブラック",
              "サイズ" : "ワンサイズ"
            }
          },
          "skuManageNumber" : {
            "fieldValue" : "98SHISYR-001-BK-FF"
          },
          "merchantDefinedSkuManageNumber" : {
            "fieldValue" : "98SHISYR-001-BK-FF"
          },
          "standardPrice" : {
            "fieldValue" : "3406"
          },
          "quantity" : {
            "fieldValue" : "0"
          },
          "showSku" : {
            "fieldValue" : false
          },
          "skuImage" : {
            "imageUrl" : {
              "fieldValue" : "https://image.rakuten.co.jp/shopload/cabinet/image444/98shisyr-001-bk.jpg"
            },
            "thumbnailUrl" : "https://tshop.r10s.jp/shopload/cabinet/image444/98shisyr-001-bk.jpg",
            "alt" : { }
          },
          "isAsuraku" : false
        }, {
          "selectorValues" : {
            "fieldValue" : {
              "カラー" : "モスグリーン",
              "サイズ" : "ワンサイズ"
            }
          },
          "skuManageNumber" : {
            "fieldValue" : "98SHISYR-001-GR-FF"
          },
          "merchantDefinedSkuManageNumber" : {
            "fieldValue" : "98SHISYR-001-GR-FF"
          },
          "standardPrice" : {
            "fieldValue" : "3406"
          },
          "quantity" : {
            "fieldValue" : "0"
          },
          "showSku" : {
            "fieldValue" : false
          },
          "skuImage" : {
            "imageUrl" : {
              "fieldValue" : "https://image.rakuten.co.jp/shopload/cabinet/image444/98shisyr-001-gr.jpg"
            },
            "thumbnailUrl" : "https://tshop.r10s.jp/shopload/cabinet/image444/98shisyr-001-gr.jpg",
            "alt" : { }
          },
          "isAsuraku" : false
        }, {
          "selectorValues" : {
            "fieldValue" : {
              "カラー" : "ライトグレー",
              "サイズ" : "ワンサイズ"
            }
          },
          "skuManageNumber" : {
            "fieldValue" : "98SHISYR-001-LG-FF"
          },
          "merchantDefinedSkuManageNumber" : {
            "fieldValue" : "98SHISYR-001-LG-FF"
          },
          "standardPrice" : {
            "fieldValue" : "3406"
          },
          "quantity" : {
            "fieldValue" : "0"
          },
          "showSku" : {
            "fieldValue" : false
          },
          "skuImage" : {
            "imageUrl" : {
              "fieldValue" : "https://image.rakuten.co.jp/shopload/cabinet/image444/98shisyr-001-lg.jpg"
            },
            "thumbnailUrl" : "https://tshop.r10s.jp/shopload/cabinet/image444/98shisyr-001-lg.jpg",
            "alt" : { }
          },
          "isAsuraku" : false
        }, {
          "selectorValues" : {
            "fieldValue" : {
              "カラー" : "ホワイト",
              "サイズ" : "ワンサイズ"
            }
          },
          "skuManageNumber" : {
            "fieldValue" : "98SHISYR-001-WH-FF"
          },
          "merchantDefinedSkuManageNumber" : {
            "fieldValue" : "98SHISYR-001-WH-FF"
          },
          "standardPrice" : {
            "fieldValue" : "3406"
          },
          "quantity" : {
            "fieldValue" : "0"
          },
          "showSku" : {
            "fieldValue" : false
          },
          "skuImage" : {
            "imageUrl" : {
              "fieldValue" : "https://image.rakuten.co.jp/shopload/cabinet/image444/98shisyr-001-wh.jpg"
            },
            "thumbnailUrl" : "https://tshop.r10s.jp/shopload/cabinet/image444/98shisyr-001-wh.jpg",
            "alt" : { }
          },
          "isAsuraku" : false
        } ]
      },
      "accessPassword" : { },
      "unlimitedInventoryFlag" : false,
      "isDeleted" : false,
      "isAsuraku" : false,
      "isDraftItem" : false,
      "isSingleSku" : false
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
