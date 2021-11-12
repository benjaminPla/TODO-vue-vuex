import { createStore } from 'vuex';

export default createStore({
    state: {
      testStore: false,
      tasks: [
        { id: 0, title: 'task 1', description: 'blah blah...', completed: false, pinned: false },
        { id: 1, title: 'task 2', description: 'blah blah blah...', completed: true, pinned: true },
        ],
    },
    mutations: {
      addTask: (state, task) => {
        state.tasks.push(task);
      },
    },
});
