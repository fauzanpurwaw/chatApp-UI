<script setup lang="ts">
import Popper from "vue3-popper";

const { openedChat } = storeToRefs(useGeneralStore());

const { onClick } = defineProps<{
  onClick?: any;
}>();
</script>

<template>
  <div
    class="!flex justify-between w-full py-3 pl-4 pr-2 border-b duration-300"
    :class="{ 'hidden': openedChat?.conversations.length !== 0 }"
  >
    <div class="flex items-center gap-1 cursor-pointer h-9 duration-300">
      <div class="font-semibold text-md">Edit Data</div>
    </div>
    <div class="flex items-center gap-">
      <div
        class="rounded-full hover:bg-slate-100 px-2 flex items-center justify-center cursor-pointer duration-100"
        @click="onClick()"
      >
        <Icon name="ic:baseline-close" size="22" class="bg-slate-800" />
      </div>
    </div>
  </div>
</template>
