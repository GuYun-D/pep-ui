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
import { useTooltipContentProps } from "element-plus";
import { computed, onMounted, useSlots } from "vue";
import { toLine } from "../../../utils";

const slots = useSlots();

const props = withDefaults(
  defineProps<{
    type?: "up" | "down";
    text?: string;
    upIcon?: string;
    downIcon?: string;
    upIconColor?: string;
    downIconColor?: string;
    reverseColor?: boolean;
    upTextColor?: string;
    downTextColor?: string;
  }>(),
  {
    type: "up",
    text: "文字",
    upIcon: "ArrowUp",
    downIcon: "ArrowDown",
    upIconColor: "#f5222d",
    downIconColor: "#52c41a",
    reverseColor: false,
    upTextColor: "rgba(0, 0,0 )",
    downTextColor: "rgba(0, 0,0 )",
  }
);

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