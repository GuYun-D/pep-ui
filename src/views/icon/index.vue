<template>
  <div class="pep-icon">
    <Icon title="选择图标" v-model:visible="visible"></Icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Icon from "../../components/icon/src/index.vue";
const visible = ref<boolean>(false);
</script>

<style scoped>
</style>