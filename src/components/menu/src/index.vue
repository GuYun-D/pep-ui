<template>
  <el-menu :default-active="defaultActive" :router="router" v-bind="$attrs">
    <template v-for="(menu, index) in data" :key="index">
      <!-- 没有二级 -->
      <el-menu-item
        v-if="!menu.children || !menu.children.length"
        :index="menu.index"
      >
        <component
          v-if="menu.icon"
          :is="`el-icon-${toLine(menu.icon)}`"
        ></component>
        <span>{{ menu.name }}</span>
      </el-menu-item>

      <!-- 存在二级 -->
      <el-sub-menu
        :index="menu.index"
        v-if="menu.children && menu.children.length"
      >
        <template #title>
          <component
            v-if="menu.icon"
            :is="`el-icon-${toLine(menu.icon)}`"
          ></component>
          <span>{{ menu.name }}</span>
        </template>
        <el-menu-item
          v-for="(child, childIndex) in menu.children"
          :key="childIndex"
        >
          <component
            v-if="child.icon"
            :is="`el-icon-${toLine(child.icon)}`"
          ></component>
          <span>{{ child.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { MenuItem } from "./types";
import { toLine } from "../../../utils";

const props = withDefaults(
  defineProps<{
    data: MenuItem;
    defaultActive: string; 
    router: boolean; 
  }>(),
  {
    defaultActive: "",
    router: true,
  }
);
</script>

<style scoped lang="scss">
svg {
  margin-right: 5px;
  width: 1em;
  height: 1em;
}
</style>