<template>
  <form>
    <div class='oneLineInputs'>
      <input type='text' v-model='inputValue' @input='displayInputs' placeholder="New Task..." />
      <button type='submit' v-show='display' @click.prevent='addTaskParams'>Add</button>
    </div>
    <textarea v-model='textAreaValue' v-show='display' placeholder="Description..." />
  </form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Inputs',
  data(){
    return{
      inputValue: '',
      textAreaValue: '',
      display: false,
    };
  },
  methods: {
    displayInputs() {
      this.inputValue !== '' ? this.display = true : this.display = false;
    },
    addTaskParams() {
      this.addTask({ title: this.inputValue, description: this.textAreaValue });
      this.inputValue = '';
      this.textAreaValue = '';
      this.display = false;
    },
    ...mapMutations(['addTask'])
  },
};
</script>

<style scoped lang='scss'>
@import '../variables';

.oneLineInputs {
  display: flex;
  max-width: 100%;
  align-items: center;
  input {
    width: 100%;
    border: none;
    padding: 10px;
    background-color: $color4;
    outline: none;
    margin: 10px 0;
    border-radius: 3px;
  }
  input::placeholder{
    color: $color2;
    font-size: 0.75rem;
  }
  button {
    border: none;
    outline: none;
    // background: none;
    color: $color3;
  }
}
</style>
