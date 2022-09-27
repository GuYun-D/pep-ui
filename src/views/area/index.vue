<template>
  <div>
    <pep-area @change="handleChooseArea"></pep-area>
  </div>
</template>

<script setup lang="ts">
let handleChooseArea = (data: any) => {
  console.log(data);
};
</script>