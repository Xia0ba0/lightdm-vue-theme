<template>
<div class="test">
  <h1>{{msg}}</h1>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted: function(){
    setTimeout(()=>{
      this.$emit('blur')
    },1000)
  },
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<style scoped>
.test {
  font-size: 45px;
  font-weight: bold;
}
</style>
