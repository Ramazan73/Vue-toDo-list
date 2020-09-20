import Vue from 'vue'
import Router from 'vue-router'
import Task from '../components/Task'
import TaskList from '../components/TaskList'

Vue.use(Router);

let router = new Router( {
    routes: [
        {
            path: '/task/:id',
            name: 'task',
            component: Task,
            props: true
        },
        {
            path: '/task-list',
            name: 'taskList',
            component: TaskList
        },
    ]
});

export default router;