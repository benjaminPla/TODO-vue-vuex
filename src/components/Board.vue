<template>
  <ul>
    <li v-for='(task, index) in tasks' :key='index'>
      <div v-if='task.pinned' class='pinned task'>
        <input type='checkbox' v-model='task.completed'/>
        <div>
          <h3>{{ task.title }}</h3>
          <p>{{ task.description }}</p>
        </div>
        <div class='optionsContainer'>
          <button @click.prevent='toggleOptionsDisplay'>...</button>
          <Options v-if='optionsDisplay' class='options' />
        </div>
      </div>
    </li>
  </ul>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <div v-if='!task.pinned' class='task'>
        <input type='checkbox' v-model='task.completed'/>
        <div>
          <h3>{{ task.title }}</h3>
          <p>{{ task.description }}</p>
        </div>
        <div class='options'>
          <button>...</button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
import Options from './Options.vue';

export default {
  name: "Board",
  components: { Options },
  data() {
    return {
      optionsDisplay: false,
    };
  },
  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    toggleOptionsDisplay() {
      this.optionsDisplay = !this.optionsDisplay;
    },
  },
};
</script>

<style scoped lang='scss'>
@import '../variables';

ul {
  padding: 10px 0;
  list-style: none
}
.task {
  display: grid;
  grid-template-columns: 25px 1fr 70px;
  .optionsContainer {
    text-align: right;
    position: relative;
    button {
      background: none;
      border: none;
      height: 5px;
      font-size: 1.1rem;
      color: $color1;
      cursor: pointer;
    }
    .options {
      position: absolute;
    }
    .options::after {
      content: '';
      width: 0;
      height: 0;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-bottom: 3px solid $color4;
      position: absolute;
      top: -3px;
      right: 3px;
    }
}
}
.pinned {
  border-bottom: 1px solid $color3;
  padding-bottom: 10px;
  width: 100%;
}
</style>
