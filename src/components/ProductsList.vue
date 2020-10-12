<template>
  <div class="main-wrapper">
    <AppProductBrands @brandItem="sortBybrand"/>
    <div class="products-wrapper">
      <h3>Catalog</h3>
      <div class="stats">
        <product :data=data v-for="(data, index) in filteredProducts" :key="index"></product>
      </div>
      <h3 class="stats__title">{{"Текущих задач: "+ filteredProducts.length}}</h3>
    </div>
  </div>
</template>

<script>
import Product from './Product.vue'
import AppProductBrands from "@/components/Brands";

export default {
  name: 'AppProductList',
  components: {
    Product,
    AppProductBrands
  },
  data() {
    return {
      tasks: [
        {
          "type": "simple",
          "id": 1,
          "sku": "s1",
          "title": "Product 1",
          "regular_price": {
            "currency": "USD",
            "value": 27.12
          },
          "image": "/images/1.png",
          "brand": 9
        },
        {
          "type": "simple",
          "id": 2,
          "sku": "s2",
          "title": "Product 2",
          "regular_price": {
            "currency": "USD",
            "value": 36.87
          },
          "image": "/images/2.png",
          "brand": 8
        },
        {
          "type": "simple",
          "id": 3,
          "sku": "s3",
          "title": "Product 3",
          "regular_price": {
            "currency": "USD",
            "value": 28.91
          },
          "image": "/images/3.png",
          "brand": 2
        },
        {
          "type": "simple",
          "id": 4,
          "sku": "s4",
          "title": "Product 4",
          "regular_price": {
            "currency": "USD",
            "value": 41.23
          },
          "image": "/images/4.png",
          "brand": 7
        },
        {
          "type": "simple",
          "id": 5,
          "sku": "s5",
          "title": "Product 5",
          "regular_price": {
            "currency": "USD",
            "value": 88.00
          },
          "image": "/images/5.png",
          "brand": 3
        },
        {
          "type": "simple",
          "id": 6,
          "sku": "s6",
          "title": "Product 6",
          "regular_price": {
            "currency": "USD",
            "value": 127.41
          },
          "image": "/images/6.png",
          "brand": 6
        },
        {
          "type": "simple",
          "id": 7,
          "sku": "s7",
          "title": "Product 7",
          "regular_price": {
            "currency": "USD",
            "value": 123.40
          },
          "image": "/images/7.png",
          "brand": 5
        },
        {
          "type": "simple",
          "id": 8,
          "sku": "s8",
          "title": "Product 8",
          "regular_price": {
            "currency": "USD",
            "value": 92.32
          },
          "image": "/images/8.png",
          "brand": 1
        },
        {
          "type": "simple",
          "id": 9,
          "sku": "s9",
          "title": "Product 9",
          "regular_price": {
            "currency": "USD",
            "value": 53.40
          },
          "image": "/images/9.png",
          "brand": 2
        }
      ],
      sortedProducts: []
    }
  },
  computed: {
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      }
        return this.tasks;
    }
  },
  methods: {
    sortBybrand(brand) {
      this.sortedProducts = [];
      let vm = this;
      this.tasks.map(function (item) {
        if (item.brand === brand.id) {
          vm.sortedProducts.push(item);
        }
      })
    }
  }
}
</script>

<style>
  .products-wrapper {
    width: 100%;
  }
  .main-wrapper {
    margin-top: 20px;
  }
</style>