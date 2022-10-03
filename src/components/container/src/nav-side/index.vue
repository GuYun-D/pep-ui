<template>
  <!-- <el-menu
    :collapse="collapse"
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
  >
    <el-menu-item index="1">
      <el-icon-menu></el-icon-menu>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon-menu></el-icon-menu>
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon-menu></el-icon-menu>
      <span>趋势标记</span>
    </el-menu-item>
  </el-menu> -->

  <pep-menu
    :collapse="collapse"
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="$route.path"
    text-color="#fff"
    :data="data"
  ></pep-menu>
</template>

<script setup lang="ts">
import { MenuItem } from "../../../menu/src/types";

const props = defineProps<{
  collapse: boolean;
}>();

const data: MenuItem[] = [
  {
    name: "首页",
    index: "/",
    icon: "HomeFilled",
  },
  {
    name: "图标选择器",
    index: "/icon",
    icon: "Check",
  },
  {
    name: "趋势标记",
    index: "trend",
    icon: "Sort",
  },
  {
    name: "时间选择器",
    index: "/time",
    icon: "Timer",
  },
  {
    name: "导航菜单",
    index: "/menu",
    icon: "SwitchFilled",
  },
  {
    name: "省市区选择",
    index: "/area",
    icon: "Location",
  },
  {
    name: "城市选择",
    index: "/city",
    icon: "School",
  },
  {
    name: "进度条",
    index: "/progress",
    icon: "DArrowRight",
  },
  {
    name: "日历",
    index: "/cacendar",
    icon: "Discount",
  },
  {
    name: "表单",
    index: "/form",
    icon: "ScaleToOriginal",
  },
  {
    name: "表格",
    index: "/table",
    icon: "Grid",
  },
];
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>