<template>
  <el-button type="primary" @click="handleChooseIcons">
    <slot> 选择icon </slot>
  </el-button>

  <el-dialog :title="title" v-model="dislogVisible">
    <div class="container">
      <div
        class="item"
        v-for="(icon, index) in Object.keys(Icons)"
        :key="index"
        @click="handleCopyIconClass(icon)"
      >
        <div>
          <component :is="`el-icon-${toLine(icon)}`"></component>
        </div>
        <div>{{ icon }}</div>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import * as Icons from "@element-plus/icons";

import { toLine } from "../../../utils";
import { useCopy } from "../../../hooks/useCopy";

const props = defineProps<{
  title: string;
  visible: boolean;
}>();

const emits = defineEmits(["update:visible"]);
const dislogVisible = ref<boolean>(props.visible);

const handleChooseIcons = () => {
  emits("update:visible", !props.visible);
};

const handleCopyIconClass = (icon: string) => {
  let iconComponentText = `<el-icon-${toLine(icon)} />`;
  useCopy(iconComponentText);
  dislogVisible.value = false;
};

watch(
  () => props.visible,
  (val) => {
    dislogVisible.value = val;
  }
);

watch(
  () => dislogVisible.value,
  (val) => {
    emits("update:visible", val);
  }
);
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .item {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    font-size: 14px;
    height: 70px;
  }

  svg {
    width: 2em;
    height: 2em;
  }
}
</style>