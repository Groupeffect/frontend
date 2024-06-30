<template>
  <div>
      <router-view/>
  </div>
</template>
<script>
export default {
    name: 'DefaultLayout',
    computed:{
    }

}
</script>


<style>
html, body {
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  /* background-color:black; */
  background-image: url('/src/assets/background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
}
.bgColour {
  background-color: rgb(7, 13, 43);

}

.overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: color-change 90s infinite;
  /* animation-timing-function: linear; */
}

.align-left {
    text-align: left;
}
.mw-120 {
    min-width: 120px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dynamic-animation {
    animation: color-change 90s infinite;
    animation-timing-function: linear;
}

.dynamic-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; 
    height: 100%;
}

@keyframes color-change {
  0% { background-color: rgba(0, 0, 0, 0); }
  50% { background-color: rgba(87, 0, 19, 0.493); }
  100% { background-color: rgba(0, 0, 0, 0); }

  
}
</style>
