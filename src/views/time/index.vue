<template>
  <div>
    <pep-time @endChange="handleChange"></pep-time>
  </div>
</template>

<script setup lang="ts">
const handleChange = (time: { startTime: String; endTime: string }) => {
  console.log(time);
};
</script>

<style scoped>
</style>