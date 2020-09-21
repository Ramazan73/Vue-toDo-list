<template>
<div>
  <div class="add_task">
    <div class="add_task__input">
      <input type="text" v-model="new_task.title" placeholder="новая задача">
      <input type="text" v-model="new_task.priority" placeholder="приоритет">
      <button @click="add_task()" class="add_task__btn">Submit</button>
    </div>
    <textarea v-model="new_task.desc" placeholder="Описание"></textarea>
  </div>
  <div class="task-filter">
    <input type="text" v-model="title" placeholder="введите название">
  </div>
  <div class="stats">
    <task v-on:task_done="delete_task(index)" :data=data v-for="(data, index) in tasksFiltered" :key="index"></task>
  </div>
  <h3 class="stats__title">{{"Текущих задач: "+ allTasks.length}}</h3>
</div>
</template>

<script>
import Task from './Task.vue'

export default {
  components: {
    Task
  },
  data() {
    return {
      title: '',
      new_task: {
        title: '',
        desc: ''
      }
    }
  },
  computed:{
    allTasks() {
      return this.$store.getters.allTasks;
    },
    tasksFiltered: function(){
      var taskTitle = this.title;
      return this.allTasks.filter(function (elem) {
        if(taskTitle === '') return true;
        else return elem.title.indexOf(taskTitle) > -1;
      })
    }
  },
  methods: {
    delete_task(id) {
      this.allTasks.splice(id, 1)
    },
    add_task() {
      this.$store.dispatch('addNewTask', {...})
    }
  },
}
</script>