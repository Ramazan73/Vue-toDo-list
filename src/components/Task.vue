<template>
    <div class="task">
        <div>
            <h3 class="task__title">{{ data.title }} </h3>
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
    }
}
</script>
