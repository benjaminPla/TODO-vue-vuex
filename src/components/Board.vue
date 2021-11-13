<template>
  <ul>
    <li v-for='(task, index) in tasks' :key='index'>
      <Task :title='task.title' :description='task.description'/>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
import Task from './Task.vue';

export default {
  name: "Board",
  components: { Task },
  // data() {
  //   return {
  //     optionsDisplay: false,
  //   };
  // },
  computed: {
    ...mapState(["tasks"]),
  },
  // methods: {
  //   toggleOptionsDisplay() {
  //     this.optionsDisplay = !this.optionsDisplay;
  //   },
  // },
};
</script>

<style scoped lang='scss'>
@import '../variables';

ul {
  padding: 10px 0;
  list-style: none
}
// .completed {
//   text-decoration: line-through;
//   color: $color4;
// }
// .pinned {
//   border-bottom: 1px solid $color3;
//   padding-bottom: 10px;
//   width: 100%;
// }
</style>
