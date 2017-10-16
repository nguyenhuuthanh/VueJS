<template>
  <div>
      <top-menu />
      <div class="section">
        <div class="container">
            <h1 class="title">
              Contact page
            </h1>
            <p class="subtitle">
              Contact content
            </p>
        </div>
      </div>
  </div>
</template>

<script>
import header from '@/components/Header'
export default {
  name: 'contact',
  components: {
    'top-menu': header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
