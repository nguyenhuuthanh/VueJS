<template>
  <div>
    <top-menu />
    <div class="section">
      <div class="container">
          <h1 class="title">
            Home page
          </h1>
          <p class="subtitle">
            Home content
          </p>
      </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/Header'

export default {
  name: 'home',
  components: {
    'top-menu': header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
