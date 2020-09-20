<template>
    <div class="task">
        <div>
          <router-link
              active-class="is-active"
              class="link"
              :to="{ name: 'task', params: { id: data.id } }">
          <h3 class="task__title">{{ data.title }} </h3>
          </router-link>
            <p class="task__desc">{{ data.desc }} </p>
            <p class="task__priority">Приоритет: {{ data.priority }} </p>
        </div>
        <button @click="taskDone()" class="task__done">✔</button>
    </div>
</template>

<script>
export default {
    props: ['data'],
    methods: {
        taskDone() {
            this.$emit('task_done');
        }
    },

}
</script>