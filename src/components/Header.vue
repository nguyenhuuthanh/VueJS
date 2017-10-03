<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://bulma.io">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
        <router-link class="navbar-item" to="/"><span class="bd-emoji">⭐️</span>Home</router-link>
        <router-link class="navbar-item" to="/about"><span class="bd-emoji">❤️</span>About</router-link>
        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'header',
  created: function () {
    console.log('Header created')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
