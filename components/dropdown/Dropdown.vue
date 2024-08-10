<script setup lang="ts">
import Popper from "vue3-popper";

interface Data {
  name: string;
  value: string;
}

const { selected, data, onClickItem } = defineProps<{
  selected?: string;
  data?: Array<Data>;
  onClickItem?: any;
}>();
</script>

<template>
  <Popper arrow offset-distance="top-end">
    <div
      class="border rounded h-9 md:w-44 flex justify-between hover:cursor-pointer items-center px-4 text-[12px] text-slate-600 bg-white font-[500]"
    >
      <div class="hidden md:flex">
        {{ selected || "Semua Channel" }}
      </div>
      <img
        src="/public/svg/triangle-down.svg"
        class="sm:h-4 sm:w-4 h-6 w-6 sm:mb-[2px]"
      />
    </div>
    <template #content="{ close }">
      <div class="bg-white text-[12px] border relative top-1 rounded md:w-44 md:mr-0 mr-5">
        <div
          class="px-2 py-2 flex items-center hover:bg-slate-200 w-full hover:cursor-pointer"
          @click="onClickItem(item?.value), close()"
          :class="{ 'text-blue-600': item?.value === selected }"
          v-for="item in data"
        >
          {{ item?.name }}
        </div>
      </div>
    </template>
  </Popper>
</template>

<style scoped></style>
