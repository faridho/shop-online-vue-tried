<template>
  <div class="container detail">
    <div class="row">
      <div class="column-detail-shop">
        <div class="shop-card">
          <img :src=thumbnail class="img-shop-card" />
        </div>
      </div>
      <div class="column-detail-shop-pick">
        <div class="detail-select">
          <div class="detail-love">
            <img v-if="like" src="/img/icons/like.svg" class="img-love" @click="liked" />
            <img v-if="unlike" src="/img/icons/liked.svg" class="img-love" @click="unliked" />
          </div>
          <div class="detail-over">
            <a href="" class="detail-category">{{ category }}</a>
            <h2 class="detail-description">{{ name }}</h2>
            <p class="detail-price">IDR {{ price | numeral }}</p>
          </div>
          <div class="detail-form">
            Size:
            <input type="radio" name="radio" checked> S
            <input type="radio" name="radio"> M
            <input type="radio" name="radio"> L
          </div>
          <div class="detail-add-chart">
            ADD TO CHART
          </div>
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
    props: {
      id: Number
    },

    data: () => ({
      baseUrl: '',
      name: '',
      price: 0,
      category: '',
      thumbnail: '',

      like: true,
      unlike: false,
    }),

    created() {
      this.getProductDetail();
    },

    methods: {
      async getProductDetail() {
        const product = await axios 
          .get(baseUrl + 'product/detail/' + this.id)
          .then(result => result.data.response.data);

        this.name = product.name;
        this.price = product.price;
        this.category = product.category_name;
        this.thumbnail = product.thumbnail;
      },

      liked() {
        this.like = false;
        this.unlike = true;
      },

      unliked() {
        this.like = true;
        this.unlike = false;
      },
    },

    filters: {
      numeral(val) {
        return numeral(val).format('0,0');
      }
    }
  }
</script>