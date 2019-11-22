<template>
  <div class="clockContainer">
    <div class="clock">{{time.toLocaleTimeString()}}</div>
  </div>
</template>

<script>
export default {
  name: "Clock",
  mounted() {
    setInterval(() => {
      this.refreshTime();
    }, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
  data() {
    return {
      timer: -1,
      time: new Date()
    };
  },
  methods: {
    refreshTime() {
      this.time = new Date();
    }
  }
};
</script>

<style scoped>
.clockContainer{
    width: 100%;
    height: 100%;
    margin: 0;
}
.clock {
  position: relative;
  font-size: 110px;
  text-align: left;
  top: 75%;
  left: 5%;
}
</style>