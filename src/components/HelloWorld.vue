<template>
<div class="test">
  <h1>{{msg}}</h1>
  <User />
</div>
</template>

<script>
import User from './User'

export default {
  components:{
    User
  },
  name: 'HelloWorld',
  mounted: function(){
    setTimeout(()=>{
      this.$emit('blur')
    },1000)
  },
  data () {
    return {
      msg: lightdm.users[0].name
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
