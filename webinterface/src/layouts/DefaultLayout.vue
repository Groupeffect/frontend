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
  /* animation: color-change 90s infinite; */
  /* animation-timing-function: linear; */
  background-color:black;
  background-image: url('/src/assets/background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

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
  0% { background: rgba(214, 95, 65, 0.0); }
  25% { background: rgb(230, 230, 104); }
  50% { background: rgba(114, 147, 196, 0.836); }
  75% { background: rgb(30, 128, 30); }
  90% { background: rgba(204, 214, 65, 0.795); }
  100% { background: rgba(214, 95, 65, 0.795); }
  
}
</style>
