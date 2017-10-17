<template>
  <div>
    <div class="section">
      <div class="container">
         Trang home
      </div>
      <spinner :status="spinnerStatus" :color="spinnerColor" :size="spinnerSize" :depth="spinnerDepth" :clockwise="spinnerClockwise" :speed="spinnerSpeed"></spinner>
    </div>
  </div>
</template>

<script>
import Spinner from '@c/Spinner.vue'
export default {
  name: 'home',
  components: {
    Spinner
  },
  data() {
    return {
        spinnerSize: 50,
        spinnerStatus: true,
        spinnerColor: '#627794',
        spinnerDepth: 3,
        spinnerClockwise: true,
        spinnerSpeed: 0.8,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
