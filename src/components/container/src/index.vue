<template>
  <el-container>
    <el-aside width="auto">
      <NavSide :collapse="collapse"></NavSide>
    </el-aside>
    <el-container>
      <el-main>
        <el-header>
          <NavHeader v-model:collapse="collapse"></NavHeader>
        </el-header>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavHeader from "./nav-header/index.vue";
import NavSide from "./nav-side/index.vue";

const collapse = ref<Boolean>(false);
</script>

<style scoped lang="scss">
</style>