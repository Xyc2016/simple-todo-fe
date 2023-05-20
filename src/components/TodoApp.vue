<script setup lang="ts">

import { ref, watch } from 'vue';
import request from '../libs/request';
import { ITodo } from '../types';

import { Button, message, Col, Row, } from 'ant-design-vue';

defineProps<{ msg: string }>()
const newTodoTitle = ref('');
const pageNo = ref(1);
const pageSize = ref(10);

console.log(request.get<ITodo>("/todo?id=2"))

</script>

<template>
  <div class="todo-app">
    <div class="header primary-color">
      <font-awesome-icon icon="fa-solid fa-square-check" size="3x" />
      <a-button class="primary-color name" type="link" href="/" size="large">Simple Todo</a-button>
    </div>
    <a-input-group compact class="input-row">
      <a-input v-model:value="newTodoTitle" style="width: calc(100% - 200px)" />
      <a-button type="primary" class="primary-bg-color">Submit</a-button>
    </a-input-group>
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
