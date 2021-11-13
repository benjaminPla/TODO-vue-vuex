<template>
  <div class='task'>
    <div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <button>...</button>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: ['title', 'description']
}
</script>

<style scoped lang='scss'>
@import '../variables';

.task{
  transition: 0.2s;
  background-color: $color2;
  margin: 5px 0;
  padding: 10px;
  border-left: 5px solid $color5;
  display: flex;
  justify-content: space-between;
  h3 {
    color: $color5;
    font-weight: 300;
  }
  p {
    font-size: 0.7rem;
    font-weight: 100;
  }
  button {
    border: none;
    outline: none;
    background: $color1;
    color: $color4;
    font-weight: 700;
    height: 20px;
    width: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  button:hover {
    background-color: $color4;
    color: $color1;
  }
}
.task:hover {
  transform: scale(1.05);
}
</style>
