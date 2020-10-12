import Vue from 'vue'
import Router from 'vue-router'
import Task from '../pages/item'
import TaskList from '../components/ProductsList'

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