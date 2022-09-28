<template>
  <div class="pep-trend-container">
    <div class="text">{{ text }}</div>
    <div class="icon">
      <el-icon-arrowup
        :style="{ color: upIconColor }"
        v-if="type === 'up'"
      ></el-icon-arrowup>
      <el-icon-arrowdown
        :style="{
          color: downIconColor,
        }"
        v-else
      ></el-icon-arrowdown>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: "up",
  },

  text: {
    type: String,
    default: "文字",
  },

  upIconColor: {
    type: String,
    default: "#f5222d",
  },

  downIconColor: {
    type: String,
    default: "#52c41a",
  },
});
</script>

<style scoped lang='scss'>
.pep-trend-container {
  display: flex;
  align-items: center;

  .text {
    font-size: 12px;
    margin-right: 4px;
  }

  .icon {
    svg {
      width: 0.8em;
      height: 0.8em;
    }
  }
}
</style>