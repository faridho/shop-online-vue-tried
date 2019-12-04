<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="title-shop">
          <h2><span>PRODUCT DETAIL</span></h2>
        </div>
      </div>
    </div>
    <Detail :id="id" />
  </div>
</template>
<script>
  import Detail from './Components/Detail';
  export default {
    data: vm => ({
      id: vm.$route.params.id
    }),

    methods: {
     
    },

    components: {
      Detail
    }
  }
</script>