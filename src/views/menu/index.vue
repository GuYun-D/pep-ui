<template>
  <div style="width: 200px">
    <!-- <pep-menu
      background-color="#f40"
      default-active="1"
      :data="data1"
      name="a"
      index="b"
      icon="c"
    ></pep-menu> -->

    <pep-infinte-menu background-color="#f20" :data="data2"></pep-infinte-menu>
  </div>
</template>

<script setup lang="ts">
const data1 = [
  {
    name: "导航一",
    index: "1",
    icon: "Document",
  },
  {
    name: "导航二",
    index: "2",
    icon: "Document",
  },
  {
    name: "导航三",
    index: "3",
    icon: "Document",
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

const data2 = [
  {
    name: "导航一",
    index: "1",
    icon: "Document",
  },
  {
    name: "导航二",
    index: "2",
    icon: "Document",
  },
  {
    name: "导航三",
    index: "3",
    icon: "Document",
    children: [
      {
        name: "导航2.1",
        index: "2.1",
      },
      {
        name: "导航2.2",
        index: "2.2",
        children: [
          {
            name: "导航2.2.1",
            index: "2.2.1",
          },
          {
            name: "导航2.2.2",
            index: "2.2.2",
            children: [
              {
                name: "导航2.2.2.1",
                index: "2.2.2.1",
              },
              {
                name: "导航2.2.2.2",
                index: "2.2.2.2",
              },
            ],
          },
        ],
      },
    ],
  },
];
</script>

<style scoped>
</style>