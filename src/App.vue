<template>
  <div class='app'>
    <Today />
    <Inputs />
    <Board />
  </div>
</template>

<script>
import Today from './components/Today.vue'
import Inputs from './components/Inputs.vue'
import Board from './components/Board.vue'

export default {
  name: 'App',
  components: {
    Today,
    Inputs,
    Board
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap');
@import './variables';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  align-items: center;
  background: linear-gradient(135deg, #FFC0CB 50%, #00FFFF 50%);
  display: flex;
  height: 100vh;
  justify-content: center;
  .app {
    background-color: $color5;
    color: $color1;
    font-family: 'Roboto', sans-serif;
    padding: 30px;
    border-radius: 3px;
    min-width: 300px;
  }
}
</style>
