<template>
  <div id="users" class="user">
    <mu-icon
      @click="changeUser"
      class="swicher"
      size="150"
      value="chevron_left"
      color="red"
    ></mu-icon>
    <mu-avatar :size="avatarSize" class="avatar">
      <img :src="currentUser.image" />
    </mu-avatar>
    <mu-icon
      @click="changeUser"
      class="swicher"
      size="150"
      value="chevron_right"
      color="red"
    ></mu-icon>
  </div>
</template>

<script>
export default {
  name: "User",
  data: () => {
    return {
      users: lightdm.users,
      currentUser: lightdm.users[0],
      currentIndex: 0,
      userNum: lightdm.num_users,

      avatarSize: 200
    };
  },
  methods: {
    changeUser() {
      console.log("change!!!")
      this.currentIndex = (this.Index + 1 + this.userNum) % this.userNum;
      this.currentUser = this.users[this.currentIndex];
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