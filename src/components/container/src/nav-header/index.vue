<template>
  <span @click="toggle">
    <el-icon-expand v-if="collapse"></el-icon-expand>
    <el-icon-fold v-else></el-icon-fold>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  collapse: boolean;
}>();

const emits = defineEmits(["update:collapse"]);

const toggle = () => {
  emits("update:collapse", !props.collapse);
};
</script>

<style lang="scss" scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>