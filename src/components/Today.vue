<template>
  <div class='today'>
    <h1>{{ text }}</h1>
    <h2>{{ clock }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Today',
    data(){
      return{
        text: new Date().toLocaleDateString(undefined, { weekday: 'long' }),
        clock: null
      }
    },
    created(){
      setInterval(() => {
        this.clock = new Date().toLocaleTimeString('en-US')
      }, 1000);
    }
  }
</script>

<style scoped lang='scss'>
.today {
  text-align: center;
  font-size: 0.7rem;
  padding: 30px 0;
  h1{
    font-size: 1.5rem;
    font-weight: 500;
  }
  h2{
    font-weight: 100;
  }
}
</style>
