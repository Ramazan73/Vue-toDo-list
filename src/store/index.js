import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: [
            {
                title: 'Изучить Javascript',
                priority: 'низкий',
                id: 1,
                desc: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например 1',
            },
            {
                title: 'Изучить Vue',
                priority: 'средний',
                id: 2,
                desc: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например 2',
            },
            {
                title: 'Изучить Angular',
                priority: 'высокий',
                id: 3,
                desc: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например 3',
            },
            {
                title: 'Изучить React',
                priority: 'низкий',
                id: 4,
                desc: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например 4',
            },
            {
                title: 'Изучить Angular',
                priority: 'высокий',
                id: 5,
                desc: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например 3',
            },
            {
                title: 'Изучить React',
                priority: 'низкий',
                id: 6,
                desc: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например 4',
            }
        ]
    },
    mutations: {

    },
    actions: {

    },
    modules: {

    },
    getters: {
        allTasks(state) {
            return state.tasks
        },
        getProduct: state => id => {
            return state.tasks.find(item => +item.id === +id) || null
        }
    }
})
