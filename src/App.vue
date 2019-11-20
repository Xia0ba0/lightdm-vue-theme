<template>
  <div id="app">
    <div :class="{ 'bg':true, 'bg-scale':ifScale, 'bg-blur':ifBlur}"></div>
    <router-view @blur="flurBackground" class="content"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: ()=>{
    return {
      ifBlur: false,
      ifScale: false
    }
  },
  methods: {
    // it will cause some bug when you trigger the two effect at
    // the same time, and it is very strange if give a transition to blur

    /* listen on blur event and emited by child component */
    flurBackground(){
      this.ifScale = true
      setTimeout(()=>{
        this.ifBlur = true;
      }, 150)
    }
  }
}
</script>

<style scoped>
#app {
  /* app fonts */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  /* app div position */
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

.bg {
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: url('./assets/background.jpg');
}

/* for the scale effect */
.bg-scale {
  /* prevent white edge and add transition*/
  transition: all 0.3s ease-in-out; 
  transform: scale(1.2);
}
/* for the blur effect */
/* no transition */
.bg-blur {
  transition: none;
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(15px);
}

/* content on the background */
 .content {
   z-index: 1;
   top: 0;
   left: 0;
   position: fixed;
   width: 100%;
   height: 100%;
 }
</style>