<script lang="ts" setup>
const { name } = defineProps<{
  name: string;
}>();
</script>

<template>
  <div class="flex gap-1 flex-col font-semibold text-slate-800">
    <div>{{ name }} <span class="text-red-500">*</span></div>
    <Dropdown
      :selected="name"
      :data="[
        { name: 'test 1', value: 'test 1' },
        { name: 'test 2', value: 'test 2' },
        { name: 'test 3', value: 'test 3' },
      ]"
      :style="{
        '!w-full': true,
      }"
      :content-style="{
        '-top-1': true,
        '!min-w-[286px]': true,
      }"
    />
  </div>
</template>
