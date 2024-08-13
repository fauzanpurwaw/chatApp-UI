<script setup lang="ts">
const { openedChat } = storeToRefs(useGeneralStore());
const { clearOpenedChat } = useGeneralStore();

const { onClickEdit } = defineProps<{
  onClickEdit: any
}>();
</script>

<template>
  <div class="flex justify-between w-full py-3 pl-4 pr-2 border-b">
    <div class="flex items-center gap-4 cursor-pointer h-9">
      <Icon
        name="octicon:chevron-left-24"
        size="20"
        class="bg-slate-700 lg:hidden inline-block"
        @click="clearOpenedChat()"
      />
      <div class="flex flex-col items-start justify-start">
        <div class="font-semibold text-sm text-blue-500 ">{{ openedChat?.customerName }}</div>
        <div class="font-semibold text-[12px] text-slate-700 ">{{ openedChat?.customerPhoneNum }}</div>
      </div>
    </div>
    <div class="flex items-center gap-1">
      <div
        class="rounded-full px-2 flex items-center justify-center duration-200 cursor-pointer"
      >
        <div class="md:flex hidden items-center">
          <Icon
            name="material-symbols:account-circle"
            size="28"
            class="bg-slate-400"
          />
          <Dropdown
            selected="unassigned"
            :data="[
              { name: 'Unassigned', value: 'unassigned' },
              { name: 'Assigned', value: 'assigned' },
            ]"
            :style="{
              'border-none': true,
              '!px-1': true,
              '!w-24': true,
            }"
            :content-style="{
              'md:!w-24': true,
              'm-0': true,
            }"
            icon="octicon:chevron-down-24"
            :sm-unhide-placeholder="true"
          />
        </div>
        <div class="pr-2 pl-1 text-slate-400">|</div>
        <div class="flex items-center gap-1" @click="onClickEdit()">
          <div class="md:flex hidden gap-1">
            <div class="h-5 w-5 bg-slate-400 rounded-full"></div>
            <div class="h-5 w-5 bg-slate-400 rounded-full"></div>
            <div class="h-5 w-5 bg-slate-400 rounded-full"></div>
          </div>
          <Icon
            name="solar:menu-dots-bold"
            size="22"
            class="bg-slate-400 rotate-90"
          />
        </div>
      </div>
    </div>
  </div>
</template>
