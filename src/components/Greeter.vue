<template>
<div v-if="ifShow">
  <User class="userBox" />
  <Login />
</div>
</template>

<script>
import User from './User'
import Login from './Login'

export default {
  components:{
    User,
    Login
  },
  computed:{
    ifShow(){
      return this.$store.state.ifShowLogin
    }
  },
  name: 'Greeter'
}
</script>

<style scoped>
.userBox{
  margin-top: 60px;
}
</style>
