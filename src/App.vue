<template>
  <div id="app">
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
      <task v-on:task_done="delete_task(index)" :data="data" v-for="(data, index) in tasksFiltered" :key="index"></task>
    </div>
    <h3 class="stats__title">{{"Текущих задач: "+ tasks.length}}</h3>
  </div>
</template>

<script>

import Task from './components/Task.vue'
export default {
  name: 'App',

  components: {
    Task
  },
  data() {
    return {
      title: '',
      new_task: {
        title: '',
        desc: ''
      },
      tasks: [
        {
          title: 'Изучить Javascript',
          priority: 'низкий',
          desc: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например 1',
        },
        {
          title: 'Изучить Vue',
          priority: 'средний',
          desc: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например 2',
        },
        {
          title: 'Изучить Angular',
          priority: 'высокий',
          desc: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например 3',
        },
        {
          title: 'Изучить React',
          priority: 'низкий',
          desc: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например 4',
        },
        {
          title: 'Изучить Angular',
          priority: 'высокий',
          desc: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например 3',
        },
        {
          title: 'Изучить React',
          priority: 'низкий',
          desc: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например 4',
        }
      ]
    }
  },
  computed:{
    tasksFiltered: function(){
      var taskTitle = this.title;
      return this.tasks.filter(function (elem) {
        if(taskTitle === '') return true;
        else return elem.title.indexOf(taskTitle) > -1;
      })
    }
  },
  methods: {
    delete_task(id) {
      this.tasks.splice(id, 1)
    },
    add_task() {
      if(this.new_task.title != '') {
        this.tasks.push({
          title: this.new_task.title,
          priority: this.new_task.priority,
          desc: this.new_task.desc
        });
        this.new_task.title='';
        this.new_task.priority='';
        this.new_task.desc='';
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
:root {
  --main: #2F4858;
  --white: #fff;
}
* {
  padding: 0;
  margin: 0;
  transition: all 0.3s;
}
#app{
  width: 960px;
  box-shadow: 0 3px 20px #00000023;
  font-family: 'Gilroy', sans-serif;
  padding: 10px;
  margin: 20px auto;
  color: var(--main);
}
.stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
}
.stats__title {
  margin: -10px -10px 10px -10px;
  padding: 10px;
  background-color: var(--main);
  color: var(--white);
  font-weight: 500;
}
.task {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: -10px -10px 10px -10px;
  padding: 10px;
  max-width: 30%;
  text-align: left;
}
.task:hover {
  background-color: #2f485811;
}
.task__title {
  font-size: 18px;
}
.task__desc {
  font-weight: 500;
  font-size: 16px;
}
.task__done {
  height: 30px;
  width: 30px !important;
  border: none;
  background-color: unset;
}
.task__done:hover {
  cursor: pointer;
  border-radius: 4px;
  background-color: #9ee493bb;
}
.add_task {
  display: flex;
  margin-bottom: 20px;
}
.add_task__input {
  width: 50%;
  text-align: left;
}
input {
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 0 5px 5px;
  font-family: 'Gilroy',sans-serif;
  border: 2px solid #2f485811;
  border-radius: 4px;
}
textarea {
  width: 50%;
  padding: 5px 0 5px 5px;
  font-family: 'Gilroy',sans-serif;
  border: 2px solid #2f485811;
  border-radius: 4px;
}
.add_task__input input {
  margin-bottom: 5px;
}
.add_task__btn {
  background-color: unset;
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 0 5px 5px;
  font-family: 'Gilroy',sans-serif;
  border: 2px solid #2f485811;
  background-color: var(--main);
  color: #fff;
  border-radius: 4px;
}
.add_task__btn:hover {
  cursor: pointer;
  border-radius: 4px;
  background-color: #2f485811;
  color: black;
}

</style>
