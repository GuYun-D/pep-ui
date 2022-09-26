<template>
  <div>
    <el-select placeholder="请选择省份" v-model="province">
      <el-option
        v-for="item in areas"
        :label="item.name"
        :key="item.code"
        :value="item.code"
        >{{ item.name }}</el-option
      >
    </el-select>

    <el-select
      :disabled="!province"
      style="margin: 0 10px"
      placeholder="请选择城市"
      v-model="city"
    >
      <el-option
        v-for="item in selectCity"
        :key="item.code"
        :value="item.code"
        :label="item.name"
        >{{ item.name }}</el-option
      >
    </el-select>

    <el-select
      placeholder="请选择区县"
      :disabled="!province || !city"
      v-model="area"
    >
      <el-option
        v-for="item in selectArea"
        :key="item.code"
        :label="item.name"
        :value="item.code"
        >{{ item.name }}</el-option
      >
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import allArea from "../lib/pca-code.json";

export interface AreaItem {
  name: string;
  code: string;
  children?: AreaItem[];
}

export interface Data {
  name: string;
  code: string;
}

const emits = defineEmits(["change"]);

const province = ref<String>("");
const city = ref<String>("");
const area = ref<String>("");
const areas = ref(allArea);
const selectCity = ref<AreaItem[]>([]);
const selectArea = ref<AreaItem[]>([]);

watch(
  () => province.value,
  (val) => {
    if (val) {
      let cities = areas.value.find(
        (item) => item.code === province.value
      )!.children;

      selectCity.value = cities;
      city.value = "";
      area.value = "";
    }
  }
);

watch(
  () => city.value,
  (val) => {
    if (val) {
      let cities = areas.value.find(
        (item) => item.code === province.value
      )!.children;

      selectArea.value = cities;
      area.value = "";
    }
  }
);

watch(
  () => area.value,
  (val) => {
    if (val) {
      const provinceData: Data = {
        code: province.value as string,
        name:
          province.value &&
          allArea.find((item) => item.code === province.value)!.name,
      };
      const cityData: Data = {
        code: city.value as string,
        name:
          city.value &&
          selectCity.value.find((item) => item.code === city.value)!.name,
      };
      const areaData: Data = {
        code: area.value as string,
        name:
          area.value &&
          selectArea.value.find((item) => item.code === area.value)!.name,
      };

      emits("change", {
        province: provinceData,
        city: cityData,
        area: areaData,
      });
    }
  }
);
</script>
