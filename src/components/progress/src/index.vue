<template>
  <el-progress v-bind="$attrs" :percentage="p"></el-progress>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue-demi";

const props = withDefaults(
  defineProps<{
    percentage: number;
    isAnimattion?: boolean;
    time?: number;
  }>(),
  {
    isAnimattion: false,
    time: 2000,
  }
);

const p = ref<number>(0);

onMounted(() => {
  if (props.isAnimattion) {
    let t = Math.ceil(props.time / props.percentage);

    let timer = setInterval(() => {
      p.value += 1;
      if (p.value >= props.percentage) {
        p.value = props.percentage;
        clearInterval(timer);
      }
    }, t);
  } else {
    p.value = props.percentage;
  }
});
</script>
