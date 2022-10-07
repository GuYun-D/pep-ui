<template>
  <div class="pep-time-container">
    <div>
      <el-time-select
        v-model="startTime"
        :placeholder="startPlaceholder"
        :start="startTimeStart"
        :step="startStep"
        :end="startTimeEnd"
        v-bind="$attrs.startOptions"
      >
      </el-time-select>
    </div>

    <div>
      <el-time-select
        v-model="endTime"
        :placeholder="endPlaceholder"
        :start="endTimeStart"
        :step="endStep"
        :end="endTimeEnd"
        :min-time="startTime"
        :disabled="endTimeDisabled"
        v-bind="$attrs.endOptions"
      >
      </el-time-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const emits = defineEmits(["startChange", "endChange"]);

const props = withDefaults(
  defineProps<{
    startPlaceholder?: string;
    startTimeStart?: string;
    startStep?: string;
    startTimeEnd?: string;

    endPlaceholder?: string;
    endTimeStart?: string;
    endStep?: string;
    endTimeEnd?: string;
  }>(),
  {
    startPlaceholder: "请选择开始时间",
    startTimeStart: "08:00",
    startStep: "00:30",
    startTimeEnd: "20:00",

    endPlaceholder: "请选择结束时间",
    endTimeStart: "08:00",
    endStep: "00:30",
    endTimeEnd: "20:00",
  }
);

const startTime = ref<string>("");
const endTime = ref<string>("");

const endTimeDisabled = ref<boolean>(true);

watch(
  () => startTime.value,
  (val: string) => {
    if (val === "") {
      endTime.value = "";
      endTimeDisabled.value = true;
    } else {
      endTimeDisabled.value = false;
      emits("startChange", val);
    }
  }
);

watch(
  () => endTime.value,
  (val: string) => {
    if (val !== "") {
      emits("endChange", {
        startTime: startTime.value,
        endTime: endTime.value,
      });
    }
  }
);
</script>

<style lang="scss" scoped>
.pep-time-container {
  display: flex;
  align-items: center;
}

.svg {
  margin-right: 0;
}
</style>