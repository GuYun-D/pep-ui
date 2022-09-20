<template>
  <el-container>
    <el-container>
      <el-aside width="auto">
        <el-menu
          :collapse="collapse"
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <el-icon-menu></el-icon-menu>
            <span>导航一</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon-menu></el-icon-menu>
            <span>导航一</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon-menu></el-icon-menu>
            <span>导航一</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <el-header>
          <span @click="toggle">
            <el-icon-expand v-if="collapse"></el-icon-expand>
            <el-icon-fold v-else></el-icon-fold>
          </span>
        </el-header>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
const collapse = ref<Boolean>(false);

const toggle = () => {
  collapse.value = !collapse.value;
};
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>