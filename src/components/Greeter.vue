<template>
<div class="test">
  <h1>{{username}}</h1>
  <User />
</div>
</template>

<script>
import User from './User'

export default {
  components:{
    User
  },
  name: 'Greeter',  
  mounted: function(){
    setTimeout(()=>{
      this.$emit('blur')
    },1000)
  },
  data () {
    return {
      msg: lightdm.users[0].name
    }
  },
  computed:{
    username(){
      return this.$store.state.currentUser.name
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
