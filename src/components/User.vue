<template>
  <div id="users" class="user">
    <mu-icon @click="leftChange" class="swicher" size="150" value="chevron_left" color="red"></mu-icon>
    <mu-avatar size="200" class="avatar">
      <img :src="currentUser.image" />
    </mu-avatar>
    <mu-icon @click="rightChange" class="swicher" size="150" value="chevron_right" color="red"></mu-icon>
  </div>
</template>

<script>
export default {
  name: "User",
  data: () => {
    return {
      currentIndex: 0,
      userNum: lightdm.num_users
    }
  },
  computed:{
    currentUser(){
      return this.$store.state.currentUser
    }
  },
  methods: {
    changeUser(num) {
      this.currentIndex = (this.currentIndex + num +  this.userNum) % this.userNum
      this.$store.commit('changeUser',lightdm.users[this.currentIndex])
    },
    leftChange() {
      this.changeUser(-1)
    },
    rightChange(){
      this.changeUser(1)
    }
  }
};
</script>
<style scoped>
.user {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.avatar {
  box-shadow: 1px 1px 10px 6px rgba(255, 255, 255, 0.3);
}

.swicher {
  margin: 0 5%;
  cursor: pointer;
}
</style>