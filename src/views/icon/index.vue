<template>
  <div class="pep-icon">
    <pep-icon title="选择图标" v-model:visible="visible"></pep-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const visible = ref<boolean>(false);
</script>

<style scoped>
</style>