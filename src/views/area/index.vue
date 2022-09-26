<template>
  <div>
    <Area @change="handleChooseArea"></Area>
  </div>
</template>

<script setup lang="ts">
import Area from "../../components/area/src/index.vue";

let handleChooseArea = (data: any) => {
  console.log(data);
};
</script>

<style scoped>
</style>