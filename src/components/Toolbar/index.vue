<template>
  <div class="navbar">
    <div class="responsive-menu">
      <router-link to="/" class="navbar-brand">{{ title }}</router-link>
      <a href="javascript:void(0);" @click="toogleMenu"><img src="/img/icons/menu-burger.svg" class="icon-menu" /></a>
    </div>
    <div class="top-navbar" v-bind:class="[responsiveActive ? '': 'responsive-navbar']">
      <router-link to="/" class="navbar-brand">{{ title }}</router-link>
      <router-link to="/">Home</router-link>

      <div class="drop-down" v-for="(menu, index) in menus" :key="index">
        <a href="">{{ menu.menu }}</a>
        <div class="drop-down-content">
          <a href="" v-for="(submenu, subindex) in menu.submenu" :key="subindex">{{ submenu.category_name }}</a>
        </div>
      </div>
      
      <div class="search-section">
        <input type="text" class="search-navbar" placeholder="Search..." />
        <button class="btn-search-navbar"> Search</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { baseUrl } from '@/views/Plugins/url';

export default {
  data: () => ({
    title: "FARIDHO'S OUTLET",
    responsiveActive: true,
    baseUrl: baseUrl,
    menus: [],
  }),

  created() {
    this.getMenu();
  },

  methods: {
    toogleMenu() {
      if (this.responsiveActive) {
        this.responsiveActive = false;
      } else {
        this.responsiveActive = true;
      }
    },

    async getMenu() {
      try {
        const menus = await axios
          .get(this.baseUrl + 'menu/all')
          .then(result => result.data.response.data);
        this.menus = menus;
      } catch (error) {
        alert(error);
      }
    }
  }
}
</script>