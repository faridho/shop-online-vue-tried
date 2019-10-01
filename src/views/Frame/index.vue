<template>
  <div>
    <div class="responsive-menu">
      <a href="javascript:void(0);" @click="toogleMenu">Menu</a>
    </div>
    <div class="top-nav" v-bind:class="[responsiveActive ? '': 'responsive-navbar']">
      <a href="" class="active">Home</a>
      <div class="drop-down">
        <a href="">Dress</a>
        <div class="drop-down-content">
          <a href="">T-Shirts</a>
          <a href="">Pants</a>
          <a href="">Jeans</a>
        </div>
      </div>
      <div class="drop-down">
        <a href="">Accesories</a>
        <div class="drop-down-content">
          <a href="">Watch</a>
          <a href="">Wallet</a>
        </div>
      </div>
      <div class="search-section">
        <input type="text" class="search-navbar" placeholder="Search..."/>
        <button class="btn-search-navbar"> Search</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => ({
     responsiveActive: true
    }),

    methods: {
      toogleMenu() {
        if(this.responsiveActive)  {
          this.responsiveActive = false;
        } else {
          this.responsiveActive = true;
        }
      }
    }
  }
</script>