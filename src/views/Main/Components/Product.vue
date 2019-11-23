<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="title-shop">
          <h2><span>WHICH ONE WILL BE YOURS</span></h2>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="column-card-shop" v-for="(product, index) in products" :key="index">
          <div class="shop-card">
            <img :src=product.thumbnail class="img-shop-card" />
            <button class="buy-button">TAKE ME OUT</button>

            <div class="product-label">
              <div clas="product">{{ product.name }}</div>
              <div class="price">IDR {{ product.price | numeral }}</div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="load-more">
          <button class="load-more-button" @click="more()">
            LOAD MORE PRODUCTS
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import { baseUrl } from '@/views/Plugins/url';
  import numeral from 'numeral';


  export default {
    data: () => ({
      baseUrl: baseUrl,
      products: [],
      index: 0,
    }),

    created() {
      this.getProducts();
    },

    methods: {
      async getProducts() {
        const offset = this.index;
        const products = await axios
          .get(this.baseUrl + 'product/get/' + offset)
          .then(result => result.data.response.data);

        this.products = products;

        this.index = offset + 8;
      },

      async more() { 
        const offset = this.index;
        const products = await axios
          .get(this.baseUrl + 'product/get/' + offset)
          .then(result => result.data.response.data);

        for(let product of products) {
          this.products.push({
            thumbnail: product.thumbnail,
            name: product.name,
            price: product.price
          });
        }

        this.index = offset + 8;
      }
    },

    filters: {
      numeral(val) {
        return numeral(val).format('0,0');
      }
    }
  }
</script>