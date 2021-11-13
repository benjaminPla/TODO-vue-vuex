<template>
  <form>
    <div class='oneLineInputs'>
      <input type='text' v-model='inputValue' @input='displayInputs' maxlength="15" placeholder="New Task..." />
      <button type='submit' v-show='display' @click.prevent='addTaskParams'>Add</button>
    </div>
    <textarea v-model='textAreaValue' v-show='display' maxlength="30" placeholder="Description..." />
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
  margin: 10px 0;
  input {
    @include inputReset;
    width: 100%;
  }
  input::placeholder{
    color: $color2;
    font-size: 0.75rem;
  }
  button {
    @include inputReset;
    color: $color3;
    cursor: pointer;
    transition: 0.2s;
  }
  button:hover {
    transform: scale(1.05);
  }
}
textarea {
  @include inputReset;
  width: 100%;
  resize: none;
}
textarea::placeholder{
  color: $color2;
  font-size: 0.75rem;
}
</style>
