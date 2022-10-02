<template>
  <div style="width: 200px">
    <pep-menu
      background-color="#f40"
      :default-active="1"
      :data="data1"
    ></pep-menu>
  </div>
</template>

<script setup lang="ts">
import { MenuItem } from "../../components/menu/src/types";
const data1: MenuItem[] = [
  {
    name: "导航一",
    index: "1",
    icon: "document",
  },
  {
    name: "导航二",
    index: "2",
    icon: "document",
  },
  {
    name: "导航三",
    index: "3",
    icon: "document",
    children: [
      {
        name: "导航2.1",
        index: "2.1",
      },
      {
        name: "导航2.2",
        index: "2.2",
      },
    ],
  },
];
</script>

<style scoped>
</style>