<template>
  <div class='options'>
    <button @click.prevent='handlePin'>Pin</button>
    <!-- <button>Edit / Add a MEMO</button> -->
    <button @click.prevent='handleDelete'>Delete</button>
  </div>
</template>

<script>
export default {
  name: 'Options',
  computed: {
    handlePin: () => {
      alert('Pinned!');
    },
    handleDelete: () =>  {
      alert('Deleted!');
    },
  },
}
</script>

<style scoped lang="scss">
@import '../variables';

.options {
  background-color: $color4;
  padding: 5px;
  width: 100%;
  button {
    width: 100%;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    color: $color1;
    margin: 3px 0;
  }
  button:hover {
    background-color: $color5;
  }
}
</style>
