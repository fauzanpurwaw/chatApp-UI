<script setup lang="ts">
import Popper from 'vue3-popper';
</script>

<template>
  <div class="md:flex justify-between w-full py-3 pl-4 pr-2 hidden border-b">
    <Popper arrow offset-distance="top-end">
      <div class="flex items-center gap-1 cursor-pointer">
        <div class="font-semibold text-sm">Open</div>
        <div class="font-semibold text-[13px] text-slate-400">8</div>
        <Icon name="octicon:chevron-down-24" size="20" class="bg-slate-700" />
      </div>
      <template #content>
        <div class="border p-1 rounded bg-white text-[12px] mt-1">Display</div>
      </template>
    </Popper>
    <div class="flex items-center gap-1">
      <div
        class="rounded-full hover:bg-slate-100 px-2 flex items-center justify-center duration-200 cursor-pointer"
      >
        <Icon
          name="bi:sort-up-alt"
          size="22"
          class="bg-blue-500"
        />
      </div>
    </div>
  </div>
</template>
