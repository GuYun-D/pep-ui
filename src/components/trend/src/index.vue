<template>
  <div class="pep-trend-container">
    <div class="text" :style="{ color: textColor }">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <component
        :is="`el-icon-${toLine(upIcon)}`"
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
        v-if="type === 'up'"
      ></component>

      <component
        :is="`el-icon-${toLine(downIcon)}`"
        :style="{
          color: !reverseColor ? downIconColor : '#f5222d',
        }"
        v-else
      ></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, useSlots } from "vue";
import { toLine } from "../../../utils";

const slots = useSlots();

const props = defineProps({
  type: {
    type: String,
    default: "up",
  },

  text: {
    type: String,
    default: "文字",
  },

  upIcon: {
    type: String,
    default: "ArrowUp",
  },

  downIcon: {
    type: String,
    default: "ArrowDown",
  },

  upIconColor: {
    type: String,
    default: "#f5222d",
  },

  downIconColor: {
    type: String,
    default: "#52c41a",
  },

  reverseColor: {
    type: Boolean,
    default: false,
  },

  upTextColor: {
    type: String,
    default: "rgba(0, 0,0 )",
  },

  downTextColor: {
    type: String,
    default: "rgba(0, 0,0 )",
  },
});

const textColor = computed(() => {
  return props.type === "up" ? props.upTextColor : props.downTextColor;
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