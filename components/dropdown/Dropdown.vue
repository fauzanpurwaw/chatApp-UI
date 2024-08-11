<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import Popper from "vue3-popper";

interface Data {
  name: string;
  value: string;
}

const { selected, data, onClickItem } = defineProps<{
  selected?: string;
  data?: Array<Data>;
  onClickItem?: any;
  style?: any;
  contentStyle?: any;
  icon?: string;
  smUnhidePlaceholder?: boolean;
}>();
</script>

<template>
  <Popper arrow offset-distance="top-end">
    <div
      class="border rounded h-9 md:w-44 flex justify-between hover:cursor-pointer items-center px-4 text-[12px] text-slate-600 bg-white font-[500]"
      :class="style"
    >
      <div class="hidden md:flex" :class="{ '!flex': smUnhidePlaceholder }">
        {{ selected || "Semua Channel" }}
      </div>
      <Icon
        :name="icon || 'octicon:triangle-down-16'"
        size="16"
        class="bg-slate-500 px-2"
      />
    </div>
    <template #content="{ close }">
      <div
        class="bg-white text-[12px] border relative top-1 rounded md:w-44 md:mr-0 mr-5"
        :class="contentStyle"
      >
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
