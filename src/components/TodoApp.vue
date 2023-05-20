<script setup lang="ts">

import { ref, watch, computed, reactive } from 'vue';
import { ITodo } from '../types';
import TodoService from '../services/todo';


defineProps<{ msg: string }>()
const state = reactive({
  count: 0,
  todos: [] as ITodo[],
  newTodoTitle: '',
  pageNo: 1,
  pageSize: 10,
  total: 0,
});

const pageCount = computed(() => Math.ceil(state.total / state.pageSize));

const getTodos = async () => {
  const { data: { data } } = await TodoService.getTodos(state.pageNo, state.pageSize);
  state.total = data.total;
  state.todos = data.todos;
};

watch(() => [state.pageNo, state.pageSize], getTodos, { immediate: true });

</script>

<template>
  <div class="todo-app">
    <div class="header primary-color">
      <font-awesome-icon icon="fa-solid fa-square-check" size="3x" />
      <a-button class="primary-color name" type="link" href="/" size="large">Simple Todo</a-button>
    </div>
    <a-input-group compact class="input-row">
      <a-input v-model:value="state.newTodoTitle" style="width: calc(100% - 200px)" />
      <a-button type="primary" class="primary-bg-color">Submit</a-button>
    </a-input-group>
    <p>{{ pageCount }}</p>
  </div>
</template>

<style scoped lang="scss">
@import "../commonStyles.scss";

.todo-app {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  height: 800px;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;

    .name {
      font-weight: bold;
      font-size: 20px;
    }
  }

  .input-row {
    margin-top: 20px;
  }
}
</style>
