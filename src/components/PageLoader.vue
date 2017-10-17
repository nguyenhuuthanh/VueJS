<template>
  <div class="loader">
    <div class="loader-inner loading">
      <div class="loading-box">
        <div class="circular-loader"></div>
        <div class="loader-message">Loading...</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(74, 74, 74, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader-inner {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(74, 74, 74, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-transition: width .5s, height 1s;
  /* For Safari 3.1 to 6.0 */
  transition: width .5s, height 1s;
}

.loading-box {
  text-align: center;
  width: 100%;
  padding: 2em;
}

.loader-message {
  padding: 1em 0;
  color: white;
}

.circular-loader {
  border: 3px solid #f3f3f3;
  /* Light grey */
  border-top: 3px solid #444;
  /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
  margin: 0 auto;
  transition: all .5s ease-out;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circular-loader:before,
.circular-loader:after {
  content: '';
  height: 0px;
  width: 0px;
  background-color: white;
  position: absolute;
  -webkit-transition: height .5s;
  /* For Safari 3.1 to 6.0 */
  transition: height .5s;
}

.circular-loader:before {
  transform: rotate(50deg);
}

.circular-loader:after {
  transform: rotate(130deg);
}
</style>
