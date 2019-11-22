<template>
  <div>
    <div v-if="ifShow">
      <User class="userBox" />
      <Login />
    </div>
      <Clock v-else/>
  </div>
</template>

<script>
import User from "./User";
import Login from "./Login";
import Clock from "./Clock"

export default {
  components: {
    User,
    Login,
    Clock
  },
  computed: {
    ifShow() {
      return this.$store.state.ifShowLogin;
    }
  },
  name: "Greeter"
};
</script>

<style scoped>
.userBox {
  margin-top: 60px;
}
</style>
