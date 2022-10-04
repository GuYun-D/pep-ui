<template>
  <el-menu :default-active="defaultActive" :router="router" v-bind="$attrs">
    <el-scrollbar>
      <template v-for="(menu, index) in data" :key="index">
        <!-- 没有二级 -->
        <el-menu-item
          v-if="!menu[children] || !menu[children].length"
          :index="menu.index"
        >
          <component
            v-if="menu[icon]"
            :is="`el-icon-${toLine(menu[icon])}`"
          ></component>
          <span>{{ menu[name] }}</span>
        </el-menu-item>

        <!-- 存在二级 -->
        <el-sub-menu
          :index="menu.index"
          v-if="menu[children] && menu[children].length"
        >
          <template #title>
            <component
              v-if="menu[icon]"
              :is="`el-icon-${toLine(menu[icon])}`"
            ></component>
            <span>{{ menu[name] }}</span>
          </template>
          <el-menu-item
            v-for="(child, childIndex) in menu[children]"
            :key="childIndex"
          >
            <component
              v-if="child[icon]"
              :is="`el-icon-${toLine(child[icon])}`"
            ></component>
            <span>{{ child[name] }}</span>
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-scrollbar>
  </el-menu>
</template>

<script setup lang="ts">
import { toLine } from "../../../utils";

withDefaults(
  defineProps<{
    data: any[];
    defaultActive?: string;
    router?: boolean;
    name?: string;
    index?: string;
    icon?: string;
    children?: string;
  }>(),
  {
    defaultActive: "",
    router: true,
    name: "name",
    index: "index",
    icon: "icon",
    children: "children",
  }
);
</script>

<style scoped lang="scss">
svg {
  margin-right: 10px;
  width: 1em;
  height: 1em;
  cursor: pointer;
}
</style>