<template>
  <div id="app" class="container-fluid">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img src="./assets/logoWeb.png" height="30px">
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home <span class="sr-only">(current)</span></a></li>
            <li><a href="#">Product</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">My Account</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <router-view/>
    <spinner :status="spinnerStatus" :color="spinnerColor" :size="spinnerSize" :depth="spinnerDepth" :clockwise="spinnerClockwise" :speed="spinnerSpeed"></spinner>
  </div>
</template>

<script>
import Spinner from '@c/Spinner.vue'
export default {
  name: 'app',
  components: {
    Spinner
  },
  data() {
      return {
        spinnerSize: 100,
        spinnerStatus: false,
        spinnerColor: '#0e6dcc',
        spinnerDepth: 9,
        spinnerClockwise: true,
        spinnerSpeed: 0.8
      }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
