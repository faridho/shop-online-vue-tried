<template>
  <div class="container">
    <div class="row">
      <div class="hero-image">
        <div class="hero-text">
          <h1>{{ heroTitle }}</h1>
          <button class="hero-button">SHOP NOW</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => ({
      heroTitle: 'WARDROBE ESSENTIALS FROM IDR 149,900',
    })
  }
</script>