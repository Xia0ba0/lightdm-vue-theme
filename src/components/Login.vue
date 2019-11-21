<template>
  <div class="loginBox">
      <input type="password">
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      password: ""
    };
  }
};
</script>
<style scoped>
.loginBox {
  width: 500px;
  margin: 0 auto;
}

input{
    text-align: center;
    font-size: 50px;
    background-color: rgba(0,0,0,0);
    border-style: none;
    outline: none;
    width: 100%;
}
</style>