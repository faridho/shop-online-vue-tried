<template>
  <div id="app">
    <Toolbar />
    <Bar />
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import '@/assets/style/main.scss'
import Toolbar from '@/components/Toolbar'
import Footer from '@/components/Footer'
import Bar from '@/components/Bar'

export default {
  components: {
    Toolbar,
    Footer,
    Bar
  }
}
</script>